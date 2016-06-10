var React = require('react');

var Clock = React.createClass({
  render: function() {
    return (
      <div>
          Clock
            {this.props.children}
      </div>
    );
  }
});

module.exports = Clock;
