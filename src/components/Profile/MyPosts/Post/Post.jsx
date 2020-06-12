import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div>
    
        <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxtY0sVwEqctsEX-Gwo5VqYJCFrKGVUAStYX2r0kX7ZzhyUmHK&usqp=CAU"></img>
             {props.message}
            <div>
             <span>{props.like}</span>
            </div>
        </div>

    </div>
    )
}

export default Post;