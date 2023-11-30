import React from 'react'
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='left'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo-netflix"></img>
                
                    <span>Home</span>
                    <span>Movies</span>
                    <span>Series</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                <span><Search/></span>
                <span>KID</span>
                <span><Notifications/></span>
                <span><img src="https://media.licdn.com/dms/image/D4D03AQFEUZ24XKNWXw/profile-displayphoto-shrink_400_400/0/1685534633237?e=1701907200&v=beta&t=nZR1hpJ1hxOrc65eFQxV3eKKX9T8Feq8VRXAsZrZ8lg" alt="profile"></img></span>
                <div className='profile'>
                    <span><ArrowDropDown/></span>
                    <div className='options'>
                        <span> Settings </span>
                        <span> Logout </span>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Navbar;