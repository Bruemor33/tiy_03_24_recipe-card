var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var Router = require('./router.js');

var RealRouter = new Router();
$(function(){
  Backbone.history.start();
})
