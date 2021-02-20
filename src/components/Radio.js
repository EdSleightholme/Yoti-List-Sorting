/*jshint esversion: 6 */
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {

	//detect changes to radio buttons
	onChange(setTo) {
		this.props.sortBy(setTo);
	}

	render() {
       return (<div className="radioButtons">
			<div className="left">
				<input name={"sorting"} type="radio" onClick={()=>this.onChange("name")}/>
				<label>&nbsp;&nbsp;Sort by name</label>
			</div>
			<div className="right">
				<input name={"sorting"} type="radio" onClick={()=>this.onChange("age")}/>
				<label>&nbsp;&nbsp;Sort by age</label>
			</div>
		</div>);
	}
}

Radio.defaultProps = {
    sortBy: () => {}
}

Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;

