<script>
	import { base } from '$app/paths';

	export let open = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<aside class:open on:click={() => (open = !open)}>
	<div id="links">
		<a href="{base}/resume">Resume</a>
		<a href="{base}/projects">Projects</a>
		<a href="{base}/blog">Blog</a>
		<a href="{base}/loops">Loops</a>
		<a href="{base}/fun">Fun</a>
	</div>

	<div id="icons">
		<a href="mailto:dotekin@gmail.com"><i class="fas fa-envelope" /></a>
		<a target="_blank" rel="noreferrer" href="https://github.com/dogatekin">
			<i class="fab fa-github" />
		</a>
		<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dogatekin/">
			<i class="fab fa-linkedin-in" />
		</a>
	</div>
</aside>

<style>
	a {
		display: inline-block;
		font-weight: 600;
		text-decoration: none;
		outline: none;
	}

	aside {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--bgt);
		width: 100%;
		left: -100%;
		height: 100%;
		top: 0;
		transition: left 0.5s ease-in-out;
		z-index: 1;
	}

	.open {
		left: 0;
	}

	#links {
		display: flex;
		flex-direction: column;
		font-size: 1.25rem;
		gap: 2.5rem;
		margin-top: 5rem;
		margin-left: 2rem;
	}

	#icons {
		display: flex;
		font-size: 1.25rem;
		gap: 3rem;
		margin-left: 2rem;
		margin-bottom: 5rem;
	}
</style>
