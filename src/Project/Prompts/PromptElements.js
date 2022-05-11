import styled from 'styled-components'

export const PageContainer = styled.div`
    padding: 20vw;

    @media screen and (max-width: 600px) {
        padding: 2%;
        padding-top: 10%;
    }
`

export const PromptContainer = styled.div`
    color: #222;
    background: lightblue;
    padding: 10%;
    border-radius: 20px;
`

export const WordWrapper = styled.div`
    height: 20vh;
    width: 100%;
    background: #f1f1f1;
    border: solid;
    border-color: #aaa;
    border-width: 1px;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OptionWrapper = styled.div`
    display: flex;
    padding: 5px 5%;
    justify-content: space-between;
    align-items: center;
`

export const StoryWrapper = styled.div``

export const WpmWrapper = styled.div``

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Word = styled.h2`
    color: #222;
`

export const WpmInput = styled.input`
    width: 3rem;
`

export const WpmSpan = styled.span``

export const StoryText = styled.div`
`

export const PlayButton = styled.button`
    color: #222;
    background: #80dE80;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    font-size: 4rem;
    font-weight: 800;
    border: none;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #70cE70;
        color: #000;
    }
`

export const StorySelectButton = styled.button`
    color: #222;
    background: #80dE80;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 800;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #70cE70;
        color: #000;
    }
`