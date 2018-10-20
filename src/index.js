import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/canvas';
import Plans from './components/plans';
import './components/style.css'


class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			planList:[],
			currentPlan:[]	
		};
		this.savePlan = this.savePlan.bind(this);
		this.renderPlan = this.renderPlan.bind(this);
	}
	
	savePlan(val){
		var name = prompt("Enter Plan Name:");
		console.log("canvas values are: ");
		console.log(val);
		this.setState({
			planList: this.state.planList.concat({ plan: val, planName:name })
		});		
	}
	
	renderPlan(val){
		console.log("indexjs plan coordinates: ");
		console.log(val);
		this.setState({currentPlan:val});
	}
	render()
	{
		return(
			<div>
				Hello Guest, This is a Flight Plan. 
				<div className="column1"><Plans PlanItems={this.state} 
				RenderPlan={this.renderPlan.bind(this)}/></div>
				<div className="column2"><Canvas OnSave={this.savePlan.bind(this)} CurrentPlan={this.state.currentPlan}/></div>							
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))