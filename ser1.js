const http = require('http')
const fs = require('fs')
const url = require('url')
// const { response } = require('express')

const Server = http.createServer((request,response)=>{


     response.end("hi")
     let URL = request.url
     console.log(URL)

})

Server.listen(4000,'127.0.0.1',()=>{
     console.log("Server Has Been Started.")
})
