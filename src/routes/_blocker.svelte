<script>
	import { openMobileMenu } from '$lib/store.js';

	import Nav from './_nav.svelte';
</script>

<div
	class="blocker"
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
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		background-color: rgba(0, 0, 0, 0.796);
	}
	.active {
		display: block;
	}
</style>
