<script>
	export let name, desc, image, github, link, open;

	function close() {
		open = false;
	}
</script>

<div id="project" class:open>
	<div id="content">
		<div id="header">
			<h2>{name}</h2>
			<button on:click={close}>
				<svg width="32" height="24">
					<line id="top" x1="0" y1="2" x2="32" y2="2" />
					<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
				</svg>
			</button>
		</div>

		<img src={image} alt="Project" />

		<p>{desc}</p>

		<div id="links">
			{#if link}
				<a href={link} target="_blank" rel="noreferrer"><i class="fas fa-link" /></a>
			{/if}
			{#if github}
				<a href={github} target="_blank" rel="noreferrer"><i class="fab fa-github" /></a>
			{/if}
		</div>
	</div>
</div>

<style>
	#project {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		background-color: var(--card-bg);
		border-radius: 25px;

		width: 400px;
		max-width: 90%;

		opacity: 0;
		z-index: -2;

		transition: opacity 0.5s;
	}

	#project.open {
		opacity: 0.98;
		z-index: 0;
	}

	#content {
		padding: 1rem;
	}

	img {
		width: 100%;
	}

	#header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	#links {
		display: flex;
		gap: 1rem;
	}

	h2 {
		color: var(--text);
		font-weight: bold;
		margin-top: 0;
	}

	p {
		margin-block-start: 0.5rem;
	}

	button {
		background-color: transparent;
		padding: 0;
		border: none;
		color: inherit;
		cursor: pointer;
	}

	svg {
		height: 24px;
		scale: 0.8;
		transform: translateY(4px);
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
	}

	#top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	#bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}

	@media (max-width: 767px) {
		img {
			width: 200px;
			height: 200px;
			display: block;
			margin: 0 auto;
		}
	}
</style>
