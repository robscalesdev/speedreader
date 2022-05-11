import React, { useEffect, useState } from 'react';
import { ProjectPage } from './Styles';
import { Link } from 'react-router-dom';
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

    const [subreddits] = useState(subs)
    const [activeSub, setActiveSub] = useState(subs[0])

    const handleActiveSub = ( event ) => {
        setActiveSub(event.target.name)
    }

    useEffect(() => {
        axios({
            url: `https://www.reddit.com/r/${activeSub}/top/.json`,
            method: 'GET'
        })
          .then(response => {
            // console.log(response.data.data.children)
            console.log(response.data.data.children.filter(child => child.data.num_comments > 1))

            // makes sure each post has at least one response, or filters it
            setPosts(response.data.data.children.filter(child => child.data.num_comments > 1))
          })
          .catch(console.error)
    }, [activeSub])

    return (
        <ProjectPage>
            <div style={{ display: 'flex', padding: '10vh 10vw' }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    width: '20%' }}>
                    {subreddits.map(subreddit => {
                        return <button style={{ 
                            // padding: '1rem auto',
                            height: '3rem',
                            margin: '0.5rem 1rem 0.5rem 0',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: 'gray',
                            borderRadius: '3px'
                            }} 
                            key={subreddit} name={subreddit} onClick={handleActiveSub}>{subreddit}</button>
                    })}
                </div>
                <div style={{ width: '50%' }}>
                    {posts.map(post => {
                        return <div key={post.data.id} style={{ 
                            padding: '1rem',
                            margin: '0.5rem 1rem',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: 'gray',
                            borderRadius: '3px'
                            }}><Link to={`/story/${post.data.id}`}>{post.data.title}</Link></div>
                    })}
                </div>             
            </div>

            <p>add, update, delete list of subreddits</p>
            <p>prompt selected results in moving to new page to read</p>
            
        </ProjectPage>
    )
}

export default Home
