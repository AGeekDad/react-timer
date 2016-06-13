var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// Load foundation
// Explicit style loading - changed to use sass /styles/base/_foundation-settings.scss
// webpack.config.js => sassLoader: {includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]},
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
