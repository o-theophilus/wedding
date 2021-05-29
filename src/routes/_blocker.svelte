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
		left: 0;
		top: 0;
		/* bottom: 0;
		right: 0; */

		width: 100%;
		height: 100%;
		
		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.796);
	}
	.active {
		display: block;
	}
</style>
