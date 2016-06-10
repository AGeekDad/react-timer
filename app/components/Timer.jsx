var React = require('react');

var Timer = React.createClass({
  render: function() {
    return (
      <div>
        Timer
            {this.props.children}
      </div>
    );
  }
});

module.exports = Timer;
