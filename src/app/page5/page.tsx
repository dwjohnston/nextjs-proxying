import { ComponentFetch } from "@/components/ComponentFetch";
import { ComponentFetchRelative } from "@/components/ComponentFetchRelative";
import { setGlobalDispatcher, ProxyAgent } from "undici";

// const dispatcher = new ProxyAgent({uri: new URL("https://127.0.0.1:8080").toString() });
// setGlobalDispatcher(dispatcher);

async function getData() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/5")
    return result.json();
}

export default async function Page5() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}