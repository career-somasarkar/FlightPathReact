import React, {Component} from 'react';
import './style.css'

class Canvas extends Component{
	constructor(props){
		super(props);
		this.drawFlightPath = this.drawFlightPath.bind(this);
		this.saveFlightPath = this.saveFlightPath.bind(this);
		this.getNewPath = this.getNewPath.bind(this);	
		this.state={
			points:[]
		}
	}
	// componentWillMount(){
	// 	this.setState({
	// 		points:[]
	// 	});
	// }
	// componentDidMount(e){
	// 	//debugger;
	// 	const ctx = this.refs.canvas.getContext('2d');
	// 	 this.setState({
	// 	 	points: this.state.points.concat({ x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY })
	// 	});
	// }
	saveFlightPath()
	{
		
		this.props.OnSave(this.state.points);
	}
	getNewPath()
	{
		this.setState({point:[]});
		//this.props.NewPlan(this.state.points)
	}
	drawFlightPath(e)
	{		
		this.setState({
			points: this.state.points.concat({ x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY })
		});
		console.log("canvas coord: "+e, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		console.log(this);
		var points = this.state.points;	
		if(points.length>1)
		{//debugger;
			const canv = this.refs.canvas;
			const context = canv.getContext("2d");
			for(let i=0;i<points.length-1; i++)
			{
				context.moveTo(points[i].x, points[i].y);
				context.lineTo(points[i+1].x, points[i+1].y);
				context.stroke();
			}
		}
	}
	render()
	{
		return(
			<div>
				<button id="btnSave" value="Save" onClick={this.saveFlightPath}>Save</button>
				<button id="btnStart" value="Start" onClick={this.getNewPath}>Start New Plan</button>		
				<canvas ref="canvas" className="canvas" id="myCanvas" width="400" height="400" 
				onClick={e=>this.drawFlightPath(e)}></canvas>	
					
			</div>
		);
	}
};

export default Canvas