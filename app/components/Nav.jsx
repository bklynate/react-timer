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
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink>
            </li>
            <li className="menu-text">
              <IndexLink to='/Counter' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Counter</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by<a href="https://www.natequash.herokuapp.com"> Nathaniel Quashie</a></li>
          </ul>
        </div>
      </div>
    )
  }
})
module.exports = Nav;
