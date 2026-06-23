import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static adapter — output goes to ./build for Tauri and Capacitor.
			// Web deployments can swap to adapter-vercel / adapter-netlify as needed.
			adapter: adapter({
				fallback: 'index.html'
			})
		})
	]
});
