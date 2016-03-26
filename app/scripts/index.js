var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var Router = require('./router/router.js').Router;

var RealRouter = new Router();
$(function(){
  Backbone.history.start();
});

// var SignupComponent = require('./components/signup.jsx').SignupComponent;
//
// ReactDOM.render(
//   React.createElement(SignupComponent),
//   document.getElementById('home')
// );
