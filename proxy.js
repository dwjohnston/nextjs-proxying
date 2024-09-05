var http = require('http');
var httpProxy = require('http-proxy');

const {HttpsProxyAgent} = require('https-proxy-agent');

const agent = new HttpsProxyAgent("https://127.0.0.1:8080")

var proxy = httpProxy.createProxyServer({"agent": agent});

http.createServer(function(req, res) {
    proxy.web(req, res, {changeOrigin: true,  target: 'http://jsonplaceholder.typicode.com'});
}).listen(3001);