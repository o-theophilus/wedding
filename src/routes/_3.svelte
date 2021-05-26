<script>
	import Section from './_section.svelte';
</script>

<div id="three">
	<Section bgi="date" let:bgi>
		<img src="/image/date.gif" alt="date" />
		<br />
		<h1 class:v1={bgi != null}>December 17th, 2020</h1>
		<h2>RCCG - Christ The Lord , 1-5 Admiralty Road, Lekki Phase 1</h2>
	</Section>
</div>

<style>
	img {
		width: 100%;
		max-width: 300px;
	}
</style>
