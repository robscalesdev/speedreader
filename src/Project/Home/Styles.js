import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectPage = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(100deg, #66f, #33f, #33f, #77f);

  @media screen and (max-width: 1100px) {
    padding: 2% 3%;
  }
`

export const SubredditWrapper = styled.div`
  display: flex; 
  /* flex-direction: column; */
  justify-content: flex-start; 
  /* width: 30%; */

  @media screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Post = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem 1rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  border-radius: 3px;
  color: #222;
  background: #eee;

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.5);
    color: #222;
    background: #ddd;
  }
`