<script>
	import { base } from '$app/paths';

	let { open = $bindable(false) } = $props();
</script>


<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<aside class:open onclick={() => (open = !open)}>
	<div id="links">
		<a href="{base}/resume">Resume</a>
		<a href="{base}/projects">Projects</a>
		<a href="{base}/blog">Blog</a>
		<a href="{base}/loops">Loops</a>
		<a href="{base}/fun">Fun</a>
	</div>

	<div id="icons">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="mailto:dotekin@gmail.com"><i class="fas fa-envelope"></i></a>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a target="_blank" rel="noreferrer" href="https://github.com/dogatekin">
			<i class="fab fa-github"></i>
		</a>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dogatekin/">
			<i class="fab fa-linkedin-in"></i>
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
