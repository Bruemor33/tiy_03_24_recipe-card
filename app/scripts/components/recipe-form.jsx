var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var RecipeForm = React.createClass({
  handleSubmit: function(){

  },
  render: function(){
    return (
      <div class="row">
        <div class="col-md-12">
          <form>
            <input name="title" type="#" id="title" placeholder="Recipe Title" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="first ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="second ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="third ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="fourth ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="fith ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="sixth ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="seventh ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="eighth ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="ninth ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input name="ingredient" type="#" id="ingredient" placeholder="tenth ingredient" />
            <input name="quantity" type="#" class="ammount" placeholder="qty" /><br/>
            <input type="submit" value="Submit!" />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = {
  'RecipeForm': RecipeForm
}
