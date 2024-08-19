"use client";

import React from "react";

export type ComponentFetchProps = {

}

export function ComponentFetchRelative(props: ComponentFetchProps) {


    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/posts/2").then((res) => res.json()).then((d) => setData(d))
    }, [])


    return <div>

        {JSON.stringify(data)}
    </div>

} 