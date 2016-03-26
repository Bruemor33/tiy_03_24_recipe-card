var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SignupPageComponent = require('../components/signup.jsx').SignupPageComponent;
var RecipeForm = require('../components/recipe-form.jsx').RecipeForm;

var Router = Backbone.Router.extend({
  routes: {
    '': 'login',
    'recipe': 'recipe',
    'myRecipe': 'myRecipe'
  },
  login: function(){
    ReactDOM.render(
      React.createElement(SignupPageComponent), document.getElementById('home')
    );
  },
  recipe: function(){
    ReactDOM.render(
      React.createElement(RecipeForm), document.getElementById('home')
    );
  }
})

module.exports = {
  'Router': Router
}
