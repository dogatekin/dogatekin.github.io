<script>
	import Navbar from '$lib/Navbar.svelte';
	import Menu from '$lib/Menu.svelte';
	import A from '$lib/A.svelte';
	import '../app.css';
	
	let { children } = $props();

	let menu = $state(false);
</script>

<A />

<Navbar bind:menu />
<Menu bind:open={menu} />

<main id="content">
	{@render children?.()}
</main>

<footer></footer>
