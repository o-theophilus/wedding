<script>
	import Section from './_section.svelte';
	import Scroller from './_scroller.svelte';
</script>

<div id="eight">
	<Section bgi="gift" let:bgi>
		<h1 class:v1={bgi != null}>Send Gifts</h1>
		<br />
		<p>Bank Name:</p>
		<h2>Bank</h2>
		<p>Account Number:</p>
		<h2>1234567890</h2>
		<p>Account Name:</p>
		<h2>Man Wife</h2>
		<br />
		<img src="/image/thanks.gif" alt="thanks" />
		<Scroller id="one" text="To Top" />
	</Section>
</div>

<style>
	img {
		width: 100%;
		max-width: 300px;
	}
</style>
