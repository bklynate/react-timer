var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function(){
    var that = this;
    this.timer = setInterval(function(){
      var newCount = that.state.count - 1;
      that.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        that.setState({countdownStatus: "stopped"})
      }
    }, 1000);
  },
  handleAddTime: function(timeInSeconds){
    this.setState({
      count: timeInSeconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== "stopped"){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onAddTime={this.handleAddTime}/>
      }
    }

    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
