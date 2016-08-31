var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  handleAddTime: function(timeInSeconds){
    this.setState({
      count: timeInSeconds
    });
  },
  render: function(){
    var {count} = this.state;
    return(
      <div className>
        <Clock totalSeconds={count}/>
        <CountdownForm onAddTime={this.handleAddTime}/>
      </div>
    )
  }
})

module.exports = Countdown;
