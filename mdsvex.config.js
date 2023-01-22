import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math'
import rehypeKatexSvelte from "rehype-katex-svelte";
import relativeImages from "mdsvex-relative-images";

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [relativeImages, remarkMath],
	rehypePlugins: [rehypeKatexSvelte]
});

export default config;
