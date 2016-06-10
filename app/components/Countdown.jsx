var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
		return {
			seconds: 0,
      countdownStatus: 'stop'
		}
	},
  handleSetCountdown: function(seconds){
    this.setState({
      seconds: seconds,
      countdownStatus: 'start'
    });
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'start':
          this.startTimer();
          break;
        case 'stop':
        case 'pause':
      }
    }
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      var count = this.state.seconds - 1;
      this.setState({ seconds: count >= 0 ? count : 0 });
      if(count <= 0) {
        this.setState({ countdownStatus: 'stop' });
      }
    }, 1000);
  },
  handleStatusChange: function(status){
    this.setState({ countdownStatus: status });
  },
  renderControls: function(){
    if(this.state.countdownStatus === 'stop'){
      return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    } else {
      return <Controls countdownStatus={this.state.countdownStatus} statusChange={this.handleStatusChange} />
    }
  },
  render: function() {
    var seconds = this.state.seconds;
    return (
      <div>
          <h2 className="page-title">Countdown</h2>
          <Clock totalSeconds={seconds} />
          {this.renderControls()}
      </div>
    );
  }
});

module.exports = Countdown;
