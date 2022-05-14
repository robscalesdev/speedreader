import styled from 'styled-components';
import {
  BiPause,
  BiPlay
} from 'react-icons/bi';

import {
  FaStepBackward,
  FaStepForward
} from 'react-icons/fa'

import {
  RiRewindFill
} from 'react-icons/ri'

export const ProjectPage = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  background: #FFEEE7;

  @media screen and (max-width: 1100px) {
    padding: 2% 3%;
  }
`

export const SubredditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubredditWrapper = styled.div`
  display: flex; 
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const SubredditButton = styled.button`
  font-family: 'Merriweather Sans';
  font-size: 0.75rem;
  padding: 0 0.5rem;
  height: 2rem;
  margin: 0 0.25rem;
  border-radius: 80px;
  background: ${state => state.selected ? '#D02500' : '#6B1603'};
  box-shadow: 0px 8px 24px rgba(208, 37, 0, 0.09);
  border: none;
  color: #fff;
`

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;

  @media screen and (max-width: 600px) {
    padding: 1%;
  }
`

export const PostWrapper = styled.div`
  box-shadow: 0px 8px 24px rgba(208, 37, 0, 0.09);
  margin: 0;
  margin-bottom: 1.5rem;
  /* making the edges "disappear" */
  border-radius: 20px; 
  background-color: ${state => state.selected ? '#D02500' : '#FFEEE7'};

  transition: all 100ms ease-in-out;
`

export const Post = styled.div`
  cursor: pointer;
  border-radius: 8px;
  background: #FFF;
  padding: 1.5rem;
  color: #6B1603;

  &:hover {
    color: #D02500;
  }
`

export const PostHeader = styled.div`
  font-size: 0.75rem;
  color: #D02500;
`

export const PostBody = styled.p`
`


export const Prompt = styled.div`
  height: ${state => state.selected ? 15 : 0 }rem;
  width: 100%;
  background: #D02500;
  border-radius: 0 0 20px 20px;
  transition: all 100ms ease-in-out;
  position: relative;
`

export const PromptTextWrapper = styled.div`
  height: 10rem;
  width: 100%;
  display: ${state => state.selected ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

export const PromptText = styled.p`
  color: #fff;
  font-size: 3rem;
`

export const PromptControlsWrapper = styled.div`
  position: absolute;
  display: ${state => state.selected ? 'flex' : 'none'};
  transition: all 100ms ease-in-out;
  justify-content: center;
  align-items: center;
  height: 5rem;
  bottom: 0;
  width: 100%;
  background-color: #6B1603;
  border-radius: 0 0 8px 8px;
`

const ControlWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0.9rem;
  color: #fff;
  max-width: 30%;
  margin: 0 1rem;
`

export const WpmWrapper = styled(ControlWrapper)`
  left: 0;
  border-radius: 0 0 0 8px;

  /* .input {
    width: 3rem;
  } */
`

export const WpmInput = styled.input`
  width: 3rem;
  margin: 0 0.4rem;
`

export const StorySelect = styled(ControlWrapper)`
  right: 0;
  border-radius: 0 0 8px 0;
`

export const PlayButton = styled.button`
  position: relative;
  border: none;
  background-color: #fff;
  border-radius: 999px;
  height: 3rem;
  width: 3rem;
  font-size: 2.5rem;
`

export const PlayIcon = styled(BiPlay)`
  position: absolute;
  color: #6B1603;
  left: 0.4rem;
  top: 0.25rem;
`

export const PauseIcon = styled(BiPause)`
  position: absolute;
  color: #6B1603;
  left: 0.25rem;
  top: 0.25rem;
`

export const RewindArrow = styled(RiRewindFill)`
  margin: 0 0.5rem 0 0.5rem;
  font-size: 1.2em;
  cursor: pointer;
`

export const LeftArrow = styled(FaStepBackward)`
  /* margin: 0; */
  margin: 0 0.5rem;
  cursor: pointer;
`

export const RightArrow = styled(FaStepForward)`
  margin: 0 0.5rem;
  cursor: pointer;
`