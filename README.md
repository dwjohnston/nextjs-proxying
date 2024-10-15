Example application demonstrating the use of recording network traffic into a HAR file using MITMProxy. 


Instructions: 

In one terminal start the the proxy with: 

```
npm run proxy
```


In another terminal start the dev server: 


```
npm run dev:secure
```


In a third terminal start mitmproxy running in observe mode: (you will need mitmproxy install seperately) 

```
npm run mitm
```


Now navigate to localhost:3000/page/1 through localhost:3000/page/6

Observe that all except page 1 will be captured by MITMproxy (page 1 will not be captured, unless you have configured your browser to also use a proxy). 

Record a har file with the following command in the mitm cli: 

```
:save.har @all 1.har
```


Exit mitm proxy ('q'), and start in replay mode with: 

```
npm run mitm:replay
```

Rerun the your requests, note that they return instantly. 


