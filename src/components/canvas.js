import React, {Component} from 'react';
import './style.css'

class Canvas extends Component{
	constructor(props){
		super(props);
		this.addPointsToState = this.addPointsToState.bind(this);
		this.saveFlightPath = this.saveFlightPath.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);	
		this.drawLines = this.drawLines.bind();
		this.state={
			points:[],
			currentPlan:[]
		}
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		//debugger;
		if(this.refs.canvas){
			console.log("if cond")
			this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
			this.setState({				
				currentPlan:[]
			});
		}		
	}
	drawLines(val, canvas)
	{
		var coopoints = val;
		if(canvas){
			console.log("compDidUpdate")
			canvas.getContext("2d").clearRect(0,0,400,400);
		}
		console.log("compdidUpdate outside if: ");
		console.log(coopoints);
		if(coopoints != null && coopoints.length>1)
		{//debugger;
			const canv = canvas;
			const context = canv.getContext("2d");
			context.beginPath();
			for(let i=0;i<coopoints-1; i++)
			{
				context.moveTo(coopoints[i].x, coopoints[i].y);
				context.lineTo(coopoints[i+1].x, coopoints[i+1].y);
				context.stroke();
			}
		}
	}
	componentDidUpdate(){

		//this.drawLines(this.state.points, this.refs.canvas);	
		if(this.props.CurrentPlan != null && this.props.CurrentPlan.length>0)
		{
			//this.drawLines(currentPlan, this.refs.canvas);
			//var coopoints = ;
			var canvas = this.refs.canvas;
			if(canvas){
				console.log("compDidmount currentplan")
				canvas.getContext("2d").clearRect(0,0,400,400);
			}
			console.log("compdidmount current plan: ");
			console.log(this.props.CurrentPlan);
			if(this.props.CurrentPlan != null && this.props.CurrentPlan.length>1)
			{
				//debugger;
				//const canv = canvas;
				const context = canvas.getContext("2d");
				context.beginPath();
				for(let i=0;i<this.props.CurrentPlan.length-1; i++)
				{
					context.moveTo(this.props.CurrentPlan[i].x, this.props.CurrentPlan[i].y);
					context.lineTo(this.props.CurrentPlan[i+1].x, this.props.CurrentPlan[i+1].y);
					context.stroke();
				}
			}
		}
		else{
		var coopoints = this.state.points;
		//var canvas = this.refs.canvas;
		if(this.refs.canvas){
			console.log("compDidUpdate")
			this.refs.canvas.getContext("2d").clearRect(0,0,400,400);			
		}
		console.log("compdidUpdate outside if: ");
		console.log(coopoints);
		if(coopoints != null && coopoints.length>1)
		{//debugger;
			console.log(coopoints);
			//const canv = this.refs.canvas;
			const context = this.refs.canvas.getContext("2d");
			context.beginPath();
			for(let i=0;i<coopoints.length-1; i++)
			{
				context.moveTo(coopoints[i].x, coopoints[i].y);
				context.lineTo(coopoints[i+1].x, coopoints[i+1].y);
				context.stroke();
			}
		}
	}
	}
	saveFlightPath()
	{		
		this.props.OnSave(this.state.points);
	}
	clearCanvas()
	{
		console.log("jhj");		
		this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		this.setState({
			points: [],
			currentPlan:[]
		});
		
	}
	addPointsToState(e){
		this.setState({
			points: this.state.points.concat({ x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY })
		});
		console.log("canvas coord: "+e, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		console.log(this);
	}
	render()
	{
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