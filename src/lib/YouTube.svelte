<script>
	export let src;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe {src} allowfullscreen frameborder="0" />

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
