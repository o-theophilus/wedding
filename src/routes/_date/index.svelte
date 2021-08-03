<script>
	import Section from '$lib/section.svelte';
	import CountDown from './countDown.svelte';
	import { date } from '$lib/store';

	let time = new Date(`${$date} 12:00:00`).getTime();
</script>

<Section bgi="bg2" id="three">
	<img src="/image/f4.gif" alt="date" />
	<br />
	<h1>{$date}</h1>
	<h2>CATHOLIC CHURCH OF DEVINE MERCY.</h2>
	<br />
	<br />
	<p>Omega Estate, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
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
