
import nodeFetch from "node-fetch";
import {HttpsProxyAgent} from 'https-proxy-agent';
import {setGlobalDispatcher, ProxyAgent } from "undici";
import {readFileSync} from "fs";




const agent = new HttpsProxyAgent("https://127.0.0.1:8080")
async function nonProxied() {

    console.log("NON-PROXIED");
    
    console.log("FETCH")
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await res.json(); 
    console.log(json); 


    console.log("NODE-FETCH");
    const res2 = await nodeFetch("https://jsonplaceholder.typicode.com/posts/2");
    const json2 = await res2.json(); 
    console.log(json2);

     
}


async function proxied() {
    console.log("PROXIED");

    const pem2 = readFileSync("/Users/dwjohns5/.mitmproxy/mitmproxy-ca-cert.pem", "utf-8");

    console.log(pem2);

    const dispatcher = new ProxyAgent({uri: new URL("https://127.0.0.1:8080").toString()});
    setGlobalDispatcher(dispatcher);

    const agent = new HttpsProxyAgent("https://127.0.0.1:8080")


        
    console.log("FETCH")
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/3")
    const json = await res.json(); 
    console.log(json); 

    console.log("NODE-FETCH");
    const res2 = await nodeFetch("https://jsonplaceholder.typicode.com/posts/6", {
        agent: agent, 

    })
    const json2 = await res2.json();
    console.log(json2);




     
}


async function main() {
    // await nonProxied(); 
    await proxied();
}

main();





