import React, {Component} from 'react';
import './style.css'

class Canvas extends Component{
	constructor(props){
		super(props);
		this.addPointsToState = this.addPointsToState.bind(this);
		this.saveFlightPath = this.saveFlightPath.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);	
		this.state={
			points:[]
		}
	}
	// componentWillMount(){
	// 	this.setState({
	// 		points:[]
	// 	});
	// }
	componentDidMount(){
		//debugger;
		
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
			points: []
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
		if(this.refs.canvas){
			console.log("if cond")
			this.refs.canvas.getContext("2d").clearRect(0,0,400,400);
		}
			
		
		console.log("render: ");
		console.log(this.state.points);
		if(this.state.points.length>1)
		{//debugger;
			const canv = this.refs.canvas;
			const context = canv.getContext("2d");
			for(let i=0;i<this.state.points.length-1; i++)
			{
				context.moveTo(this.state.points[i].x, this.state.points[i].y);
				context.lineTo(this.state.points[i+1].x, this.state.points[i+1].y);
				context.stroke();
			}
		}	
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