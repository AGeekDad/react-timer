var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <div><h2>Timer</h2></div>
        <Clock totalSeconds={63} />
      </div>
    );
  }
});

module.exports = Timer;
