import { Avatar } from '@material-ui/core'
import React from 'react'

function StorySingle({icon,name}) {
    return (
        <div className="StorySingle" >
            <Avatar src={icon} />
            <h3>
                {name}
            </h3>
        </div>
    )
}

export default StorySingle
