var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SignupPage = require('./components/signup.jsx');
var RecipeForm = require('./components/recipe-form.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'login',
    'recipe': 'recipe',
    'myRecipe': 'myRecipe'
  },
  login: function(){
    ReactDOM.render(
      React.createElement(SignupPage), document.getElementById('home')
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
