/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        outputStandalone: true,
    },
    images: {
        domains: [
            
            'elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com',
            'elasticbeanstalk-eu-north-1-102471047009.s3-website.eu-north-1.amazonaws.com',
            'elasticbeanstalk-eu-north-1-102471047009'
        ]
    }

}

module.exports = nextConfig
