import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-material-design-min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'




var PaddleGuys = ["Arslan", "Juan", "Lluc"]
//var PaddledGuys = []

var PaddleList = React.createClass({
	render: function () {
		return (
			<ul>
									{
					this.props.guys.map(function(guy, i){
						return <li key={"guy_" + i}>{guy}</li>
					})

				}
			</ul>
		)
	}
})

var PaddleButton = React.createClass({
	render: function() {
		return(
			<p className="bs-component">

				<a className="btn btn-raised btn-primary" href="javascript:void(0)" onClick={this.props.onClick}>
					Paddlin
					<div className="ripple-container"></div>
				</a>
			</p>
			)
	}
});

var PaddleBox = React.createClass({
	render: function(){
		return <textarea value={this.props.guy}></textarea>
	}
});

var Paddler = React.createClass({
	getInitialState: function() {
	    return {
	          paddlinGoesTo: ""
	    };
	},

	paddleClick: function(event) {
		var randomPaddle = Math.floor(Math.random() * PaddleGuys.length);
		var guy = this.props.guys[randomPaddle];
		this.setState({paddledGuy: guy});



	},

	render: function(){
		return(
			<div class="container">
				<p class="text-primary"><PaddleList guys={this.props.guys} /></p><br></br>
				<PaddleButton onClick={this.paddleClick}/><br></br><br></br><br></br>
				<PaddleBox guy={this.state.paddledGuy}/>
			</div>
		)
	}
});

ReactDOM.render(
	<Paddler guys={PaddleGuys} />,
	document.getElementById("root")
);

