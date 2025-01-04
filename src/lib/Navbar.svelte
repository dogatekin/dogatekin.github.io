<script>
	import { base } from '$app/paths';
	import Burger from '$lib/Burger.svelte';
	import { theme } from '$lib/stores';

	function toggleTheme() {
		if ($theme == 'dark-theme') {
			$theme = 'light-theme';
			document.documentElement.classList.add('light-theme');
		} else {
			$theme = 'dark-theme';
			document.documentElement.classList.remove('light-theme');
		}
	}

	let { menu = $bindable(false) } = $props();
</script>

<svelte:head>
	<script>
		if (document) {
			let theme = localStorage.getItem('theme') || 'dark-theme';
			if (theme === 'light-theme') {
				document.documentElement.classList.add('light-theme');
			}
		}
	</script>
</svelte:head>

<nav>
	<div id="left">
		<a href="{base}/" onclick={() => (menu = false)}>
			<div id="brand">
				<div id="logo-holder">
					<img src="{base}/logo.svg" alt="Logo" id="logo" />
				</div>
				Doga Tekin
			</div>
		</a>

		<div id="icons">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="mailto:dotekin@gmail.com"><i class="fas fa-envelope"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a target="_blank" rel="noreferrer" href="https://github.com/dogatekin">
				<i class="fab fa-github"></i>
			</a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dogatekin/">
				<i class="fab fa-linkedin-in"></i>
			</a>

			<!-- svelte-ignore a11y_missing_attribute -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a class="toggler" role="button" onclick={toggleTheme}><i class="fas fa-adjust"></i></a>
		</div>
	</div>

	<div id="links">
		<a href="{base}/resume">Resume</a>
		<a href="{base}/projects">Projects</a>
		<a href="{base}/blog">Blog</a>
		<a href="{base}/loops">Loops</a>
		<a href="{base}/fun">Fun</a>
	</div>

	<div id="mobile-buttons">
		<!-- svelte-ignore a11y_missing_attribute -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a class="toggler" role="button" onclick={toggleTheme}><i class="fas fa-adjust"></i></a>
		<Burger bind:open={menu} />
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem;
		position: sticky;
		background-color: var(--bg);
		top: 0;
		z-index: 5;
	}

	a {
		display: inline-block;
		font-weight: 600;
		text-decoration: none;
		outline: none;

		transition-duration: 0.3s;
		transition-property: color, transform;
		transition-timing-function: ease-out;
	}

	a:visited {
		color: var(--primary);
	}

	a:focus,
	a:hover {
		color: var(--accent);
	}

	a:active {
		transform: translateY(4px);
	}

	#brand {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		font-size: 1.25rem;
	}

	#links {
		display: flex;
		gap: 1.5rem;
	}

	#logo-holder {
		transform: translateY(7px);
	}

	#logo {
		width: 25px;
		height: 25px;
		transition: transform 1s;
	}

	#brand:hover #logo,
	#brand:focus #logo {
		transform: rotate(360deg);
	}

	#left {
		display: flex;
		align-items: baseline;
		gap: 2rem;
	}

	#icons {
		display: flex;
		gap: 1.5rem;
	}

	.toggler {
		cursor: pointer;
	}

	#mobile-buttons {
		display: none;
	}

	@media (max-width: 767px) {
		#icons,
		#links {
			display: none;
		}

		#mobile-buttons {
			display: flex;
			align-items: baseline;
			gap: 1.5rem;
		}

		.toggler {
			transform: translateY(-2px);
		}

		.toggler:active {
			transform: translateY(-2px);
		}
	}
</style>
