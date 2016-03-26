var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Parse = require('parse');
Parse.initialize("recipe");
Parse.erverURL = "http://recipe-card.herokuapp.com/";
console.log(Parse);


var SignupPageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  login: function(username, password){
    Parse.User.logIn(username, password, {
      success: function(user){
        Backbone.history.navigate("home", {trigger: true});
        this.props.setUser(user);
      }.bind(this),
      error: function(user, error){
        console.log(error);
      }
    })
  },

  createUser: function(username, email, password){

    var user = new Parse.User();
    user.set({
      "username": username,
      "password": password,
      "email": email
    });

    user.signup(null, {
      success: function(user){
        Backbone.history.navigate("home", {trigger: true});
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
        <form onSubmit={this.props.handleSubmit} className="login">
          <input name="username" onChange={this.handleUsername} value={this.state.username} id="username" placeholder="username" /><br/>
          <input name="password" onChange={this.handlePassword} value={this.state.username} id="password" placeholder="password" /><br/>
          <input type="submit" value="Login!" />
        </form>
      </div>
    )
  }
});


var SignupComponent = React.createClass({
  mixins:[Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  handleUsername: function(event){
    this.setState({'username': event.target.value});
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
        <form onSubmit={this.props.handleSubmit} className="signup">
          <input name="username" onChange={this.handleUsername} value={this.state.username} id="username" placeholder="username" /><br/>
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
