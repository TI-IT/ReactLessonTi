import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgContent}>
                <img src='https://wallbox.ru/wallpapers/main/201330/2b81c266a9de284.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;