import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.state.posts
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);
    
    let newPostElement = React.createRef()
    
    let addPost = () => { 
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
    <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement}>remove</textarea>
                </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
    </div>
    )
}

export default MyPosts;