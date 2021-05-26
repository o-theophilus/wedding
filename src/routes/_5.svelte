<script>
	import Section from './_section.svelte';
</script>

<div id="five">
	<Section bgi="engage" let:bgi>
		<img src="/image/flower5.gif" alt="flower" />
		<h1 class:v1={bgi != null}>The day they got engaged</h1>
		<p>
			He proposed on the 23rd of May 2020. It was an intimate proposal at his house immediately
			after the lockdown ease. Cake, hanging balloons, petals and floating candles. He gave a
			beautiful speech, got on one knee and asked me to marry him! I said ‘YES OF COURSE’ lol and
			friends that were hidden in the room came out filming the moment. It was a lovely proposal and
			I am truly excited about this beautiful journey because I know that this is God’s will. .
		</p>
	</Section>
</div>

<style>
	img {
		width: 100%;
		max-width: 500px;
	}
</style>
