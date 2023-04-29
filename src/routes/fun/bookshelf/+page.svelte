<script>
	export let data;
</script>

<svelte:head>
	<title>Doga Tekin | Bookshelf</title>
</svelte:head>

<h1>Bookshelf</h1>

{#each data.bookshelf as { year, books }}
	<h2>{year}</h2>
	<ul>
		{#each books as { title, author, image }}
			<li>{title} - {author}</li>
		{/each}
	</ul>
{/each}
