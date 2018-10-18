import React, {Component} from 'react';

class Plans extends Component{
	constructor(props){
		super(props);	
	}
	
	render()
	{
		var ItemText = this.props.PlanItems;
		console.log("i is: ");
		console.log(ItemText);
		// .Map(i=>
		// 	{console.log("i is: ");
		// 	console.log(i);
		// 	return i;
		// }
		// 	);
		return(
			<div>
				<span>
					hjk
					
					
				</span>
				<span>Plans2</span>
			</div>
		);
	}
};

export default Plans