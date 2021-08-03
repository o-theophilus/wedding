<script>
	import { openMobileMenu } from '$lib/store.js';

	import Nav from './nav.svelte';
</script>

<div
	class="blocker glass"
	class:active={$openMobileMenu}
	on:click={() => {
		$openMobileMenu = !$openMobileMenu;
	}}
>
	<Nav />
</div>

<style>
	.blocker {
		display: none;
		position: fixed;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;
	}
	.active {
		display: block;
	}
</style>
