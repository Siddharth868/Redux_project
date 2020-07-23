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
				<Button handleClick={this.props.onChange3} children="ADD5"/>
				<Button handleClick={this.props.onChange4} children="SUB5"/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		ctr: state.Counter
	}
}
const mapDispatchToProps=(dis)=>{
	return {
		onChange1: ()=> dis({type:"inc"}),
		onChange2: ()=> dis({type:"dec"}),
		onChange3: ()=> dis({type:"add5"}),
		onChange4: ()=> dis({type:"sub5"})
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)
