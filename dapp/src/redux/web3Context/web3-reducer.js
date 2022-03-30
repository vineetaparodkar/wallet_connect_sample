import * as actionTypes from "./web3-types";

const INITIAL_STATE = {
  provider: null,
  account: null,
};

const web3LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        provider: action.payload.provider,
        account: action.payload.account,
      };

    case actionTypes.LOGOUT:
      return {
        provider: null,
        account: null,
      };
    default:
      return state;
  }
};

export default web3LoginReducer;
