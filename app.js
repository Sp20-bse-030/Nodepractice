//const os = require('os')
const fs = require('fs')
const http = require('http')
const _ = require('lodash')
//const a = os.userInfo();
// console.log(a);
// console.log(`system uptime is ${os.uptime()} seconds`);
// const infor = {
//     name: os.type(),
//     mem: os.totalmem(),
//     free: os.freemem(),s
//     release: os.release()
// }
// console.log(infor)
//  const second = fs.readFile('./contect/second.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)

//  })
//  //const second = fs.readFile('./contect/second.txt', 'utf8')
//  //const write = fs.writeFileSync('./contect/first.txt', `Hello result ${first} and ${second} `, {flag:'a'})
//  console.log(second)
// const server = http.createServer((req, res) =>{
//    if(req.url === '/'){
//     res.end("my home page")
//    }
//    if(req.url == '/about'){
//     res.end("my about page")
//    }
//    res.end(`
//    <h1>Oops</h1>
//    <p>not found the page</p>
//    <a href = "/"> BAck home<a>
//    `)
   
// })
// server.listen(5000);


const ali = [1,[2,[3],[4]]]
const b = _.flattenDeep(ali)
console.log(b)