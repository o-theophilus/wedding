<script>
	import Hamburger from './mmb.svelte';

	import { isMobile, miniBar } from '$lib/store.js';
</script>

{#if $isMobile}
	<header class:mini={$miniBar}>
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
	}
	.block {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		height: var(--titleHeight2);

		margin: auto;
		padding: 10px;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.mini .block {
		height: var(--titleHeight);
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
