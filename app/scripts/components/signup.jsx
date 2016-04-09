var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
require('backbone-react-component');

var Parse = require('parse');
var ParseReact = require('parse-react');

$(function(){
Parse.initialize("recipe");
Parse.serverURL = "http://recipe-card.herokuapp.com/";
});


var SignupPageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  login: function(username, password){
    Parse.User.logIn(username, password, {
      success: function(user){
        Backbone.history.navigate("recipe", {trigger: true});
        this.props.setUser(user);
        console.log(success);
      }.bind(this),
      error: function(user, error){
        console.log(error);
      }
    })
  },

  createUser: function(email, password){
    console.log(email);
    var user = new Parse.User();
    user.set({
      'username': email,
      'password': password
    });

    user.signUp(null, {
      success: function(user){
        Backbone.history.navigate("home", {trigger: true});
        alert("Success!");
        console.log(user);
      },
      error: function(user, error){
        alert("Error" + error.code + " " + error.message);
      }
    })
  },

  render: function(){
    return (
      <div>
        <div className="row">
          <div className="col-md-6" id="signupContainer">
            <SignupComponent createUser={this.createUser} />
          </div>
          <div className="col-md-6" id="loginContainer">
            <LoginComponent login={this.login} />
          </div>
        </div>
      </div>
    )
  }
})

var LoginComponent = React.createClass({
  mixins:[Backbone.React.Component.mixin],

  getInitialState: function(){
    return {
      "username": '',
      "password": ''
    }
  },
  handlePassword: function(event){
    this.setState({'password': event.target.value})
  },
  handleUsername: function(event){
    this.setState({'username': event.target.value})
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.props.login(this.state.username, this.state.password)
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login">
          <input name="username" onChange={this.handleUsername} value={this.state.username} id="username" placeholder="username" /><br/>
          <input name="password" onChange={this.handlePassword} value={this.state.password} id="password" placeholder="password" /><br/>
          <input type="submit" value="Login!" />
        </form>
      </div>
    )
  }
});


var SignupComponent = React.createClass({
  getInitialState: function(){
    return {
      "email": '',
      "password": ''
    }
  },
  handlePassword: function(event){
    this.setState({'password': event.target.value });
  },
  handleEmail: function(event){
    this.setState({'email': event.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.createUser(this.state.email, this.state.password)
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signup">
          <input name="email" onChange={this.handleEmail} value={this.state.email} id="email" placeholder="example@email.com" /><br/>
          <input name="password" onChange={this.handlePassword} value={this.state.password} id="password" placeholder="password" /><br/>
          <input type="submit" value="Signup!" />
        </form>
      </div>
    )
  }
})

module.exports = {
  'SignupPageComponent': SignupPageComponent
}
