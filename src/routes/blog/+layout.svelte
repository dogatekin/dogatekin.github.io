<article>
	<slot />
</article>

<style>
	article {
		width: 720px;
		max-width: 100%;
		margin: 0 auto;
	}

	article :global(img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 2rem auto;
	}

	article :global(figure img) {
		margin: 1rem auto;
	}

	article :global(figure) {
		max-width: 100%;
		height: auto;
		margin: 2rem 0;
		text-align: center;
	}

	article :global(figcaption) {
		color: var(--muted);
	}

	article :global(figure .video) {
		margin: 1rem auto;
	}

	article :global(#footnotes) {
		margin-top: 3rem;
	}

	article :global(table) {
		margin: 1rem auto;
		border-spacing: 50px 0;
	}
</style>
