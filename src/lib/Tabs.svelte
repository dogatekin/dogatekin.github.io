<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let { tabItems, activeItem } = $props();
</script>

<div class="tabs">
	<ul>
		{#each tabItems as item}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<li onclick={() => dispatch('tabChange', item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: flex;
		justify-content: end;
		padding: 0;
		list-style-type: none;
	}
	li {
		margin: 0 16px;
		font-size: 16px;
		cursor: pointer;
	}
	.active {
		border-bottom: 2px solid var(--accent);
		padding-bottom: 4px;
	}
</style>
