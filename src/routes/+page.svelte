<script>
	import Typed from '$lib/Typed.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Doga Tekin</title>
</svelte:head>

<div id="hero">
	<h1>Hi, I'm Doga!</h1>

	<Typed />

	<div id="links">
		<a href="{base}/resume">Resume</a>
		<a href="{base}/projects">Projects</a>
		<br />
		<a href="{base}/blog">Blog</a>
		<a href="{base}/art">Art</a>
		<a href="{base}/fun">Fun</a>
	</div>
</div>

<style>
	h1 {
		font-size: 2.5rem;
	}

	#hero {
		text-align: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 95%;
	}

	a {
		display: inline-block;
		font-size: 1.15rem;
		font-weight: 600;
		padding: 1.25rem;
		transition: color 0.25s, text-decoration-color 0.25s, transform 0.3s ease-out;
	}

	a:focus,
	a:hover {
		transform: translateY(-8px);
	}

	a:active {
		transform: translateY(-4px);
	}

	#links {
		margin-top: 4rem;
	}

	@media (min-width: 768px) {
		br {
			display: none;
		}
	}
</style>
