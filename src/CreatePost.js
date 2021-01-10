import { Avatar} from '@material-ui/core';
import { EmojiEmotions, LiveTvOutlined, Photo } from '@material-ui/icons';
import React ,{useState} from 'react'
import './CreatePost.css';
import db from './firebase';
import firebase from 'firebase';
function CreatePost({user}) {
     const [post, setpost] = useState("");
     const [postUrl, setpostUrl] = useState("");
    const createPost=(e)=>{
       e.preventDefault();
       db.collection("posts").add({
          username:user.displayName,
          userUrl:user.photoURL,
          postUrl:postUrl,
          postText:post,
         
  
       });
       setpost("");
       setpostUrl("");
    }
    return (
        <div  className="CreatePost">
            <form>
                <Avatar src={user.photoURL}/>
                <input type="text" className="post" placeholder="what is in your mind" value={post} onChange={(e)=>{setpost(e.target.value)}} />
                <input type="text" className="photo" placeholder="paste photo url" value={postUrl} onChange={(e)=>{setpostUrl(e.target.value)}} />
                <button type="submit" style={{display:"none"}} onClick={createPost}>none</button>
             </form>
             <div className="CreatePost__option">
                
             <div className="CreatePost__options">
                   <LiveTvOutlined style={{color:"orange"}} />
                   <h4>Live video</h4>
            </div>
                 <div className="CreatePost__options">
                   <Photo style={{color:"green"}} />
                   <h4>Photo / Video</h4>
                 </div>
                 <div className="CreatePost__options">
                   <EmojiEmotions  style={{color:"yellow"}}/>
                   <h4>feeling / Activity</h4>
                 </div>
             </div>
        </div>
    )
}

export default CreatePost
