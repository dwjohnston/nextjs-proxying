import { ComponentFetch } from "@/components/ComponentFetch";
import { ComponentFetchRelative } from "@/components/ComponentFetchRelative";


async function getData() {
    const result = await fetch("/api/posts/4")
    return result.json();
}

export default async function Page4() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}