var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should call onSetCountdown if valid seconds entered', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(2);

      expect(countdown.state.seconds).toBe(2);
      expect(countdown.state.countdownStatus).toBe('start');

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(1);
        done();
      }, 1001);

    });

    it('should call onSetCountdown if valid seconds entered', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      expect(countdown.state.seconds).toBe(1);
      expect(countdown.state.countdownStatus).toBe('start');

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stop');
        done();
      }, 1001);

    });
  });
});
