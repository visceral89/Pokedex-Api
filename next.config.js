/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.pokemondb.net",
				port: "",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
