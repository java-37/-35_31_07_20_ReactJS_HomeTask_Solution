import React from 'react';
import withContext from '../context/withContext';
import {withRouter} from 'react-router-dom';

const PostListComponent = (props) => {
    console.log(props);
    return (
        <ul style={{listStyle:'none'}}>
            {props.context.posts.map((p,i) => <li 
            key={i} 
            onClick={() => props.history.push(`/posts/${p.postId}`)}
            >{p.title}</li>)
            }
        </ul>
    );
}

export default withRouter(withContext(PostListComponent));