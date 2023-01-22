<script>
	import Typed from 'typed.js';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		let options = {
			stringsElement: '#typed-strings',
			startDelay: 250,
			typeSpeed: 40,
			backSpeed: 10,
			loop: true,
			smartBackspace: true
		};

		let typed = new Typed('#typed', options);
	});
</script>

<div id="typed-holder">
	<div id="typed-strings" style="display: none;">
		<p>I am a computer scientist.</p>
		<p>I did a Master's at <a href="https://www.epfl.ch/en/">EPFL</a>.</p>
		<p>I am interested in artificial intelligence.</p>
		<p>I am a research engineer at <a href="https://labs.oracle.com/">Oracle Labs</a>.</p>
		<p>I love Python.</p>
		<p>I can juggle <s>2</s> <s>3</s> 4 balls.</p>
		<p>I have been playing the piano for a year.</p>
		<p>I like making <a href="{base}/art">animated loops</a>.</p>
		<p>I am fascinated by <a href="{base}/blog">game design</a>.</p>
		<p>I enjoy <a href="{base}/blog/hypnotic-degenerate-spirals/">creative coding</a>.</p>
		<p>I wish you a pleasant day.</p>
	</div>
	<span id="typed" />
</div>

<style>
	#typed {
		font-size: 1.5rem;
	}

	#typed-holder {
		height: 2rem;
	}
</style>
