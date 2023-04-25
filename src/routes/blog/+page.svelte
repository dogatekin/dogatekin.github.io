<script>
	import Post from '$lib/Post.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Doga Tekin | Blog</title>
</svelte:head>

<h1>Blog</h1>

<Post
	title="Learning JAX by Implementing a Simple Language Model"
	link="{base}/blog/makemore-jax"
	desc="Re-implementing makemore, Andrej Karpathy's simple implementation of a language model, in JAX."
	tags={['Machine Learning', 'Python']}
	date="25 April 2023"
/>

<Post
	title="The Hypnotic World of Degenerate Spirals"
	link="{base}/blog/hypnotic-degenerate-spirals"
	desc="An exploration of spirals and the interesting patterns produced when we fail to properly draw them
with code."
	tags={['Interactive', 'Exploration']}
	date="07 May 2021"
/>

<Post
	title="Actually Good Mobile Games"
	link="{base}/blog/good-mobile-games"
	desc="Great games that I think stand out among the growing number of disappointing mobile titles."
	tags={['Games', 'Recommendations']}
	date="07 February 2021"
/>

<Post
	title="Frustration in Hollow Knight and Celeste"
	link="{base}/blog/game-frustration"
	desc="An analysis of how two of my favourite games manage (or fail to manage) player frustration."
	tags={['Games', 'Game Design']}
	date="07 August 2020"
/>
