import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));
