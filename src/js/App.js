import React, { useState, Component } from "react";

// use with webpack - ensure image loader is active
// import tenshiPic from "../img/71934278_p0.jpg";
// import anotherPic from "../img/ffc5c61b653d7b6342db94447a6ca75e.png";
// uncomment when using npm run watch
// const tenshiPic = require('./img/icons/71934278_p0.jpg'); //if using webpack comment out
// import '../sass/styles.scss'; // use for webpack.dev / production build, comment out when using npm run watch (gulp)
const App = () => {

  return (
    <main className="central">
      <h1>Start Pack Active</h1>
      <h2>Recommended MVC folder structure already created. Change to your liking.</h2>
      <p>This start-up kit is ready for MERN stack.</p>
      <br/>
      <p>Gulp (npm run watch) is default server.</p>
      <p>Running both Gulp and Webpack live-servers simultaneously will likely create conflicts in code and is not recommended.</p>
      <p>Run Webpack live server and compiler, without Gulp, via (npm run serve-webpack) command. Just be sure to change how images and stylings are imported into the App.js component (typically an issue when implementing React). Look in the ReadMe for more details.</p>
      <br/>
      <div className="info-card">
        <p>This start-up pack is set to run MERN stack apps. Additionally it can run the AdonisJS framework and SASS (may need to install globally). I am considering on integrating Gatsby into this dev-kit for static development.</p>
        <p>By default, GulpJS compiles CSS, images, and any templates while providing a live-server. Webpack compiles our Javascript code.</p>
        <p>Gulp seems to reload twice - once for stylings and html and a second time as webpack compiles the code. Will try to look for a solution. If stylings somehow refuse to change when Gulp refreshes its live-server, you may need to delete the /dist/img/styles.css file (& maybe the index.bundle) and try 'npm run watch' again.</p>
        <pre><code>npm run serve-webpack</code></pre>
        <p>Alternatively Webpack will provide its own live-server and proxy. May be faster. Also, Webpack takes control of compiling all files and images. Be sure to uncomment all loader sections if making the switch which is recommended. Also, it's recommened to stop using Gulp as it may create conflicts in your code.</p>
        <p>Run a proxy server through gulpJS. Multiple servers can be run in this manner. For example, running AdonisJS server along with this proxy.</p>
        <p>If you instead use Webpack for development, it too has a proxy server.</p>
        <p><strong>Gulp 4.0.2</strong> & <strong>Webpack 4.44.2</strong> versions used.</p>
        <p>For a React app code goes in the src folder. Gulp and Webpack will take care of the rest, compiling your code into the dist folder.</p>
        <p></p>
        <h2>Have Fun and Happy Coding!</h2>
        <p></p>
        <p>Picture of - Tenshi Hinanawi</p>
      </div>
      <div className="info-card__image">
      {/* when using webpack dev server use import {tenshiPic} */}
        {/* <img src={tenshiPic} alt="Tenshi Hinanawi" /> */}
        {/* <img src={anotherPic} alt="Momiji Inubashiri Nitori Forest" /> */}
        {/* only src link img with gulp use */}
        {/* uncomment when using npm run watch */}
        <img src="./img/71934278_p0.jpg" alt="Tenshi Hinanawi" />
        <img src="./img/34567848_p0.jpg" alt="Momiji Inubashiri" />
      </div>
    </main>
  );
};

export default App;

/*
import React, { Fragment, useEffect, useState, Component } from "react";
// const { connectAdvanced } = require('react-redux');
// import tenshiPic from "../img/71934278_p0.jpg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux'; // connects the two, enables all components to access app level (global) state. Provided via redux. Pass store into provideer.
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'; // upon loading app, USER_LOADED should run as this APP.js file has been loaded and run (not the auth action file). Due to already having the token (attached to the req) of a user in the localstorage that is still valid.


import '../sass/styles.scss'; // for production build, comment out when using npm run watch


// <Switch> can only contain routes
// check if token exists, in order to dispatch / use the loadUSer method from the auth action properly, import the useEffect hook (placed inside of the jsx). 
if (localStorage.token) {
  setAuthToken(localStorage.token); // set header with token if one exists
}
// use the loadUser method of the auth action file via useEffect hook, access the entire redux store and use the redux method of dispatch and pass the action method into it.
// BE aware that when the state updates the useEffect will continue running (a constant loop) unless a second param of [] is added. Doing so ensures that the useEffect in this App.js file only runs once (when the app is loaded / mounted). Think of it as using 'componentdidmount' as with react class components. BONUS: certain properties can be passed into the [] which will cause the useEffect to only update if those properties update. Check the donumentation for more info.
// load user upon the running of this file (at the start of the app)
// ensure the USER_LOADER via calling the loadUser method of the auth action file.
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store} >
      <Router>
        <Fragment>
          <Navbar />
          <Switch >
            <Route exact path="/" component={ Landing } />
            <Route component={ Routes } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// https://www.youtube.com/watch?v=W334eLef0-g
*/