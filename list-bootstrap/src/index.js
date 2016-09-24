import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


//import 'jquery/dist/jquery.min.js';
// * as $ from 
// $.material.init();

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-material-design/dist/js/material.min.js';
import 'bootstrap-material-design/dist/js/ripples.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import 'bootstrap-material-design/dist/css/ripples.css';

//import App from './App';
import './index.css';


var peopleNames = ["Arslaan", "Juan", "Lluc"];

var ListName = React.createClass({
		render: function() {
			return (
				<div className="col-md-12">
					<ul>{
							this.props.names.map(function(name, i) {
								return <li key={"name_"+i}>{name}</li>
							})
						}
					</ul>
				</div>
				)		
		}
})



var Button = React.createClass({
	render: function() {
		return (
			<div className="bs-component">
				<a className="btn btn-raised btn-primary" onClick={this.props.onClick}>Randomize name</a>
				<div className="ripple-container"></div>
			</div>
	)}
});

var NameTextArea = React.createClass({
	render: function() {
		return <p>{this.props.name}</p>
	}
});

var App = React.createClass({
	getInitialState: function() {
		// definir un estado vacio para getInitialState
		return {
			selectedName: "click above and a random name from the list will appear"
		}
	},

// Communication between components
// https://facebook.github.io/react/tips/communicate-between-components.html

	handleClick: function(event) {
		var arrayLength = peopleNames.length;
		var arrayIndex = Math.floor(Math.random()*arrayLength);
		var name = this.props.names[arrayIndex];
		this.setState({selectedName: name});
	},
				/*
					En el render de la App
					Se pueden incluir los components con sus propiedades
				*/
	render: function() {
		return (
			<div className="container">

				<div>
					
					<ListName names={this.props.names} />
					<Button onClick={this.handleClick}/>
					<br />
					<NameTextArea name={this.state.selectedName}/>
				</div>
			</div>
		);
	}
});


ReactDOM.render(
	//<App names={["Arslaan", "Juan", "Lluc", "Paula", "Marcelo"]} />,
	<App names={peopleNames} />,
	document.getElementById("root")
);