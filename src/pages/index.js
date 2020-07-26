import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Home from '../pages/Home/Home.js';
import Article from '../pages/Article/Article.js';
import More from '../pages/More/More.js';

const Pages = ({ user }) => {
  return (
    <Router>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article/:id" component={Article}/>
          <Route exact path="/more/:id" component={More}/>
        </Switch>
      </LastLocationProvider>
    </Router>
  );
};

export default Pages;
