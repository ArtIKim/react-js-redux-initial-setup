import { actions } from "../consts/actions";

export const firstAction = (count) => {
	return (dispatch) => {
		dispatch({
			type: actions.INCREASE_COUNT,
			payload: count,
		});
	};
};

export const secondAction = (count) => {
	return (dispatch) => {
		dispatch({
			type: actions.DECREASE_COUNT,
			payload: count,
		});
	};
};

export const thirdAction = (count) => {
	return (dispatch) => {
		dispatch({
			type: actions.INCREASE_AMOUNT,
			payload: count,
		});
	};
};

export const forthAction = (count) => {
	return (dispatch) => {
		dispatch({
			type: actions.DECREASE_AMOUNT,
			payload: count,
		});
	};
};
