import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import logo from "../../assets/images/logo.png";
import { web3Logout } from "../../redux/web3Context/web3-actions";

const Header = ({ provider, account, web3Logout }) => {
  const navigate = useNavigate();
  const connectWallet = async () => {
    navigate("/login");
  };

  const disconnectWallet = async () => {
    await provider.disconnect();
    web3Logout();
    navigate("/");
  };

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#home">
              <img className="logo" src={logo} />
            </Navbar.Brand>
            <Nav className="me-auto">
              <div>
                <h4 className="headerclass">XYZ</h4>
              </div>
            </Nav>
            {account ? (
              <Nav.Link onClick={disconnectWallet}>Disconnect</Nav.Link>
            ) : (
              <Nav.Link onClick={connectWallet} className="ms-auto">
                Connect Wallet
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.web3.account,
    provider: state.web3.provider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    web3Logout: () => dispatch(web3Logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
