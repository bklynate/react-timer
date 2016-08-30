var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return(
      <div className>
        <Clock totalSeconds={129}/>
      </div>
    )
  }
})

module.exports = Countdown;
