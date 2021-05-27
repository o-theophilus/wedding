<script>
	import { onMount } from 'svelte';

	import '../app.css';
	import { isMobile, openMobileMenu } from '$lib/store.js';

	const run = () => {
		$isMobile = document.documentElement.clientWidth < 800;
	};

	$: $openMobileMenu = $isMobile == false ? false : $openMobileMenu;

	onMount(() => {
		window.addEventListener('resize', run);
		run();
	});
</script>

<slot />
