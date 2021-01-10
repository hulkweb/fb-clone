import { Avatar } from '@material-ui/core'
import React from 'react'
import { EmojiEmotions } from '@material-ui/icons';
function SidebarDetail({Icon,title}) {
    return (
        <div className="SidebarDetail">
            <Icon/>
            <h4>
            {title}
            </h4>
        </div>
    )
}

export default SidebarDetail
