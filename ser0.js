const http = require('http')
const fs = require('fs')
const url = require('url')

//user define module
const replacehtml = require('./modules/replacehtml');
const { response } = require('express');


let html = fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/files/index.html', 'utf-8');
let Product = JSON.parse(fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/data/Products.json', 'utf-8'));
let plist = fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/tamplate/productlist.html', 'utf-8')
let pdetails = fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/tamplate/productdetails.html', 'utf-8')


// let proarray = Product.map((prot) => {
//      let r = plist.replace('{{%image%}}', prot.productImage)
//      r = r.replace('{{%description%}}', prot.Description)
//      r = r.replace('{{%name%}}',prot.name)
//      r = r.replace('{{%price%}}',prot.price)
//      r = r.replace('{{%id%}}',prot.id)

//      return r

// })

// function replacehtml(tamplate, product) {
//      let r = tamplate.replace('{{%image%}}', product.productImage)
//      r = r.replace('{{%description%}}', product.Description)
//      r = r.replace('{{%name%}}', product.name)
//      r = r.replace('{{%price%}}', product.price)
//      r = r.replace('{{%id%}}', product.id)
//      r = r.replace('{{%rom%}}', product.ROM)

//      return r
// }


// let Server = http.createServer((request, response) => {


//      let { query, pathname: path } = url.parse(request.url, true)
//      // let path = request.url;
//      // console.log(par)

//      if (path === "/" || path.toLocaleLowerCase() === "/home") {
//           response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a home page' })
//           response.end(html.replace('{{%right%}}', plist))
//      }

//      else if (path.toLocaleLowerCase() === "/about") {
//           response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a about page' })
//           response.end(html.replace('super value deals', 'You Are in about page'))
//      }

//      else if (path.toLocaleLowerCase() === "/content") {
//           response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a content page' })
//           response.end(html.replace('super value deals', 'You Are in content page'))
//      }

//      else if (path.toLocaleLowerCase() === "/product") {

//           if (!query.id) {
//                let proarray = Product.map((prod) => {
//                     return replacehtml(plist, prod)
//                })
//                response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a Product page' })
//                let htmlx = html.replace('{{%right%}}', proarray.join(','))
//                response.end(htmlx)
//           }

//           else {
//                let pqi = Product[query.id]
//                let rpp = replacehtml(pdetails,pqi)
//                // response.end("The Product id is " + query.id)
//                response.end(html.replace('{{%right%}}',rpp))
//           }
//      }

//      else {
//           response.writeHead(404, { 'content-type': 'text/html', 'My-header': 'this is a unknown page' })
//           response.end("ERROR:404 Page Not Found!")
//      }

// });

let Server = http.createServer();

Server.listen(8000, '127.0.0.1', () => {
     console.log("Server has been started.")
});


Server.on('request',(request,response)=>{
     let { query, pathname: path } = url.parse(request.url, true)
     // let path = request.url;
     // console.log(par)

     if (path === "/" || path.toLocaleLowerCase() === "/home") {
          response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a home page' })
          response.end(html.replace('{{%right%}}', plist))
     }

     else if (path.toLocaleLowerCase() === "/about") {
          response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a about page' })
          response.end(html.replace('super value deals', 'You Are in about page'))
     }

     else if (path.toLocaleLowerCase() === "/content") {
          response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a content page' })
          response.end(html.replace('super value deals', 'You Are in content page'))
     }

     else if (path.toLocaleLowerCase() === "/product") {

          if (!query.id) {
               let proarray = Product.map((prod) => {
                    return replacehtml(plist, prod)
               })
               response.writeHead(200, { 'content-type': 'text/html', 'My-header': 'this is a Product page' })
               let htmlx = html.replace('{{%right%}}', proarray.join(','))
               response.end(htmlx)
          }

          else {
               let pqi = Product[query.id]
               let rpp = replacehtml(pdetails,pqi)
               // response.end("The Product id is " + query.id)
               response.end(html.replace('{{%right%}}',rpp))
          }
     }

     else {
          response.writeHead(404, { 'content-type': 'text/html', 'My-header': 'this is a unknown page' })
          response.end("ERROR:404 Page Not Found!")
     }
})