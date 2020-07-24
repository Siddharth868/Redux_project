import React, { Component } from 'react'
import {connect} from 'react-redux'
import Button from './Button'

class Count extends Component {
	render() {
		return (
			<div>
				<h1>COUNT: {this.props.ctr}</h1>
				<Button handleClick={this.props.onChange1} children="INC" />
				<Button handleClick={this.props.onChange2} children="DEC" />
				<Button handleClick={this.props.onChange3} children="ADD10"/>
				<Button handleClick={this.props.onChange4} children="SUB10"/>
				<hr />
				<Button handleClick={this.props.onChange5} children="STORE" />
				<ul>
					{this.props.STR.map((x)=> (
						<li onClick={()=>this.props.onChange6(x.id)}>{x.val}</li>
					))}
				
				</ul>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		ctr: state.Counter,
		STR: state.Results
	}
}
const mapDispatchToProps=(dis)=>{
	return {
		onChange1: ()=> dis({type:"inc"}),
		onChange2: ()=> dis({type:"dec"}),
		onChange3: ()=> dis({type:"add10",val:10}),
		onChange4: ()=> dis({type:"sub10",val:10}),
		onChange5: ()=> dis({type:"STORE"}),
		onChange6: (id)=> dis({type:"DELE",RID:id}),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)
