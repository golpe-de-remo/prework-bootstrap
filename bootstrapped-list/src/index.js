import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'

var NamesList = React.createClass({
	render: function() {
		return (
			<div>
					{
						this.props.names.map(function(name, i) {
							return (
								<div className='panel panel-default' key={"name_"+i} >
									<h3 className="panel-body" >{name}</h3>
								</div>
							)
						})
					}
			</div>
		)
	}
})

var Button = React.createClass({
	render: function() {
		return (
			<div className="text-center" onClick={this.props.onClick}>
				<h2 className="btn btn-raised btn-default btn-lg">Pick random name </h2>
			</div>
		)
	}
});

var NameBox = React.createClass({
	render: function() {
		return (
			<h2 className="well well-lg text-center">{this.props.name}</h2>
		)
	}
})

var App = React.createClass({
	getInitialState: function() {
		return {
			selectedName: ""
		}
	},
	handleClick: function(event) {
		var position = Math.floor(Math.random()*3);
		var name = this.props.names[position];
		this.setState({selectedName: name});
	},
	render: function() {
		return (
			<div className="container">
				<div className="col-md-8">
					<NamesList names={this.props.names} />
					<Button onClick={this.handleClick}/>
					<NameBox name={this.state.selectedName}/>
				</div>
			</div>
		);
	}
});

var developers = ["Lluc", "Juan", "Arslaan"];

ReactDOM.render(
	<App names={developers} />,
	document.getElementById("root")
);

