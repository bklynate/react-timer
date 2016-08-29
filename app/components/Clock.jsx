var React = require('react');

var Clock = React.createClass({
  formatSeconds: function(totalSeconds){
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
  },
  render: function() {
    return (
      <div>

      </div>
    );
  }
});

module.exports = Clock;
