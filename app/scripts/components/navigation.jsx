var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
require('backbone-react-component');

var Parse = require('parse');
var ParseReact = require('parse-react');

var NavigationComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div className="container-fluid">
        <div id="nav-container" className="row">
          <div className="col-md-12">
            <nav id="nav-elements">
              <a className="recipe-book" href="#">Recipe Book</a>
              <a className="home" href="#">Home</a>
              <a className="create" href="#">Create</a>
              <a className="my-recipes" href="#">My Recipes</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = {
  'NavigationComponent': NavigationComponent
}
