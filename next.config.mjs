/** @type {import('next').NextConfig} */
import { readFileSync } from "fs";
import { setGlobalDispatcher, ProxyAgent } from "undici";

const dispatcher = new ProxyAgent({uri: new URL("https://127.0.0.1:8080").toString()});
setGlobalDispatcher(dispatcher);



const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3001/:path*',
            
          },
        ]
      },
};

export default nextConfig;
