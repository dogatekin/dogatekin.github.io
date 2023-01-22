<script>
	import P5 from 'p5-svelte';
	import Recommender from '$lib/Recommender.svelte';
	import { anagram } from '$lib/fun/anagram.js';
	import { balls } from '$lib/fun/balls.js';
</script>

<svelte:head>
	<title>Doga Tekin | Fun</title>
</svelte:head>

<div class="content">
	<h1>Fun</h1>

	<Recommender />

	<div id="anag" style="touch-action: manipulation;">
		<p id="anagram-label">Anagrams of my name:</p>
		<P5 sketch={anagram} />
	</div>

	<P5 sketch={balls} />
</div>

<style>
	.content {
		overflow: hidden;
		max-width: 95%;
		margin: 0 auto;
	}

	h1 {
		line-height: 1.5;
		font-size: 2rem;
		text-align: center;
		margin-bottom: 3rem;
	}

	#anag {
		text-align: center;
		margin-top: 4rem;
	}

	#anagram-label {
		font-size: 1.25rem;
		position: relative;
	}

	.content :global(.btn) {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.content :global(.btn:active) {
		transform: translateY(-40%);
	}

	.content :global(.control) {
		margin: 0 0.25rem;
		color: var(--primary);
		transition-duration: 0.25s;
		transition-property: transform, color;
		transition-timing-function: ease-out;

		font-size: 1rem;
		background-color: transparent;
		border: none;
	}

	.content :global(.control:hover) {
		color: var(--accent);
	}
</style>
