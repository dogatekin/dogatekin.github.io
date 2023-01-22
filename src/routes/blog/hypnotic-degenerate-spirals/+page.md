---
title: The Hypnotic World of Degenerate Spirals
date: "2021-05-07"
---

<script>
	import P5 from 'p5-svelte';
	import Quote from '$lib/Quote.svelte';

	import { archimedean2 } from '$lib/spirals/archimedean-2.js';
	import { archimedean } from '$lib/spirals/archimedean.js';
	import { circle } from '$lib/spirals/circle.js';
	import { cover } from '$lib/spirals/cover.js';
	import { degenerateArchimedean2 } from '$lib/spirals/degenerate-archimedean-2.js';
	import { degenerateArchimedean } from '$lib/spirals/degenerate-archimedean.js';
	import { degenerateFermat2 } from '$lib/spirals/degenerate-fermat-2.js';
	import { degenerateFermat } from '$lib/spirals/degenerate-fermat.js';
	import { degenerateLituus2 } from '$lib/spirals/degenerate-lituus-2.js';
	import { degenerateLituus } from '$lib/spirals/degenerate-lituus.js';
	import { degenerate } from '$lib/spirals/degenerate.js';
	import { drawing } from '$lib/spirals/drawing.js';
	import { fermat } from '$lib/spirals/fermat.js';
	import { lituus } from '$lib/spirals/lituus.js';
	import { numpoints } from '$lib/spirals/numpoints.js';
	import { points } from '$lib/spirals/points.js';
	import { scaling } from '$lib/spirals/scaling.js';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
	<title>Doga Tekin on Spirals</title>
</svelte:head>

<div class="warning" role="alert">
	<strong>PSE WARNING:</strong> If you suffer from photosensitive epilepsy, please consider skipping this post! The visualisations on this page might trigger a seizure. Sorry!
</div>

# {title}

<P5 sketch={cover} parentDivStyle=''/>

