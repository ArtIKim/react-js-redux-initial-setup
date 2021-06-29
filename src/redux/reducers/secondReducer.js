import { actions } from "../actions/consts/actions";

const initialState = {
	amount: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INCREASE_AMOUNT:
			return {
				...state,
				amount: state.amount + action.payload,
			};
		case actions.DECREASE_AMOUNT:
			return {
				...state,
				amount: state.amount - action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
