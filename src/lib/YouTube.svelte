<script>
	let { src } = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<iframe {src} allowfullscreen frameborder="0"></iframe>

<style>
	:global(figure) iframe {
		margin: 0.5rem auto;
	}

	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
		margin: 1rem auto;
	}
</style>
