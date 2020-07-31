import React from 'react';
import PostListComponent from './PostListComponent';
import PostViewComponent from './PostViewComponent';
import { Route } from 'react-router-dom';

export default () => {
    return (
        <div style={{display:'flex'}}>
            <PostListComponent />
            <Route path='/posts/:id' component={PostViewComponent}/>
        </div>
    );
}