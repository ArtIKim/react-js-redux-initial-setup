import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./redux/actions/action-creators/actions";

function App() {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const ActionCreators = bindActionCreators(actionCreators, dispatch);

	console.log(state, ActionCreators);

	return (
		<div>
			<div>
				Hello Redux! count: {state.firstReducer.count}
				<button onClick={() => ActionCreators.firstAction(1)}>INCREASE_COUNT</button>
				<button onClick={() => ActionCreators.secondAction(1)}>DECREASE_COUNT</button>
			</div>
			<div>
				Hello Redux! amount {state.secondReducer.amount}
				<button onClick={() => ActionCreators.thirdAction(1)}>INCREASE_COUNT</button>
				<button onClick={() => ActionCreators.forthAction(1)}>DECREASE_COUNT</button>
			</div>
		</div>
	);
}

export default App;
