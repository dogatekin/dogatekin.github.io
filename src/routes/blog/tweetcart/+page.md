---
title: Reviving a Tweetcart
---

<svelte:head>
	<title>Doga Tekin on Tweetcarts</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css">
</svelte:head>

<script>
	import P5 from 'p5-svelte';
	import { moon } from '$lib/tweetcart/moon.js';
</script>

# Modernizing a Tweetcart

Tweetcarts are wonderful!

```lua
cls()
circfill(30,22,15,7)
::_::
flip()
srand()
rectfill(0,50,127,127,0)
for y=0,77 do
z=77/(y+1)
for i=0,z*8 do
x=(rnd(160)+t()*150/z)%160-16
w=cos(rnd()+t())*12/z
if(w>0)line(x-w,y+50,x+w,y+50,max(1,pget(x,49-y/2)))
end
end
goto _
```

<P5 sketch={moon} parentDivStyle=''/>

<style>
:global(div.m-0) {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
}
</style>