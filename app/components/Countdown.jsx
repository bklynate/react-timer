var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
  render: function(){
    return(
      <div className>
        <Clock totalSeconds={129}/>
        <CountdownForm/>
      </div>
    )
  }
})

module.exports = Countdown;
