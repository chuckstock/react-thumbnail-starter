var React = require('react');

var Badge = React.createClass({
	render: function() {
		return <button className="btn btn-primary" type="button">
			{this.props.title}<span className="badge">{this.props.number}</span>
		</button>
	}
});

var element = React.createElement(Badge, {title: 'See Tutorials ', number: 32});
React.render(element, document.querySelector('.container'));
