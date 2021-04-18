/* console.log("hethvik");
const fs = require('fs');
fs.writeFileSync('hello.txt','Hello to Nodejs'); */

const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
})

server.listen(4000);