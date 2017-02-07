import React, {
	Component,
} from 'react'
import { connect } from 'react-redux'
import ItemList from './ItemList.js'
import actions from './action'
import {bindActionCreators} from 'redux';
import * as welcomeActions from './action';

class WelcomeContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<ItemList { ...this.props } />
		);
	}
}

function mapStateToProps(state) {
	
	return state;
}


export default connect(mapStateToProps,
  (dispatch) => ({
		welcomeAction: bindActionCreators(welcomeActions, dispatch)
  }))(WelcomeContainer);