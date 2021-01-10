import { Avatar, IconButton } from '@material-ui/core';
import { Add, ExpandMore, Flag, Forum, Home, NotificationImportant, Search, Store, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';
import React ,{ useState}from 'react'
import "./Header.css";
function Header({user}) {
    const [search, setsearch] = useState("");
    const searchFB=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="header">
           <div className="header__left">
               <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" height="60" />
               <form>
                   <Search/>
                   <input type="text" placeholder="Search Facebook" value={search} onChange={(e)=>{setsearch(e.target.value)}}  />
                   <button type="submit" >none</button>
               </form>
           </div>
           <div className="header__center">
               <div className="header__option">
                  <Home fontSize="large" />
               </div>
               <div className="header__option">
                  <Flag fontSize="large" />
               </div>
               <div className="header__option">
                  <Subscriptions fontSize="large" />
               </div>
               <div className="header__option">
                  <Store fontSize="large" />
               </div>
               <div className="header__option">
                  <SupervisedUserCircle fontSize="large" />
               </div>
              
           </div>
           <div className="header__right">
              <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
              </div>
              <div className="header__right__option">

             
              <IconButton>
                  <Add/>
              </IconButton>
              <IconButton>
                  <Forum/>
              </IconButton>
              <IconButton>
                  <NotificationImportant/>
              </IconButton>

              <IconButton>
                  <ExpandMore/>
              </IconButton>
              </div>
           </div>


        </div>
    )
}

export default Header
