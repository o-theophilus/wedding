<script>
	import Nav from './nav.svelte';
	import SVG from './svg.svelte';

	import { isMobile, title, miniBar } from '$lib/store.js';

	const scrollTo = (id) => {
		let e = document.querySelector(`#${id}`);
		e.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<header class:mini={$miniBar}>
	<div class="block">
		<div class="logo" on:click={() => scrollTo('one')}>
			<SVG type="logo" size="100%" />
		</div>
		<!-- <img src="/logo.png" alt="logo" on:click={() => scrollTo('one')} /> -->
		<div>
			<h2 on:click={() => scrollTo('one')}>{$title}</h2>
			<p>June 12, 2021</p>
		</div>
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

		background-color: var(--color0);
		backdrop-filter: blur(0);

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.block {
		display: flex;
		align-items: center;

		gap: 20px;
		height: var(--titleHeight2);

		margin: auto;
		padding: 10px;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.logo {
		--size: 80px;
		height: var(--size);
		width: var(--size);

		margin-left: 5px;
		fill: var(--color2);

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	h2 {
		color: var(--color2);
	}
	p {
		font-size: 0.8em;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	h2,
	.logo {
		cursor: pointer;
	}

	.mini {
		background-color: rgba(255, 255, 255, 0.789);
		backdrop-filter: blur(3px);
	}
	.mini .block {
		height: var(--titleHeight);
	}
	.mini .logo {
		--size: 50px;
	}
	.mini p {
		opacity: 0;
		font-size: 0;
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
