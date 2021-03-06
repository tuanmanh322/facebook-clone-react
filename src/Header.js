import React from 'react';
import "./Header.css";

import {Search as SearchIcon, Home as HomeIcon} from '@material-ui/icons';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
function Header() {
    const [{user}, dispatch] = useStateValue();
    console.log(dispatch);
    const logOut = () => {
        dispatch({
            type: actionType.REMOVE_USER
        })
    }

    return <div className="header">
        <div className="header_left">
            <img
                src="data:image/png;base64,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"
                alt=""/>

            <div className="header_input">
                <SearchIcon/>
                <input placeholder="search facebook" type="text"/>
            </div>
        </div>

        <div className="header_center">
            <div className="header_option header-option-active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <SubscriptionsIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <StorefrontIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>
        </div>

        <div className="header_right">
            <div className="header_info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
            <Button variant="contained"  onClick={() => logOut()}>Logout</Button>
        </div>
    </div>;
}

export default Header;