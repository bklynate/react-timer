var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var timeInSeconds = this.refs.timeInSeconds.value;
    if(timeInSeconds.match(/^[0-9]*$/)){
      this.refs.timeInSeconds.value = "";
      this.props.onAddTime(parseInt(timeInSeconds, 10));
    }
  },
  render: function(){
    return(
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="timeInSeconds" placeholder="Input the amount of time"/>
            <button className="expanded button hollow">Add Time</button>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = CountdownForm;
