var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  onPause: function(){
    this.props.statusChange('pause');
  },
  onStart: function(){
    this.props.statusChange('start');
  },
  renderButtons: function(){
    if(this.props.countdownStatus === 'start'){
      return <button className="button expanded secondary" onClick={this.onPause}>Pause</button>
    } else {
      return <button className="button expanded success" onClick={this.onStart}>Start</button>
    }
  },
  render: function() {
    return (
      <div className='row'>
        <div className='column small-6'>
          {this.renderButtons()}
        </div>
        <div className='column small-6'>
          <button className="button expanded alert">Reset</button>
        </div>
      </div>
    );
  }
});

module.exports = Controls;
