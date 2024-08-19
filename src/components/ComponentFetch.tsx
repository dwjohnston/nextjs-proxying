"use client";

import React from "react";

export type ComponentFetchProps = {

}

export function ComponentFetch(props: ComponentFetchProps) {


    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()).then((d) => setData(d))
    }, [])


    return <div>

        {JSON.stringify(data)}
    </div>

} 