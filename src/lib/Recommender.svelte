<script>
	import { onMount } from 'svelte';
	import Papa from 'papaparse';
	import { base } from '$app/paths';

	let refresher;

	onMount(() => {
		let recommendation = document.getElementById('recommendation');
		let candidates;
		let i = 0;

		Papa.parse(`${base}/recommendations.csv`, {
			download: true,
			header: true,
			complete: function (results) {
				candidates = results.data;
				shuffleArray(candidates);
				refresher();
			}
		});

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		refresher = function newRecommendation() {
			let category, title, link;

			({ category, title, link } = candidates[i]);

			recommendation.innerHTML = `<a href=${link} target="_blank" rel="noreferrer">${title}</a><br><strong>(${category})</strong>`;

			i = (i + 1) % candidates.length;
		};
	});
</script>

<div id="recommender">
	Media recommendations:
	<button on:click={refresher} class="control">
		<i class="fas fa-redo" />
	</button>
</div>
<div id="recommendation" />

<style>
	#recommender {
		font-size: 1.25rem;
		text-align: center;
		position: relative;
		touch-action: manipulation;
	}

	#recommendation {
		margin-top: 1rem;
		font-size: 1.5rem;
		text-align: center;
	}

	button {
		touch-action: manipulation;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	button:active {
		transform: translateY(-40%);
	}
</style>
