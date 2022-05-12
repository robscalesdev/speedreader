import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { 
    PageContainer,
    PromptContainer,
    WordWrapper,
    Word,
    OptionWrapper,
    WordCountWrapper,
    WpmWrapper,
    WpmInput,
    WpmSpan,
    ButtonWrapper,
    PlayButton,
    StoryWrapper,
    StoryText,
    WordCountText,
    StorySelectButton
} from './PromptElements';
import { BiPlay, BiPause, BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

const Prompts = ({ posts, wpm, setWpm }) => {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight - 48)

    useEffect(() => {
        window.addEventListener('resize', () => setWindowHeight(window.innerHeight - 48))
    })

    const { id } = useParams()
    // const [content, setContent] = useState([])
    const [currentCount, setCurrentCount] = useState(0)
    const [activeStory, setActiveStory] = useState([])
    const [activeWord, setActiveWord] = useState('')
    const [storyCount, setStoryCount] = useState(1)
    const [play, setPlay] = useState(false)

    const wordDelay = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 60000/wpm);
    });

    const togglePause = () => {
        setPlay(prev => !prev)
    }

    const handleWpm = (event) => {
        setWpm(event.target.value)
    }

    useEffect(() => {

        // console.log(posts.find(post => post.data.id === id))
        // setContent(posts.find(post => post.data.id === id))
        // console.log(content)
        if (posts.length > 0) {
            axios.get(`${posts.find(post => post.data.id === id).data.url}.json`)
            .then(response => {
                // setContent(response.data[1].data.children)
                setStoryCount(response.data[1].data.children.length - 1)
                if (response.data[1].data.children[1]) {
                    setActiveStory(response.data[1].data.children[1].data.body.split(" "))
                }
                console.log(response.data[1].data.children[1].data.body.split(" "))
            })
            .catch(error => {
                console.error(error)
                return <Navigate to='/' />
            })
        }

    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (play && currentCount < activeStory.length) {
            wordDelay
                .then(() => {
                    setActiveWord(activeStory[currentCount])
                    setCurrentCount(prev => prev + 1)
                })
        }
    // eslint-disable-next-line
    }, [activeStory, currentCount, play])

    if (posts.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <PageContainer windowHeight={windowHeight}>
            <PromptContainer>
            <WordWrapper>
                <Word>{activeWord}</Word>
            </WordWrapper>
            <OptionWrapper>
                <StoryWrapper>
                    <StoryText>Story: 1 of {storyCount > 0 ? `${storyCount}` : '0'}</StoryText>
                </StoryWrapper>
                <WordCountWrapper>
                    <WordCountText>
                        {activeStory.length} words
                    </WordCountText>
                </WordCountWrapper>
                <WpmWrapper>
                    <WpmInput type="text" value={wpm} onChange={handleWpm} />
                    <WpmSpan> wpm</WpmSpan>
                </WpmWrapper>
            </OptionWrapper>
            <ButtonWrapper>
                    <StorySelectButton><BiArrowToLeft /></StorySelectButton>
                    <PlayButton onClick={togglePause}>{play ? <BiPause /> : <BiPlay />}</PlayButton>
                    <StorySelectButton><BiArrowToRight /></StorySelectButton>
            </ButtonWrapper>
            </PromptContainer>
        </PageContainer>
    )
}

export default Prompts
