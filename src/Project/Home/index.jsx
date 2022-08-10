import React, { useEffect, useState } from 'react';
import {
    PostWrapper,
    Post,
    PostBody,
    PostHeader,
    PostsWrapper,
    ProjectPage,
    SubredditButton,
    SubredditContainer,
    SubredditWrapper,
    Prompt,
    PromptTextWrapper,
    PromptText,
    PromptControlsWrapper,
    WpmWrapper,
    PlayButton,
    StorySelect,
    PlayIcon,
    PauseIcon,
    LeftArrow,
    RightArrow,
    HeaderArrow,
    WpmInput,
    TimeSpan
} from './Styles';
import { getNewPosts, getPostContents } from '../../api/posts'
import { format } from 'date-fns'

import axios from 'axios';

const Home = ({ user, posts, setPosts }) => {

    const subs = [
        'WritingPrompts',
        'AskReddit'
    ]

    // subreddit state
    const [subreddits] = useState(subs)
    const [activeSub, setActiveSub] = useState(subs[0])

    // select story state
    const [selectedPost, setSelectedPost] = useState(-1)
    const [storyCount, setStoryCount] = useState(1)
    const [allStories, setAllStories] = useState([])
    const [activeStory, setActiveStory] = useState([])
    const [currStory, setCurrStory] = useState(0)

    // play current story state
    const [play, setPlay] = useState(false)
    const [currWord, setCurrWord] = useState(0)
    const [wpm, setWpm] = useState(250)

    const handleActiveSub = ( event ) => {
        setActiveSub(event.target.name)
    }

    // when a prompt is clicked on
    const expandPost = (e, url, i) => {

        // default to paused, set to first word of the current story
        setPlay(false)
        setCurrWord(0)

        // creates the toggle to make the dropdown disappear
        if (selectedPost === i) {
            setSelectedPost(-1)
            setActiveStory([])
        // if selecting a new story, make it appear
        } else {
            setSelectedPost(i)
            setCurrStory(0)

            // get one post
            getPostContents(url)
            .then(response => {
                setAllStories(response.data.stories)
                setActiveStory(response.data.stories[0])
                setStoryCount(response.data.stories.length)
            })
            .catch(() => {
                setAllStories([])
                setActiveStory([])
                setStoryCount(0)
            })
        }
        
    }

    const handlePrevStory = () => {
        setPlay(false)

        if (currWord > 10) {
            setCurrWord(0)
        }
        else if (currStory > 0) {
            setCurrStory(prev => prev - 1)
            setCurrWord(0)
        }
    }

    // rewind works, but the button messed up the UI "flow"
    // might implement later
    // const handleRewindStory = () => {
    //     if (currWord > 10) {
    //         setCurrWord(prev => prev - 50)
    //     } else {
    //         setCurrWord(0)
    //     }
    // }

    const handleNextStory = () => {
        setPlay(false)
        
        if (currStory < storyCount - 1) {
            setCurrStory(prev => prev + 1)
            setCurrWord(0)
        }
    }

    const wordDelay = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 60000/wpm);
    });

    useEffect(() => {
        // get all posts
        getNewPosts(activeSub)
        .then(response => {
            setPosts(response.data.posts)
        })
        .catch(console.error)
    // eslint-disable-next-line
    }, [activeSub])

    useEffect(() => {
        if (allStories.length > 0) {
            setActiveStory(allStories[currStory])
        }
    // eslint-disable-next-line
    }, [allStories, currStory])

    useEffect(() => {
        if (play && currWord < activeStory.length) {
            wordDelay
                .then(() => {
                    setCurrWord(prev => prev + 1)
                })
        }
    // eslint-disable-next-line
    }, [activeStory, currWord, play])

    return (
        <ProjectPage>
            <SubredditContainer>
                <SubredditWrapper>
                    {subreddits.map(subreddit => {
                        return <SubredditButton
                            key={subreddit} name={subreddit} onClick={handleActiveSub} selected={activeSub === subreddit}>{subreddit}</SubredditButton>
                    })}
                </SubredditWrapper>
            </SubredditContainer>
            <PostsWrapper>
                {posts.map((post, i) => {
                    const selected = (selectedPost === i)
                    const created = format(new Date(post.data.created_utc * 1000), 'MM/dd p').split(' ')
                    return (
                        <PostWrapper key={post.data.id} selected={selected}>
                            <Post onClick={(e) => expandPost(e, post.data.permalink, i)}>
                                <PostHeader><HeaderArrow />{post.data.ups} <TimeSpan>{created[0] + ' at ' + created[1] + created[2]}</TimeSpan></PostHeader>
                                <PostBody>{post.data.title}</PostBody>
                            </Post>
                            <Prompt selected={selected}>
                                <PromptTextWrapper selected={selected}>
                                    <PromptText>{activeStory.length > 0 && currWord === 0 ? activeStory.length + ' words' : activeStory[currWord]}</PromptText>
                                </PromptTextWrapper>
                                <PromptControlsWrapper selected={selected}>
                                    <WpmWrapper>
                                        <WpmInput value={wpm} onChange={(e) => setWpm(e.target.value)} /> words per minute
                                    </WpmWrapper>
                                    <PlayButton onClick={() => setPlay(!play)}>{play ? <PauseIcon /> : <PlayIcon />}</PlayButton>
                                    <StorySelect>
                                        <LeftArrow onClick={handlePrevStory} />
                                        {/* <RewindArrow onClick={handleRewindStory} /> */}
                                        {currStory + 1} of {storyCount}
                                        <RightArrow onClick={handleNextStory} />
                                    </StorySelect>
                                </PromptControlsWrapper>
                            </Prompt>
                        </PostWrapper>
                    )
                })}
            </PostsWrapper>                         
        </ProjectPage>
    )
}

export default Home
