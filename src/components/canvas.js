import React, {Component} from 'react';
import './style.css'

class Canvas extends Component{
	constructor(props){
		super(props);
		this.addPointsToState = this.addPointsToState.bind(this);
		this.saveFlightPath = this.saveFlightPath.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);	
		this.state={
			points:[],
			currentPlan:[]
		}
	}
	componentWillMount(){
		this.setState({
			currentPlan:this.props.CurrentPlan
		});
	}
	componentDidMount(){
		//debugger;
		if(this.refs.canvas){
			console.log("if cond")
			this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		}
	}

	componentDidUpdate(){
		if(this.state.currentPlan.length>0)
		{
			const canv = this.refs.canvas;
			const context = canv.getContext("2d");
			context.beginPath();
			for(let i=0;i<this.state.points.length-1; i++)
			{
				context.moveTo(this.state.points[i].x, this.state.points[i].y);
				context.lineTo(this.state.points[i+1].x, this.state.points[i+1].y);
				context.stroke();
			}
		}
		else{
		if(this.refs.canvas){
			console.log("compDidUpdate")
			this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		}
		console.log("compdidUpdate outside if: ");
		console.log(this.state.points);
		if(this.state.points.length>1)
		{//debugger;
			const canv = this.refs.canvas;
			const context = canv.getContext("2d");
			context.beginPath();
			for(let i=0;i<this.state.points.length-1; i++)
			{
				context.moveTo(this.state.points[i].x, this.state.points[i].y);
				context.lineTo(this.state.points[i+1].x, this.state.points[i+1].y);
				context.stroke();
			}
		}
	}
	}
	saveFlightPath()
	{	console.log("in canvasjs save path: ");	
		console.log(this.state.points);	
		this.props.OnSave(this.state.points);
	}
	clearCanvas()
	{
		console.log("jhj");		
		this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		this.setState({
			points: []
		});
	}
	addPointsToState(e){
		this.setState({
			points: this.state.points.concat({ x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY })
		});
		console.log("btn click canvas coord: "+e, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		console.log(this);
	}
	render()
	{
		// if(this.refs.canvas){
		 	console.log("render");
		// 	this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		// }
		//this.refs.canvas.getContext("2d").beginPath();	
		
			
		return(
			<div>
				<button id="btnSave" value="Save" onClick={this.saveFlightPath}>Save</button>
				<button id="btnStart" value="Start" onClick={this.clearCanvas}>Start New Plan</button>		
				<canvas ref="canvas" className="canvas" id="myCanvas" width="400" height="400" 
				onClick={e=>this.addPointsToState(e)}></canvas>	
					
			</div>
		);
	}
};



export default Canvas