<script>
	import Section from './_comp/section.svelte';
	import CountDown from './_comp/countDown.svelte';

	let time = new Date('June 12, 2021 10:00:00').getTime();
</script>

<Section bgi="bg2" id="three">
	<img src="/image/date.gif" alt="date" />
	<br />
	<h1>June 12th, 2021</h1>
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
