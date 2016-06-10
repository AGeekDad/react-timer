var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='start' />);

      var $el = $(ReactDOM.findDOMNode(controls));
      var actual = $el.find('button:contains(Pause)');
      expect(actual.length).toBe(1);
    });

    it('should render start button when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='pause' />);

      var $el = $(ReactDOM.findDOMNode(controls));
      var actual = $el.find('button:contains(Start)');
      expect(actual.length).toBe(1);
    });
  });

});
