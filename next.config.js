/** @type {import('next').NextConfig} */


const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")
const nextConfig = {
  
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
            // port: '',
            // pathname: '',
          },
          
        ],
      },
}

module.exports = nextConfig
