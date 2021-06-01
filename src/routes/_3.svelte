<script>
	import Section from './_comp/section.svelte';
	import CountDown from './_comp/countDown.svelte';
	import {date} from '$lib/store';

	let time = new Date(`${$date} 12:00:00`).getTime();
</script>

<Section bgi="bg2" id="three">
	<img src="/image/f4.gif" alt="date" />
	<br />
	<h1>{$date}</h1>
	<h2>RCCG - Christ The Lord , 1-5 Admiralty Road, Lekki Phase 1</h2>
	<br />
	<br />
	<CountDown {time} />
</Section>

<style>
	* {
		color: var(--fColor1);
	}

	img {
		width: 100%;
		max-width: 300px;
	}
</style>
