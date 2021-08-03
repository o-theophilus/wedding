<script context="module">
	export function load() {
		return {};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	browser && goto('/');
</script>
