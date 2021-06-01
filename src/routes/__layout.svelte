<script>
	import '../app.css';
	import { isMobile, openMobileMenu, miniBar } from '$lib/store.js';

	let innerWidth;
	let scrollY;
	$: $isMobile = innerWidth < 800;
	$: $miniBar = scrollY > 100;
	$: $openMobileMenu = !$isMobile ? false : $openMobileMenu;
</script>

<svelte:window bind:innerWidth bind:scrollY />
<slot />
