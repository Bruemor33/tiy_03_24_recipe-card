var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var router = require('./router/router.js');
var ControllerCompoent = require('./components/recipe-controller.jsx').ControllerCompoent;

$(function(){
  Backbone.history.start();
  // console.log(router);
  ReactDOM.render(
    React.createElement(ControllerCompoent, {
      router: router
    }),
    document.getElementById('home')
  );
});