Recently, I was looking for a way to add a spiral to my website<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a>. My search led me to [this CodePen](https://codepen.io/Twinbee/pen/gvMNJY), which I found fascinating. For one, the code for simulating the spiral was very simple. But what really caught my attention was what happened when I started playing with the provided "angle" slider. Incredibly complex, intricate shapes were being drawn in front of my eyes from a few simple lines of code, and they didn't even look like spirals after some point.

I fell down an enjoyable rabbit hole trying to understand what was actually going on, and then I ended up finding and playing around with different types of spirals to see what other effects I could observe. I'd love to share all my findings with you, but if you don't care for the details then feel free to [jump directly to the visualisations](#visualisations)!

## What is a Spiral?

<Quote cite="Wikipedia">
	In mathematics, a spiral is a curve which emanates from a point, moving farther away as it revolves around the point.
</Quote>

I think it's useful to start by looking at a simple circle. Even though we usually think of circles as static, we could also think of them as curves revolving around a point, always staying at the exact same distance to that point.

<P5 sketch={circle} parentDivStyle=''/>

As the radius $r$ is kept constant while the angle $\theta$ keeps increasing, this motion traces a perfect circle after $360^{\circ}$ and goes on to loop over itself forever.

When we look at a circle from this perspective, the only difference of a spiral is that the radius is not kept constant, but changes according to some function of the angle:

$$
r = f(\theta)
$$

Different functions lead to different spirals, some of which we will explore later on. For now, let's start with the simplest one, the [Archimedean Spiral](https://en.wikipedia.org/wiki/Archimedean_spiral):

$$
r = a\theta
$$

<P5 sketch={archimedean} parentDivStyle=''/>

In this example, I chose $a = 0.1$ so the radius is always equal to $\theta / 10$ (with $\theta$ given in degrees). Changing this parameter does not change the fundamental shape of the spiral, it only changes the distance between consecutive loops.

<P5 sketch={scaling} parentDivStyle='' />

To change the shape of the spiral, we need to change the relation between the angle and the radius. For example, [Fermat's Spiral](https://en.wikipedia.org/wiki/Fermat%27s_spiral) has loops that get closer to each other as the curve gets farther from the center:

$$
r = a \sqrt{\theta}
$$

<P5 sketch={fermat} parentDivStyle='' />

With a small change, we can even get a spiral _converging_ towards a point instead of _diverging_ away from one, such as a [lituus](https://en.wikipedia.org/wiki/Lituus_(mathematics)):

$$
r = \frac{a}{\sqrt{\theta}}
$$


<P5 sketch={lituus} parentDivStyle='' />

## How to Draw a Spiral

There are multiple ways of drawing a spiral using code, and you can see different implementations in many languages at [Rosetta Code](https://rosettacode.org/wiki/Archimedean_spiral). We are interested in the approach using line segments, since that is the one that will lead to those interesting patterns at the start of this post.

Let's say we want to draw a spiral that has completed 5 full rotations, so $\theta$ has gone from $0^\circ$ to $1800^\circ$. We are going to approximate this curve by picking lots of points that would be on this spiral and connecting them with straight line segments.

<P5 sketch={drawing} parentDivStyle='' />

This is basically how I've been drawing all the spirals so far, but without showing you the actual points. To create an animation of an expanding spiral, all you need to do is increase $\theta$ a little every frame and draw the corresponding spiral<a href="#fn2" class="footnote-ref" id="fnref2" role="doc-noteref"><sup>2</sup></a>.

In the above example, I chose to pick a point every $5^\circ$ from $0^\circ$ to $1800^\circ$, which I think creates a pretty reasonable approximation. Of course, if we decrease this gap we will pick more points and get a better approximation, and similarly if we increase this gap we will get a worse approximation.

<P5 sketch={points} parentDivStyle='' />

If you played around a bit with the slider above, you might already see where we're going with this.

## Spiraling out of Control

What if, instead of committing to picking points at regular intervals (like every $5^\circ$), we limit ourselves to approximate the spiral with a fixed number of points (say, 100) no matter how big the spiral gets. In this case, as the spiral expands, the few points have to spread apart further and further to cover the entire shape, making our approximation progressively worse.

<P5 sketch={numpoints} parentDivStyle='' />

And there we are! Now we just have to choose some arbitrary number of points, let $\theta$ grow and watch our spiral degenerate slowly into these cool, intricate patterns as our approximation fails spectacularly.

<P5 sketch={degenerate} parentDivStyle='' />

In the next section, I will remove the explanatory elements like the coordinate axes and the line/point showing the end of the spiral, so you can enjoy the hypnotic visualisations of what I'm now calling *degenerate* spirals.

<span class="anchor" id="visualisations"></span>

## Hypnotic Visualisations

### Archimedean Spiral

<P5 sketch={degenerateArchimedean} parentDivStyle='' />

### Fermat's Spiral

<P5 sketch={degenerateFermat} parentDivStyle='' />

### Lituus

<P5 sketch={degenerateLituus} parentDivStyle='' />

## Bonus: The Second Branch (and Beyond)
I've only been drawing a single branch of these spirals, in fact there are more! We obtained the spirals so far by starting at $\theta = 0$ and slowly increasing it; we can get another one by moving in the other direction. Here are both branches of the Archimedean Spiral and their romantic dance, starting with a small heart:

<P5 sketch={archimedean2} parentDivStyle='' />

This actually adds a whole new layer of beautiful complexity to our degenerate spirals, leading to lots of flowery patterns!

<P5 sketch={degenerateArchimedean2} parentDivStyle='' />

There is another way of adding a secondary branch to a spiral, and that is by drawing its reflection with respect to the origin. Here is an example using Fermat's spiral:

<P5 sketch={degenerateFermat2} parentDivStyle='' />

Of course, you don't have to choose one or the other, you can have four branches at the same time. So here, to end this post, are all four branches of a lituus gracefully degenerating into an [end mark](https://www.fonts.com/content/learning/fontology/level-4/fine-typography/end-marks).

<P5 sketch={degenerateLituus2} parentDivStyle='' />

## Final Remarks

If you'd like to dive deeper into the world of spirals, the [Wikipedia article](https://en.wikipedia.org/wiki/Spiral) is a good place to start with lots of general information and links to different types of spirals. All visualisations on this page were made with the amazing [p5.js](https://p5js.org/) library. If you'd like to play around with code, I've made a [template degenerate spiral sketch](https://editor.p5js.org/dogatekin/sketches/utJunQyLi) on the p5.js Web Editor that you can edit and run! If you would instead prefer to look at the code of the sketches here, check out the [source for this post](https://github.com/dogatekin/dogatekin.github.io/tree/master/blog/hypnotic-degenerate-spirals).

The format of this post is inspired by the [Explorable Explanations](https://explorabl.es/) movement, which I enjoy so much. If you liked this at all, you'll probably love some of the posts there. This is the first time I'm exploring and explaining a topic in this way, so if you have any feedback (or just want to say hi), feel free to [write to me](mailto:dotekin@gmail.com)!

**PS:** If you've found this interesting, you might also enjoy [the discussion about this post on Hacker News](https://news.ycombinator.com/item?id=27097719).

<hr id="footnotes"/>

#### Footnotes

<ol>
<li id="fn1" role="doc-endnote">
	<p>As one does. <a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p>
</li>
<li id="fn2" role="doc-endnote">
	<p>If you are just trying to draw a proper spiral that keeps expanding, it is obviously inefficient to redraw the entire spiral every frame; you should just add a few new line segments to the end at every frame. However, we are not trying to draw proper spirals and redrawing every frame is essential for the effect we are pursuing here. <a href="#fnref2" class="footnote-back" role="doc-backlink">↩︎</a></p>
</li>
</ol>

<style>
	:global(div.m-0) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
	}

	:global(.controls) {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.control) {
		margin: 0 2rem;
		color: var(--primary);
		transition-duration: 0.25s;
		transition-property: transform, color;
		transition-timing-function: ease-out;

		font-size: 1rem;
		background-color: transparent;
		border: none;
	}

	:global(.control:hover) {
		color: var(--accent);
	}

	:global(.control:active) {
		transform: translateY(2px);
	}

	:global(.label) {
		margin: 0 1rem;
	}

	.anchor {
		display: block;
		position: relative;
		top: -80px;
		visibility: hidden;
	}

	.warning {
		padding: 1rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		background-color: #FFF9D4;
		color: #121212;
		border-radius: 10px;
	}

	:global(input) {
		background-color :#565656 ;
		display: block;
		width: 100%;
		accent-color: #326ba1;
	}
</style>
