var React = require('react');

var Controls = React.createClass({
  render: function() {
    return (
      <div>
        Controls
            {this.props.children}
      </div>
    );
  }
});

module.exports = Controls;
