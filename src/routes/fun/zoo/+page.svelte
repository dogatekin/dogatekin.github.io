<script>
	import P5 from 'p5-svelte';
    import { chain } from '$lib/fun/zoo/chain.ts';
</script>

<svelte:head>
	<title>Doga Tekin | Zoo</title>
</svelte:head>

<div class="content">
	<P5 sketch={chain} />
</div>