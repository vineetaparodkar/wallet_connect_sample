import * as actionTypes from "./web3-types";

export const web3Login = (account, provider) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      account: account,
      provider: provider,
    },
  };
};

export const web3Logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
