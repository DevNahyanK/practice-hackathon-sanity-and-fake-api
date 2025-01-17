/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
        
          hostname: "cdn.sanity.io", // Ensure this matches your image domain
        },
      ],
    },
  };
  
  export default nextConfig;
  