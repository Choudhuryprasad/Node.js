const readline = require('readline')
const fs = require('fs');


const rl = readline.createInterface({
     input:process.stdin,
     output:process.stdout
})

rl.question("Enter your Name: ",(name) => {
     console.log("You Entered: "+name)
     rl.close()
})

// rl.on('close',() => {
//      console.log("InterFace is closed")
//      process.exit(0)
// })


// let data = fs.readFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/files/input.txt', 'utf8');
// console.log(data);

// let content = `Data read from input: ${data}\nDate created: ${new Date()}`
// fs.writeFileSync('C:/Users/khadi/OneDrive/Desktop/Node.js/files/output.txt',content)


// fs.readFile('C:/Users/khadi/OneDrive/Desktop/Node.js/files/input.txt','utf-8',(err,data)=>{
//      console.log(data)
// })

// console.log('File is processing')

// fs.writeFileSync('./Node.js/files/output.txt','utf-8')




// CALLBACK HELL

// fs.readFile('C:/Users/khadi/OneDrive/Desktop/Node.js/files/start.txt', 'utf-8', (err1, data1) => {
//      console.log(data1)
//      console.log(err1)

//      fs.readFile(`C:/Users/khadi/OneDrive/Desktop/Node.js/files/${data1}.txt`, 'utf-8', (err2, data2) => {
//           console.log(data2)
//           console.log(err2)

//           fs.readFile('C:/Users/khadi/OneDrive/Desktop/Node.js/files/apend.txt', 'utf-8', (err3, data3) => {
//                console.log(data3)
//                console.log(err3)

//                fs.writeFile('C:/Users/khadi/OneDrive/Desktop/Node.js/files/end.txt',`${data2}\n\n${data3}\n\nDate created: ${new Date()}`, (err4, data4) =>{
//                     console.log(data4)
//                     console.log(err4)
//                })

//           })
//      })
// })

