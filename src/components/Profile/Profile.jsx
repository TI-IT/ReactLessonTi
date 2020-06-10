import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://wallbox.ru/wallpapers/main/201330/2b81c266a9de284.jpg'></img>
            </div>
            <div>
                ava + description
        </div>
            <div>
                My posts
        </div>
        <div className={s.posts}>
        New posts
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
        </div>
    );
}

export default Profile;