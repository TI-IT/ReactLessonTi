import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


let postsData = [
    { id: 1, message: "It's my first post", likesCount: '15' },
    { id: 2, message: "Hi my frend", likesCount: '10' },
    { id: 3, message: "Welcom", likesCount: '20' },
]

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
                    <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount} />
                    <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount} />
                    <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount} />
                </div>
            </div>
    </div>
    )
}

export default MyPosts;