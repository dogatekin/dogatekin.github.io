<script>
	import Navbar from '$lib/Navbar.svelte';
	import Menu from '$lib/Menu.svelte';
	import '../app.css';

	let menu = false;
</script>

<Navbar bind:menu />
<Menu bind:open={menu} />

<main>
	<slot />
</main>

<footer />
