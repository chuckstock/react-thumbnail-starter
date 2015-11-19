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

var ThumbnailList = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return <Thumbnail {...thumbnailProps} />
    });

    return <div>
      {list}
    </div>
  }
});

var options = {
  thumbnailData: [
    {
      title: "See tutorials ",
      number: 32,
      header: 'Learn React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'http://formatjs.io/img/react.svg'
    },
    {
      title: "See tutorials ",
      number: 12,
      header: 'Learn Gulp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
    }
  ]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
