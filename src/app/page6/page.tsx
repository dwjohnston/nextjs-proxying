import {HttpsProxyAgent} from 'https-proxy-agent';

import nodeFetch from"node-fetch";

const agent = new HttpsProxyAgent("https://127.0.0.1:8080")

async function getData() {
    const result = await nodeFetch("https://jsonplaceholder.typicode.com/posts/6", {
        agent: agent
    })
    return result.json();
}

export default async function Page5() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}