import { combineReducers } from 'redux';
import { reducer as reduxFromReducer } from 'redux-form';

let reducers = combineReducers({
	from: reduxFromReducer // requires mount at "form"
});

export default reducers;
