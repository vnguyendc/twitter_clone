import React from 'react'
import './SidebarProfile.css'
import { Avatar, Button } from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SidebarProfile() {
    return (
        <div class="sidebarProfile">
            <Avatar src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p320x320/120134165_3937554602939469_9113452377263565864_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=DPVls_D_4a8AX-YjG7G&_nc_ht=scontent-lax3-1.xx&tp=6&oh=e329e9d8b36177099e50b4e1e7d55f45&oe=5FF91D9E"/>
            <div className="sidebarProfile__text">
                <h3>Vinh Nguyen</h3>
                <p>@vinhthekid</p>
            </div>
            <div className="sidebarProfile__more">
                <MoreHorizIcon></MoreHorizIcon>
            </div>
        </div>
    )
}

export default SidebarProfile
