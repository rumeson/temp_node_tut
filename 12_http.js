const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`
    <h1>Welcome to our home page</h1>
    <a href="/about">About Page</a>
    `)
  }
  if (req.url === '/about') {
    res.end(`
    <h1>Here is our short history</h1>
    <a href="/">Back Home</a>
    `)
  }
  res.end(`
    <h1>Oops!!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
  `)
})
server.listen(5000)
