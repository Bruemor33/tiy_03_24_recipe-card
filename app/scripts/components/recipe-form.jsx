var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');
require('backbone-react-component');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var ParseReact = require('parse-react');




var RecipeForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return {title: '', ingredient: '', ammount: ''}
  },

  handleSubmit: function(){

  },

  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="add-recipe-title">Add Recipe Here</h2>
          <form id="add-recipe-form" onSubmit={this.handleSubmit}>
            <div className="col-md-8">
              <fieldset className="form-group add-item-form">
                <label className="form-label" htmlFor="add-recipe-item">Item</label>
                <input type="text" className="form-control" id="add-recipe-item" />
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = {
  'RecipeForm': RecipeForm
}
