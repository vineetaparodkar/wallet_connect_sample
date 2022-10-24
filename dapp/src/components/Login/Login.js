import React from "react";
import { connect } from "react-redux";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { useNavigate } from "react-router";

import { web3Login } from "../../redux/web3Context/web3-actions";
import { BRIDGE_URL, RPC_URL, CHAIN_ID } from "../../config/index";
import walletConnectLogo from "../../assets/images/logo.svg";
import "./Login.css";

const Login = ({ provider, web3Login }) => {
  const navigate = useNavigate();

  const login = async () => {
    provider = new WalletConnectProvider({
      bridge: BRIDGE_URL,
      rpc: {
        [CHAIN_ID]: RPC_URL,
      },
    });

    //subscribe to account changed
    provider.on("accountChanged", (accounts) => {
      console.log("accounts changed", accounts);
      web3Login(accounts[0], provider);
    });

    //subscribe to chainId changed
    provider.on("chainChanged", (chainId) => {
      console.log("accounts changed", chainId);
      navigate("/home");
    });

    //subscribe to session disconnect
    provider.on("disconnect", (code, reason) => {
      console.log("reason code", code, reason);
      navigate("/home");
    });

    try {
      await provider.enable();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      web3Login(accounts[0], provider);
      navigate("/dashboard");
    } catch (e) {
      console.log("errpr log", e);
      provider && provider.wc.connected && provider.close();
      navigate("/home");
    }
  };
  return (
    <div className="login">
      <div className="title">Connect your Wallet</div>
      <div className="sub-title">connect with WalletConnect v1.0</div>
      <form>
        <div className="btn-div">
          <div onClick={login} className="btn-class">
            <img id="walletlogo" src={walletConnectLogo}></img>
            wallet connect
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    provider: state.web3.provider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    web3Login: (account, provider) => dispatch(web3Login(account, provider)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
