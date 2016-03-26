var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');
require('backbone-react-component');



var SignupPage = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

  },
  render: function(){
    return (
      <div class="row">
        <div class="col-md-12">
          <form onSubmit={this.props.handleSubmit} class="signup">
            <input name="email" type="email" id="email" placeholder="example@email.com" /><br/>
            <input name="password" type="password" id="password" placeholdder="password" /><br/>
            <input type="submit" value="Signup!" />
          </form>
          <form class="login">
            <input name="email" type="email" id="email" placeholder="example@email.com" /><br/>
            <input name="password" type="password" id="password" placeholdder="password" /><br/>
            <input type="submit" value="Login!" />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = {
  'SignupPage': SignupPage
}
