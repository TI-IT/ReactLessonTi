import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
    <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                <textarea>remove</textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
                <div className={s.posts}>
                <Post message='Hi, how are you?' like='15' />
                <Post message="It's my first post" like='20'/>
                </div>
            </div>
    </div>
    )
}

export default MyPosts;