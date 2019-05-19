const Web3 = window.require('web3');
const child_process = window.require('child_process');
const fs = window.require('fs');

function GMC_Starter(){
    var args = [
        '--rpc',
        '--rpcapi=admin,db,eth,net,web3,personal',
        '--rpcport', '8545', //TODO: change port#
        '--rpcaddr', '127.0.0.1',
        '--rpccorsdomain', 'http://localhost:8080',
        '--fast',
        '--cache=512'
    ];
    var path = process.cwd()+'/bin/';
    console.log("attempting to start gmc with "+args+" and path "+path);
    if(!fs.existsSync(path + 'gmc.pid')) {
        try{
            var child = child_process.spawn('./gmc-linux-amd64', args, {cwd: path});
            fs.writeFile(path + 'gmc.pid', child.pid);
            child.stdout.on('data', function(data) {
                console.log("gmc data: " + data);
            });
            child.on('error', function(error) {
                console.log("Failed to start child process gmc: " + error);
            });
            child.stderr.on('data', function(data) {
                console.log("gmc error data: " + data);
            });
            child.on('close', function(code) {
                console.log("gmc process exited with code " + code);
            });
            console.log("end strating gmc"+child.pid);
            //NOTE: this is still kinda sloppy, if node process is killed, 
            //gmc will still run CAUSE: cannot bind to kill signal...
            ['SIGINT','SIGTERM','exit'].forEach(function(sig) {

                process.on(sig, function() {

                    fs.unlink(path + 'gmc.pid', function(err){
                        if(err) return console.log(err);
                        console.log('pid file deleted successfully');
                    });  
                    child.exit();

                });

            });


        }catch(e){

            console.log("fatal: error starting gmc "+e);
            process.exit();
        }
    }else{
        console.log(path + 'gmc.pid already exists, assuming gmc is running already');
        return;
    }
}

export default GMC_Starter;