<script>
	let { cite, children } = $props();
</script>

<blockquote {cite}>
	{@render children?.()}
</blockquote>

<style>
	blockquote {
		display: block;
		border-width: 1px 0;
		border-style: solid;
		border-color: var(--primary);
		padding: 1.5rem 0 0.5rem;
		margin: 1.5rem 0;
		position: relative;
		background-color: transparent;
	}

	blockquote:before {
		content: '\201C';
		position: absolute;
		top: 0em;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--bg);
		width: 3rem;
		height: 2rem;
		font: 6em/1.08em 'PT Sans', sans-serif;
		color: var(--primary);
		text-align: center;
	}

	blockquote:after {
		content: '– ' attr(cite);
		display: block;
		text-align: right;
		font-size: 0.875rem;
		color: var(--accent);
		margin-top: 0.5rem;
	}
</style>
