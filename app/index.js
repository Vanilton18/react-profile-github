import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles.css';
import { Home } from 'scream/home';
import RepoList from 'scream/repo-list';
import  User  from 'scream/user';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Home} /> 
  <Route path="/:username" component={User} />
  </Router>,
  root
);
