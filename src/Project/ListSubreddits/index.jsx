import React from "react";
// import { Button } from "shared/components";

const SubReddits = ({ subreddits, setSubreddits }) => {

    return (
        <div>
            {subreddits.map(subreddit => {
                return (
                    <div key={subreddit}>
                        <span>{subreddit}</span>
                    </div>
                )
            })}
            <button>New</button>
        </div>
    )
}

export default SubReddits
