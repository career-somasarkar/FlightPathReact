import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/canvas';
import Plans from './components/plans';
import './components/style.css'


class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			planList:[]		
		};
		this.savePlan = this.savePlan.bind(this);
		this.createNewPlan = this.createNewPlan.bind(this);	
	}
	componentWillMount(){

	}
	savePlan(val){
		var name = prompt("Enter Plan Name:");
		console.log("canvas values are: ");
		console.log(val);
		this.setState({
			planList: this.state.planList.concat({ plan: val, planName:name })
		});		
	}
	createNewPlan(val){
		this.setState({
			planList: this.state.planList.concat({ plan: val })
		});	
	}
	render()
	{
		return(
			<div>
				Hello Guest, This is a Flight Plan. 
				<div className="column1"><Plans PlanItems={this.state.planList}/></div>
				<div className="column2"><Canvas OnSave={this.savePlan.bind(this)} 
				NewPlan={this.createNewPlan.bind(this)}/></div>
							
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))