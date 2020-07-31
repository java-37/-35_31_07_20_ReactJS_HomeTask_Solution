import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {Route,Switch} from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import AboutPageComponent from './components/AboutPageComponent';
import PostsPageComponent from './components/PostsPageComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Switch>
        <Route path='/' exact component={HomePageComponent}/>
        <Route path='/about' component={AboutPageComponent}/>
        <Route path='/posts' component={PostsPageComponent}/>
      </Switch>
    </div>
  );
}

export default App;
