<script>
	import '../app.css';
	import { isMobile, openMobileMenu } from '$lib/store.js';

	let innerWidth;
	$: $isMobile = innerWidth < 800;
	$: $openMobileMenu = !$isMobile ? false : $openMobileMenu;
</script>

<svelte:window bind:innerWidth />
<slot />
