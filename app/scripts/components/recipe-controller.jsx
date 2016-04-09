var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');
var ParseReact = require('parse-react');
require('Backbone-React-Component');

//Controller for pages.

//Local Imports
var NavigationComponent = require('./navigation.jsx').NavigationComponent;
var SignupPageComponent = require('./signup.jsx').SignupPageComponent;
var RecipeForm = require('./recipe-form.jsx').RecipeForm;

//Parse server connection
Parse.initialize("recipe");
Parse.serverURL = "http://recipe-card.herokuapp.com/";

var ControllerCompoent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return {
      router: this.props.router,
      userId: null
    }
  },
  componentWillMount: function(){
    this.callback = (function(){
      this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  setUser: function(user){
    this.setState({"userId": user.id});
  },
  render: function(){
    var body;
    console.log(this.state.router);
    if(this.state.router.current == "login"){
      body = (<SignupPageComponent />);
    }
    if(this.state.router.current == "recipe"){
      body = (<RecipeForm />);
    }
    return (
      <div>
        <NavigationComponent />
        {body}
      </div>
    )
  }
});

//Exports
module.exports = {
  'ControllerCompoent': ControllerCompoent
}
