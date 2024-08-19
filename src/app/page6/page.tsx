import nodeFetch from"node-fetch";

async function getData() {
    const result = await nodeFetch("https://jsonplaceholder.typicode.com/posts/6", {
    })
    return result.json();
}

export default async function Page5() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}