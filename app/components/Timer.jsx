var React = require('react');
var Clock = require('Clock')

var Timer = React.createClass({
  render: function(){
    return(
      <div>
        <Clock totalSeconds={715}/>
        <p>Timer is still static - under construction</p>
      </div>
    )
  }
})

module.exports = Timer;
