import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1000
	}
};

export default config;
