import { ComponentFetch } from "@/components/ComponentFetch";
import { ComponentFetchRelative } from "@/components/ComponentFetchRelative";


async function getData() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/3")
    return result.json();
}

export default async function Page3() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}