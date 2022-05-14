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
    RewindArrow
} from './Styles';
// import React, { useEffect, useState } from 'react';
// import { getExample, createExample } from '../../api/examples'

import axios from 'axios';

const Home = ({ user, posts, setPosts }) => {

    // const [item, setItems] = useState('Hello world!')

    // useEffect(() => {
    //     getExample(example._id, user)
    //     .then(() => {
    //         setItems('Hello World!')
    //     })
    //     .catch(console.error)
    // }, [])

    // imafishyfriend@gmail.com
    // limited1Fishy!

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
    const [wpm] = useState(250)

    const handleActiveSub = ( event ) => {
        setActiveSub(event.target.name)
    }

    const expandPost = (e, url, i) => {
        setPlay(false)
        setCurrWord(0)

        if (selectedPost === i) {
            setSelectedPost(-1)
            setActiveStory([])
        } else {
            setSelectedPost(i)
            setCurrStory(0)

            axios.get(`${url}.json`)
            .then(response => {
                // console.log(response.data)
                if (response.data[1].data.children.length > 0) {
                    const stories = response.data[1].data.children.filter(post => post.data.author !== 'AutoModerator')
                    setAllStories(stories)
                    setActiveStory(stories[0].data.body.split(' '))
                    setStoryCount(stories.length)
                } else {
                    setAllStories([])
                    setActiveStory([])
                    setStoryCount(0)
                }
            })
        }
        
    }

    const handlePrevStory = () => {
        if (currWord > 10) {
            setCurrWord(0)
        }
        else if (currStory > 0) {
            setCurrStory(prev => prev - 1)
            setCurrWord(0)
        }
    }

    const handleRewindStory = () => {
        if (currWord > 10) {
            setCurrWord(prev => prev - 50)
        } else {
            setCurrWord(0)
        }
    }

    const handleNextStory = () => {
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
        axios({
            url: `https://www.reddit.com/r/${activeSub}/top/.json`,
            method: 'GET'
        })
          .then(response => {
            // console.log(response.data.data.children)
            // console.log(response.data.data.children.filter(child => child.data.num_comments > 1))

            // makes sure each post has at least one response, or filters it
            setPosts(response.data.data.children.filter(child => child.data.num_comments > 1))
          })
          .catch(console.error)
    // eslint-disable-next-line
    }, [activeSub])

    useEffect(() => {
        if (allStories.length > 0) {
            setActiveStory(allStories[currStory].data.body.split(' '))
        }
    // eslint-disable-next-line
    }, [currStory])

    useEffect(() => {
        if (play && currWord < activeStory.length) {
            wordDelay
                .then(() => {
                    setCurrWord(prev => prev + 1)
                })
        }
    // eslint-disable-next-line
    }, [activeStory, currWord, play])

    // console.log(activeStory)
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
                    return (
                        <PostWrapper key={post.data.id} selected={selected}>
                            <Post onClick={(e) => expandPost(e, post.data.url, i)}>
                                <PostHeader>{post.data.ups}</PostHeader>
                                <PostBody>{post.data.title}</PostBody>
                            </Post>
                            <Prompt selected={selected}>
                                <PromptTextWrapper selected={selected}>
                                    <PromptText>{activeStory.length > 0 && activeStory[currWord]}</PromptText>
                                </PromptTextWrapper>
                                <PromptControlsWrapper selected={selected}>
                                    <WpmWrapper>{activeStory.length} words at 250 wpm</WpmWrapper>
                                    <PlayButton onClick={() => setPlay(!play)}>{play ? <PauseIcon /> : <PlayIcon />}</PlayButton>
                                    <StorySelect>
                                        <LeftArrow onClick={handlePrevStory} />
                                        <RewindArrow onClick={handleRewindStory} />
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
