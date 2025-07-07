import { useState } from 'react';

export default function LikesButton() {
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }
    return (<button onClick={handleClick}>Likes {likes}</button>);
}