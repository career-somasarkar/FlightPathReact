import React, {Component} from 'react';

class Plans extends Component{
	constructor(props){
		super(props);
		
		this.renderPlan = this.renderPlan.bind(this);	
	}


renderPlan(val){
	console.log("plansjs item plan coordinate: ");
	console.log(val);
	this.props.RenderPlan(val);
}

	render()
	{
		//var planItems = this.props.PlanItems;
		
		var planItems = this.props.PlanItems.planList;
		console.log("plansjs items are: ");
		console.log(planItems);
		var plan = planItems.map(
			item=>{
				console.log(item);
				return (<div><a href="#" onClick={e=>this.renderPlan(item.plan,e)}>{item.planName}</a> <br/></div>);
			}
		);
		
		return(
			<div>
				<span>
					{plan}				
				</span>
			</div>
		);
	}
};

export default Plans