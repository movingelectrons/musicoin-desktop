import React, { useState } from 'react';
import './WalletPage.css';
import Accounts from './Accounts';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

let connMsg;
/*
if(state.isConnected){
  connMsg = <span>Connected to {state.peerCount} peers.</span>
}else{
  connMsg = <span className="error">Syncing...</span>
}
*/
function WalletPage(props) {
  const component = new React.Component(props);

  component.state = {
    modal: false,
    nestedModal: false,
    isConnected: false,
    connStatus: "unknown"
  };

  function toggle() {
    component.setState({
      modal: !component.state.modal
    });
  }
  
  function toggleNested() {
    component.setState({
      nestedModal: !component.state.nestedModal,
      closeAll: false
    });
  }
  
  function toggleAll() {
    component.setState({
      nestedModal: !component.state.nestedModal,
      closeAll: true
    });
  }
  
  function newAccount() {
    /*
    var newAccount = this.props.store.getWeb3().personal.newAccount("pa55word5arelame");
    return new Promise(function(resolve, reject){
      try{
        return resolve(newAccount);
      } catch(e){
        reject(e);
      }
    });*/
    alert("new account!!!");
  }

  component.render = function(){
    return(
      <React.Fragment>
        <Modal isOpen={component.state.modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. 
            <br />
            <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
            <Modal isOpen={component.state.nestedModal} toggle={toggleNested} onClosed={component.state.closeAll ? toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div className="wrapper">
          <header className="header">
            <h2>Musicoin</h2>
            <div className="header_center">
              <span>{connMsg}</span>
            </div>
            <div className="header_left">
              Header left
            </div>
          </header>
          <section className="content">
            <div className="columns">
              <aside className="sidebar">
                Sidebar
              </aside>
              <main className="main"><Accounts store={component.state} /></main>
            </div>
          </section>
          <footer className="footer">
            <button onClick={newAccount}>New Account</button>
            <Button onClick={toggle}>Import Account</Button>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  return component;
}

export default WalletPage;