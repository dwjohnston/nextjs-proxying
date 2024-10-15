
async function getData() {
    const result = await fetch(`${process.env.UPSTREAM_URL}/posts/4`)
    return result.json();
}

export default async function Page4() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}