var React = require('react');
var ReactDOM = require('react-dom');
window.jQuery = window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');

var Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },
  render: function () {
    return (
      <a onClick={this.props.onClick} className="btn btn-raised withripple">
        <h2>Randomize the sh*t out of it!</h2>
        <div className="ripple-container"></div>
      </a>
    );
  }
});

var NameList = React.createClass({
  propTypes: {
    names: React.PropTypes.array
  },

  render: function () {
    return (
      <div className="">
        {
          this.props.names.map(function (name, index) {
            return (
              <div className="panel panel-default" key={"name_" + index}>
                <div className="panel-body"><h3>{name}</h3></div>
              </div>
            );
          })
        }
      </div>
    );
  }
});

var TextBox = React.createClass({
  propTypes: {
    selectedName: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="well"><h2>{this.props.selectedName}</h2></div>
    );
  }
});

var App = React.createClass({
  propTypes: {
    names: React.PropTypes.array
  },

  getInitialState() {
    return {
      selectedName: ""
    };
  },
  handleClick: function () {
    var randomPosition = Math.floor(Math.random() * this.props.names.length);
    var randomName = this.props.names[randomPosition];
    this.setState({selectedName: randomName});
  },

  render: function () {
    return (
      <div className="container">
        <div className="col-md-12">
          <NameList names={this.props.names}/>
          <div className="row text-center">
            <Button onClick={this.handleClick}/>
          </div>
          <div className="col-md-4 col-md-offset-4 text-center">
            <TextBox selectedName={this.state.selectedName}/>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App names={["Juan", "Lluc", "Arslaan"]}/>,
  document.getElementById('root')
);

window.$.material.init();
window.$.material.ripples();
