var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var Router = require('./router.js');

var realRouter = new Router();
$(function(){
  Backbone.history.start();
})
