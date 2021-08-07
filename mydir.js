
// inbuilt module


// OS
const os = require('os')
const user = os.userInfo()

console.log(user)
console.log(`the system uptime is ${os.uptime()} seconds`)

let allinfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:  os.freemem()
}
console.log(allinfo)



// path
const path = require('path')
console.log(path.delimiter)
const filePath= path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
const abolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(abolute)

// http

const http = require('http')
const server = http.createServer( (req, res)=>{
    if (req.url ==='/'){
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        res.end(`
    <h1>OOps!</h1>
    <p>We cant seem to find the page</p>
    <a href = "/">back home</a>
    `)
    }
})
server.listen(5000)