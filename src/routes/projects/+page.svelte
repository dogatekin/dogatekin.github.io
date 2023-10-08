<script>
	import Matter from 'matter-js';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';

	let project = {
		name: 'Project',
		desc: 'This is a project.',
		image: '',
		link: '',
		github: '',
		open: false
	};

	let projects = {
		evolve: {
			name: 'Evolving Dots',
			desc: 'A visual demonstration of an evolutionary algorithm where a population of dots learn to avoid obstacles and reach a goal.',
			image: `${base}/projects/evolve.png`,
			link: 'https://www.dogatekin.com/evolve',
			github: 'https://github.com/dogatekin/evolve'
		},
		spotify: {
			name: 'Spotify Quiz',
			desc: 'An online game that creates personal music quizzes from your own Spotify playlists.',
			image: `${base}/projects/spotify.png`,
			link: 'https://www.dogatekin.com/molto-vivace',
			github: 'https://github.com/dogatekin/molto-vivace'
		},
		pomodoro: {
			name: 'Pomodoro Timer',
			desc: 'A very minimal pomodoro timer.',
			image: `${base}/projects/pomodoro.png`,
			link: 'https://www.dogatekin.com/pomo',
			github: 'https://github.com/dogatekin/pomo'
		},
		gpa: {
			name: 'EPFL GPA Calculator',
			desc: 'A script that parses EPFL Transcript files to calculate GPA.',
			image: `${base}/projects/gpa.png`,
			link: '',
			github: 'https://github.com/dogatekin/epfl-gpa'
		},
		anagrammer: {
			name: 'Anagrammer',
			desc: `JS script to animate between anagrams, a simplified version is used on my <a href="${base}/fun">Fun</a> page.`,
			image: `${base}/projects/anagrammer.png`,
			link: 'https://editor.p5js.org/dogatekin/sketches/boIta5qY9',
			github: ''
		}
	};

	onMount(() => {
		const matterContainer = document.querySelector('#matter-container');
		const thickness = 100;

		// module aliases
		let Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Bodies = Matter.Bodies,
			Mouse = Matter.Mouse,
			MouseConstraint = Matter.MouseConstraint,
			Events = Matter.Events,
			Composite = Matter.Composite;

		// create an engine
		let engine = Engine.create();

		// create a renderer
		let render = Render.create({
			element: matterContainer,
			engine: engine,
			options: {
				width: matterContainer.clientWidth,
				height: matterContainer.clientHeight,
				background: 'transparent',
				wireframes: false
			}
		});

		let w = 100;
		if (window.innerWidth > 767) {
			w = 200;
		}

		let bodies = [];

		for (let proj in projects) {
			let xOffset = w * Math.random() - w / 2;
			let yOffset = w * Math.random() - w / 2;
			let box = Bodies.rectangle(window.innerWidth / 2 + xOffset, 250 + yOffset, w, w, {
				render: {
					sprite: {
						texture: projects[proj].image,
						xScale: w / 500,
						yScale: w / 500
					}
				},
				label: proj
			});
			bodies.push(box);
		}

		let ground = Bodies.rectangle(
			window.innerWidth / 2,
			window.innerHeight + thickness / 2,
			2000,
			thickness,
			{ isStatic: true }
		);
		let leftWall = Bodies.rectangle(
			0 - thickness / 2,
			window.innerHeight / 2,
			thickness,
			window.innerHeight * 2,
			{ isStatic: true }
		);
		let rightWall = Bodies.rectangle(
			window.innerWidth + thickness / 2,
			window.innerHeight / 2,
			thickness,
			window.innerHeight * 2,
			{ isStatic: true }
		);
		let ceiling = Bodies.rectangle(window.innerWidth / 2, 0 - thickness / 2, 2000, thickness, {
			isStatic: true
		});
		bodies.push(ground, leftWall, rightWall, ceiling);

		// add all of the bodies to the world
		Composite.add(engine.world, bodies);

		let mouse = Mouse.create(render.canvas);
		let mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});

		const delta = 5;
		let startX, startY, selection;

		Events.on(mouseConstraint, 'mousedown', function (event) {
			let mousePosition = event.mouse.position;
			startX = mousePosition.x;
			startY = mousePosition.y;
			selection = mouseConstraint.body;
		});
		Events.on(mouseConstraint, 'mouseup', function (event) {
			let mousePosition = event.mouse.position;
			const diffX = mousePosition.x - startX;
			const diffY = mousePosition.y - startY;

			if (Math.abs(diffX) < delta && Math.abs(diffY) < delta && selection) {
				project = projects[selection.label];
				project['open'] = true;
			}
		});

		Composite.add(engine.world, mouseConstraint);

		// run the renderer
		Render.run(render);

		// create runner
		let runner = Runner.create();

		// run the engine
		Runner.run(runner, engine);

		function handleResize() {
			render.canvas.width = window.innerWidth;
			render.canvas.height = window.innerHeight;

			Matter.Body.setPosition(
				ground,
				Matter.Vector.create(window.innerWidth / 2, window.innerHeight + thickness / 2)
			);
			Matter.Body.setPosition(
				leftWall,
				Matter.Vector.create(0 - thickness / 2, window.innerHeight / 2)
			);
			Matter.Body.setPosition(
				rightWall,
				Matter.Vector.create(window.innerWidth + thickness / 2, window.innerHeight / 2)
			);
			Matter.Body.setPosition(
				ceiling,
				Matter.Vector.create(window.innerWidth / 2, 0 - thickness / 2)
			);
		}

		window.addEventListener('resize', () => handleResize());
	});
</script>

<svelte:head>
	<title>Doga Tekin | Projects</title>
</svelte:head>

<h1>Projects</h1>

<p style="text-align: center;">Click the boxes to learn more, or drag them around if you want!</p>

<div id="matter-container" />

<Project {...project} />

<style>
	#matter-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
