/** @type {import('next').NextConfig} */
import { setGlobalDispatcher, ProxyAgent } from "undici";
const dispatcher = new ProxyAgent({uri: new URL("https://127.0.0.1:8080").toString() });
setGlobalDispatcher(dispatcher);


const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://jsonplaceholder.typicode.com/:path*',
          },
        ]
      },
};

export default nextConfig;
