import React, {useContext} from 'react';
import WalletPage from '../components/wallet/WalletPage';
import { ConnStatusContext } from '../store';
//import child_process from 'child_process';
import fs from 'fs';
import path from 'path'
const fork = require('child_process').fork;

//import GMC_Starter from '../GMC_Starter';
//const GMC = GMC_Starter();

function StartGMC(){
    console.log("Starting GMC process");
    var args = [
        '--rpc',
        '--rpcapi=admin,db,eth,net,web3,personal',
        '--rpcport', '8545', //TODO: change port#
        '--rpcaddr', '127.0.0.1',
        '--rpccorsdomain', 'http://localhost:8080',
        '--fast',
        '--cache=512'
    ];

    var path = process.cwd()+'/gmc/gmc-linux-amd64';

    console.log("attempting to start gmc with "+args+" and path "+path);
    if(!fs.existsSync(path + 'gmc.pid')) {
        console.log("no pid file found")
    
        let child = fork(path);
        child.on('message', (m) => {
            console.log(m)
        });
    
    }else{
        console.log(path + 'gmc.pid already exists, assuming gmc is running already');
        return;
    }
    
}

const App = () => {
    StartGMC();
    const [connStatus, setConnStatus] = useContext(ConnStatusContext);

    return (
        <div>
            <h1>App.js</h1>
            <h2>Connection Status is {connStatus}</h2>
            <button onClick={()=>setConnStatus('fuck yea')}>click mer</button>
            <WalletPage/>
        </div>
    );
}

export default App;