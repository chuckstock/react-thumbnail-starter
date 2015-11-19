var React = require('react');

var Badge = React.createClass({
	render: function() {
		return <button className="btn btn-primary" type="button">
			{this.props.title}<span className="badge">{this.props.number}</span>
		</button>
	}
});

var Thumbnail = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={this.props.imageUrl} />
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number}/>
          </p>
        </div>
      </div>
    </div>
  }
});

var options = {
  title: 'See tutorials ',
  number: 32,
  header: 'Learn React',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'http://formatjs.io/img/react.svg'
};

var element = React.createElement(Thumbnail, options);
React.render(element, document.querySelector('.container'));
