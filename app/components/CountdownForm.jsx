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
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input type="text" ref="timeInSeconds" placeholder="Input time in seconds"/>
          <button className="expanded button hollow">Add Time</button>
        </form>
      </div>
    );
  }
})

module.exports = CountdownForm;
