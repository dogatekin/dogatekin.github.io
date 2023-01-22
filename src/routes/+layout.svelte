<script>
	import Navbar from '$lib/Navbar.svelte';
	import Menu from '$lib/Menu.svelte';
	import '../app.css';

	let menu = false;
</script>

<svelte:head>
	<!-- GoatCounter -->
	<script
		data-goatcounter="https://dogatekin.goatcounter.com/count"
		async
		src="//gc.zgo.at/count.js"
	></script>
</svelte:head>

<Navbar bind:menu />
<Menu bind:open={menu} />

<main>
	<slot />
</main>

<footer />
