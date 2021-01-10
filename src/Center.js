import React from 'react';
import './Center.css';
import CreatePost from './CreatePost';
import Post from './Post';
import Story from './Story';
function Center({user}) {
    return (
        <div className="Center">
            <Story/>
            <CreatePost user={user}/>
            <Post/>
        </div>
    )
}

export default Center
