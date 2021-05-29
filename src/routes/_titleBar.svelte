<script>
	import Nav from './_nav.svelte';

	import { isMobile, title } from '$lib/store.js';

	const scrollTo = (id) => {
		let e = document.querySelector(`#${id}`);
		e.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<header>
	<div class="block">
		<img src="/image/title.jpg" class="icon" alt="logo" on:click={() => scrollTo('one')} />
		<h2 on:click={() => scrollTo('one')}>{$title}</h2>
		{#if !$isMobile}
			<Nav />
		{/if}
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;

		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.789);
		color: var(--color3);
		/* text-shadow: 0 0 3px black, 0 0 3px black; */
	}
	.block {
		display: flex;
		align-items: center;

		gap: 20px;
		height: var(--titleHeight);

		margin: auto;
		padding: 10px;
	}

	img {
		height: 100%;
	}

	h2,
	img {
		cursor: pointer;
	}

	@media screen and (min-width: 800px) {
		.block {
			max-width: 800px;
		}
	}
	@media screen and (min-width: 1200px) {
		.block {
			max-width: 1000px;
		}
	}
	@media screen and (min-width: 1500px) {
		.block {
			max-width: 1200px;
		}
	}
</style>
