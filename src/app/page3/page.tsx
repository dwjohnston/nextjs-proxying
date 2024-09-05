async function getData() {
    const result = await fetch(`${process.env.UPSTREAM_URL}/posts/3`)
    return result.json();
}

export default async function Page3() {

    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}