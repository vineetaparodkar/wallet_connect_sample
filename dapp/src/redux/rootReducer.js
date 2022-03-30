import { combineReducers } from "redux";

import web3LoginReducer from "./web3Context/web3-reducer.js";

const rootReducer = combineReducers({
  web3: web3LoginReducer,
});

export default rootReducer;
