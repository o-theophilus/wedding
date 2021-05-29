<script>
	import Hamburger from './_mmb.svelte';

	import { isMobile } from '$lib/store.js';
</script>

{#if $isMobile}
	<header>
		<div class="block">
			<Hamburger />
		</div>
	</header>
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;

		pointer-events: none;
		color: var(--color1);
		text-shadow: 0 0 3px black, 0 0 3px black;
	}
	.block {
		display: flex;
		align-items: center;

		gap: 20px;
		height: var(--titleHeight);

		margin: auto;
		padding: 10px;
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
