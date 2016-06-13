var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    statusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    return () => { this.props.statusChange(newStatus); };
  },
  renderButtons: function(){
    if(this.props.countdownStatus === 'start'){
      return <button className="button expanded secondary" onClick={this.onStatusChange("pause")}>Pause</button>
    } else {
      return <button className="button expanded success" onClick={this.onStatusChange('start')}>Start</button>
    }
  },
  render: function() {
    return (
      <div className='row'>
        <div className='column small-6'>
          {this.renderButtons()}
        </div>
        <div className='column small-6'>
          <button className="button expanded alert" onClick={this.onStatusChange('stop')}>Reset</button>
        </div>
      </div>
    );
  }
});

module.exports = Controls;
