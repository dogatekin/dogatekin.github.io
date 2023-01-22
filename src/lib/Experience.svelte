<script>
	export let name, lightlogo, darklogo, dates, location, role, gpa;
</script>

<div class="large">
	<div class="experience">
		<div class="logodates">
			<div class="dates">{dates}</div>
			<img class="logo light-logo" src={lightlogo} alt="Experience Logo" />
			<img class="logo dark-logo" src={darklogo} alt="Experience Logo" />
		</div>
		<div class="information">
			<div class="metadata">
				<div class="namelocation">
					<div>{name}</div>
					<div>{location}</div>
				</div>
				<div class="rolegpa">
					<div>{role}</div>
					<div>{@html gpa}</div>
				</div>
			</div>
			<slot />
		</div>
	</div>
</div>

<div class="small">
	<div class="experience">
		<div class="logodates">
			<img class="logo light-logo" src={lightlogo} alt="Experience Logo" />
			<img class="logo dark-logo" src={darklogo} alt="Experience Logo" />
			<div class="dates">{dates}</div>
		</div>
		<div class="information">
			<div class="metadata">
				<div class="namelocation">
					<div>{name}</div>
					<div>{location}</div>
				</div>
				<div class="rolegpa">
					<div>{role}</div>
					<div>{@html gpa}</div>
				</div>
			</div>
			<slot />
		</div>
	</div>
</div>

<style>
	.large .logo {
		width: 5rem;
	}

	.experience {
		margin-bottom: 2rem;
	}

	.large .experience {
		display: flex;
		align-items: flex-start;
	}

	.large .logodates {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.large .information {
		flex: 3;
	}

	.namelocation {
		display: flex;
		justify-content: space-between;
		font-weight: bold;
	}

	.large .rolegpa {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
	}

	.dates {
		font-style: italic;
	}

	.information :global(ul) {
		padding-left: 1rem;
	}

	.small {
		display: none;
	}

	.small .logo {
		max-width: 3rem;
		height: 100%;
		margin: auto 0;
	}

	.small .experience {
		display: flex;
		flex-direction: column;
	}

	.small .logodates {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.small .rolegpa {
		font-weight: 600;
	}

  .dark-logo {
    display: block;
  }

  .light-logo {
    display: none;
  }

	:global(.light-theme) .dark-logo {
		display: none;
	}

  :global(.light-theme) .light-logo {
		display: block;
	}

	@media (max-width: 767px) {
		.large {
			display: none;
		}

		.small {
			display: block;
		}
	}
</style>
