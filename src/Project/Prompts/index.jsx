import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
    PageContainer,
    PromptContainer,
    WordWrapper,
    Word,
    OptionWrapper,
    WpmWrapper,
    WpmInput,
    WpmSpan,
    ButtonWrapper,
    PlayButton,
    StoryWrapper,
    StoryText,
    StorySelectButton
} from './PromptElements';
import { BiPlay, BiPause, BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

const Prompts = ({ posts }) => {


    const { id } = useParams()
    const [content, setContent] = useState([])
    const [currentCount, setCurrentCount] = useState(0)
    const [activeStory, setActiveStory] = useState([])
    const [activeWord, setActiveWord] = useState('')
    const [storyCount, setStoryCount] = useState(1)
    const [play, setPlay] = useState(false)
    const [wpm, setWpm] = useState(250)

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

        axios.get(`${posts.find(post => post.data.id === id).data.url}.json`)
            .then(response => {
                setContent(response.data[1].data.children)
                setStoryCount(response.data[1].data.children.length - 1)
                if (response.data[1].data.children[1]) {
                    setActiveStory(response.data[1].data.children[1].data.body.split(" "))
                }
                console.log(response.data[1].data.children[1].data.body.split(" "))
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (play && currentCount < activeStory.length) {
            wordDelay
                .then(() => {
                    setActiveWord(activeStory[currentCount])
                    setCurrentCount(prev => prev + 1)
                })
        }
    }, [activeStory, currentCount, play])

    return (
        <PageContainer>
            <PromptContainer>
            <WordWrapper>
                <Word>{activeWord}</Word>
            </WordWrapper>
            <OptionWrapper>
                <StoryWrapper>
                    <StoryText>Stories: {storyCount > 0 ? `${storyCount}` : '0'}</StoryText>
                </StoryWrapper>
                <ButtonWrapper>
                    <StorySelectButton><BiArrowToLeft /></StorySelectButton>
                    <PlayButton onClick={togglePause}>{play ? <BiPause /> : <BiPlay />}</PlayButton>
                    <StorySelectButton><BiArrowToRight /></StorySelectButton>
                </ButtonWrapper>
                <WpmWrapper>
                    <WpmInput type="text" value={wpm} onChange={handleWpm} />
                    <WpmSpan> wpm</WpmSpan>
                </WpmWrapper>
            </OptionWrapper>
            </PromptContainer>
        </PageContainer>
    )
    
    
    // <div style={{ padding: '10% 20%'}}>
    //     <div style={{
    //         borderStyle: 'solid',
    //         borderWidth: '1px',
    //         borderColor: 'gray',
    //         borderRadius: '3px'
    //     }}>
    //     {storyCount === 0 && <h2>No responses yet</h2>}
    //         <h5>Stories: {storyCount}</h5>
    //         <div style={{
    //             height: '30vh',
    //             width: '50vw',
    //             padding: 'auto',
    //             display: 'flex',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             borderStyle: 'solid',
    //             borderWidth: '1px',
    //             borderColor: 'gray',
    //             borderRadius: '3px'
    //         }}>
    //             <h3>{activeWord}</h3>
    //         </div>
    //         <input type="text" value={wpm} style={{ width: '3rem' }} onChange={handleWpm}></input><span>words per minute</span>
    //         <button onClick={togglePause}>{play ? "Pause" : "Play"}</button>
    //     </div>
    // </div>
}

export default Prompts
