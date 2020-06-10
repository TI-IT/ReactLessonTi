import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='#3'>Profile</a>
            </div>
            <div className={`${s.item} ${s.activ}`}>
                <a href='#3'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='#3'>News</a>
            </div>
            <div className={s.item}>
                <a href='#3'>Music</a>
            </div>
            <div className={s.item}>
                <a href='#3'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;