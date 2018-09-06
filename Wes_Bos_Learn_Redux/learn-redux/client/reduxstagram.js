import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App.jsx';
import Photo from './components/Photo.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Photo}></Route>
    </Route>
  </Router>
  )


render(router, document.getElementById('root')); 