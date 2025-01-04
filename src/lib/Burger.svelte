<script>
	let { open = $bindable(false) } = $props();
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
	class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
	class:open
	onclick={() => (open = !open)}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s;
		transform: translateY(3px) scale(0.8);
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s;
	}

	svg #middle {
		transition: opacity 0.3s;
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}

	button {
		display: none;
		background-color: transparent;
    padding: 0;
		border: none;
		color: inherit;
		cursor: pointer;
	}

	@media (max-width: 767px) {
		button {
			display: block;
		}
	}
</style>
