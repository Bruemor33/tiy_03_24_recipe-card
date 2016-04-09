var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login',
    'recipe': 'recipe',
    'myrcipe': 'myrecipe'
  },
  login: function(){
    this.current = "login";
  },
  recipe: function(){
    this.current = "recipe";
  },
  myRecipe: function(){
    this.current = "myrecipe";
  }
});

module.exports = new Router()
