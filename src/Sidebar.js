import { Chat, EmojiEmotions, EventSeat, ExpandMore, Group, People, Store, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import './Sidebar.css';
import SidebarDetail from './SidebarDetail';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarDetail
             Icon={EmojiEmotions}
             title="COVID-19 Information Center"
            />
             <SidebarDetail
             Icon={People}
             title="Friends"
            />
             <SidebarDetail
             Icon={Chat}
             title="Groups"
            />
             <SidebarDetail
             Icon={Store}
             title="Marketplace"
            />
             <SidebarDetail
             Icon={VideoLibrary}
             title="Videos"
            />
             <SidebarDetail
             Icon={EventSeat}
             title="Events"
            />
             <SidebarDetail
             Icon={ExpandMore}
             title="See More"
            />








            
           
        </div>
    )
}

export default Sidebar
