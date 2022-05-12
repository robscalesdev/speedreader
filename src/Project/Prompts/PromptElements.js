import styled from 'styled-components'

export const PageContainer = styled.div`
    height: ${state => state.windowHeight}px;
    overflow: hidden;
    padding: 3rem 20%;
    background-color: #eee;

    @media screen and (max-width: 700px) {
        padding: 2%;
        padding-top: 10%;
    }
`

export const PromptContainer = styled.div`
    color: #222;
    background: #55f;
    padding: 4rem;
    border-radius: 10px;
    border: solid;
    border-width: 1px;
    border-color: #353535;
    box-shadow: 1px 2px 15px 0px #444;
    max-width: 600px;
`

export const WordWrapper = styled.div`
    height: 10rem;
    width: 100%;
    background: #f1f1f1;
    border: solid;
    border-color: #aaa;
    border-width: 1px;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OptionWrapper = styled.div`
    display: flex;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    width: 100%;
    justify-content: space-around;
    align-items: baseline;
    color: #eee;
    font-weight: 700;
    font-size: 1.1rem;

    @media screen and (max-width: 900px) {
        font-size: 1rem;
        padding: 0.5rem 0 1rem 0;
        justify-content: space-between;
    }

    @media screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
`

export const StoryWrapper = styled.div``

export const WordCountWrapper = styled.div``

export const WpmWrapper = styled.div`
    padding: 0;
    margin: 0;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Word = styled.h2`
    color: #222;
`

export const WpmInput = styled.input`
    width: 3rem;
`

export const WpmSpan = styled.span``

export const StoryText = styled.p`
`

export const WordCountText = styled.p`
`

export const PlayButton = styled.button`
    color: #111;
    background: #70cE70;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    font-size: 4rem;
    font-weight: 800;
    /* border: solid; */
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 7px 0px #444;

    &:hover {
        background: #60bE60;
        color: #000;
    }
`

export const StorySelectButton = styled.button`
    color: #111;
    background: #70cE70;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 800;
    /* border: none; */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 7px 0px #444;

    &:hover {
        background: #60bE60;
        color: #000;
    }
`