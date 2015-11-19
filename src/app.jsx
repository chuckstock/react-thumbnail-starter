var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello!
    </h1>
  }
});

// React, please render this class
var element = React.createElement(Hello, {});

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
