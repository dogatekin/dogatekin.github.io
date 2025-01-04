<script>
	let {
		link,
		title,
		desc,
		date,
		tags
	} = $props();
</script>

<div class="post">
	<h2>
		<a href={link}>{title}</a>
	</h2>
	<p>
		{desc}
	</p>
	<div class="metadata">
		<span class="tags">
			{#each tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</span>
		<span class="date">{date}</span>
	</div>
</div>

<style>
	.metadata {
		display: flex;
		justify-content: space-between;
	}

	.tag {
		font-size: 0.8rem;
		background-color: var(--tag-bg);
		padding: 0.2rem;
		border-radius: 0.3rem;
		margin-right: 0.5rem;
	}

  .post {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>
