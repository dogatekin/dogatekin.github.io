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

<!-- 
Resources for procedural animations:
- https://www.youtube.com/watch?v=qlfh_rv6khY
- https://weaverdev.io/projects/bonehead-procedural-animation/
- https://www.alanzucconi.com/2017/04/17/procedural-animations/
- https://zalo.github.io/blog/constraints/
- https://x.com/TheRujiK/status/969581641680195585
-->