<script>
	import Nav from './nav.svelte';

	import { isMobile, title } from '$lib/store.js';

	const scrollTo = (id) => {
		let e = document.querySelector(`#${id}`);
		e.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<header class="glass">
	<div class="block">
		<img src="/logo.png" alt="logo" on:click={() => scrollTo('one')} />
		<h2 on:click={() => scrollTo('one')}>{$title}</h2>
		{#if !$isMobile}
			<Nav />
		{/if}
	</div>
</header>

<style>
	header {
		width: 100%;
		position: fixed;
		top: 0;
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
