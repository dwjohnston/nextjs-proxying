
import { setGlobalDispatcher, ProxyAgent } from "undici";
const dispatcher = new ProxyAgent({uri: new URL("https://127.0.0.1:8080").toString() });
setGlobalDispatcher(dispatcher);