import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';






const MyPosts = (props) => {
    let postElement = props.state.posts
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);


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
                    {postElement}
                </div>
            </div>
    </div>
    )
}

export default MyPosts;