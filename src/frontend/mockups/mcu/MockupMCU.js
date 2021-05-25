import React from 'react';
import MockupBase from '../base/MockupBase';
import MCUControls from './MCUControls';

class MockupMCU extends React.Component {

	render() {
		return(
	        <>
	            <MockupBase 
					name="MAQUETA-MCU" 
					mode={this.props.match.params.mode}
				/>
	        </>
    	)
	}

}

export default MockupMCU;
