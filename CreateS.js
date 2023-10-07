const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/tamplate/index.html','utf-8')

// CREATE A SERVER 
let SERVER = http.createServer((request,response)=>{
     response.end(html)
     console.log("A new request has been given")
     // console.log(request)
});

// START THE SERVER
SERVER.listen(5000,'127.0.0.1',()=>{
     console.log("Server has been started")
});