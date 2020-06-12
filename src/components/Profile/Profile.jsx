import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={s.content}>
            <div>
                <img src='https://wallbox.ru/wallpapers/main/201330/2b81c266a9de284.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
            </div>
}

export default Profile;