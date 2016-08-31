var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var timeInSeconds = this.refs.timeInSeconds.value;
  },
  render: function(){
    return(
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="timeInSeconds" placeholder="Input the amount of time"/>
            <input type="submit" className="expanded button hollow" value="Add Time"/>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = CountdownForm;
