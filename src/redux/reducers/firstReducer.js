import { actions } from "../actions/consts/actions";

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INCREASE_COUNT:
			return {
				...state,
				count: state.count + action.payload,
			};
		case actions.DECREASE_COUNT:
			return {
				...state,
				count: state.count - action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
