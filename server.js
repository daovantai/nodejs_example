const http= require('http');

const server= http.createServer((req,res) =>{
    console.log('run request ...')
    res.setHeader('Content-Type','text/html');
    res.write('<h3>Hello Tb </h3>');
    res.write('<h2>from Tb Nhu Pham</h2>')
    res.end();
})

server.listen(2309, 'localhost', () =>{
    console.log('Node.JS Server is running on port : 3000')
})