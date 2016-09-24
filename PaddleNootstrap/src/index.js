import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/css/bootstrap-material-design-min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
//import 'bootstrap-material-design/dist/js/material.js'




var PaddleGuys = ["Arslan", "Juan", "Lluc", "Maria"]
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
		return <p className="text-danger">{this.props.guy}</p>
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
		console.log("Hola!");
		this.setState({paddlinGoesTo: guy});



	},

	render: function(){
		return(
			<div className="container">
				<div className="panel panel-warning">
					<div className="panel-heading">
						<h3 className="panel-title">Candidates</h3>
					</div>
					<div className="panel-body">
    					<PaddleList guys={this.props.guys} />
  					</div>
				</div>
				<p className="text-primary"></p>
				<br></br>
				<PaddleButton onClick={this.paddleClick}/>
				<a className="btn btn-raised btn-primary" href="javascript:void(0)">
					Paddlin2
					<div className="ripple-container"></div>
				</a>

				<br></br><br></br><br></br>
				<div className="well well-lg"> 
					<PaddleBox guy={this.state.paddlinGoesTo}/>
				</div>
			</div>
		)
	}
});

ReactDOM.render(
	<Paddler guys={PaddleGuys} />,
	document.getElementById("root")
);

