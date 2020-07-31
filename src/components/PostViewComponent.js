import React from 'react';
import withContext from '../context/withContext';

const PostViewComponent = props => {
    console.log(props);
    const post = props.context.posts.find(p => p.postId === props.match.params.id);
    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    );
}

export default withContext(PostViewComponent);