var React = require('react');
var {IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer
            </li>
            <li className="menu-text">
              <IndexLink to='/' activeClassName="active-link">Timer</IndexLink>
            </li>
            <li className="menu-text">
              <IndexLink to='/countdown' activeClassName="active-link">Countdown</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by<a href="http://natequash.herokuapp.com/" target="_blank"> Nathaniel Quashie</a></li>
          </ul>
        </div>
      </div>
    )
  }
})
module.exports = Nav;
