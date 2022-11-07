const os=require('os');
const { uptime } = require("process");

//info about current user
const user=os.userInfo();
console.log(user);

//system up time in seconds
console.log(`the system is up fro ${os.uptime()} seconds`);

const currenOS ={
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currenOS);