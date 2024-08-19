"use client";
import React from "react";

export function ComponentFetchRelative() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/posts/2").then((res) => res.json()).then((d) => setData(d))
    }, [])
    return <div>
        {JSON.stringify(data)}
    </div>
} 