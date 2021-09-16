module.exports = {
	outputDir: "docs",
	pwa: {
		publicPath: process.env.NODE_ENV === 'production'
			? '/simple-project-githubpages/'
			: '/',
		manifestCrossorigin: 'use-credentials',
		workboxOptions: {
			skipWaiting: true,
		}
	}
}