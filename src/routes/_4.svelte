<script>
	import Section from './_section.svelte';
</script>

<div id="four">
	<Section let:bgi>
		<img src="/image/flower4.gif" alt="flower" />
		<h1 class:v1={bgi != null}>Wedding Details</h1>
		<h2>When & Where</h2>
		<p>
			Our reception will be held at the <strong>Virgin Rose Resort</strong>. Located at Plot 1231A
			Bishop Oluwole Street, Victoria Island. It provides a beautiful and colorful environment for
			an event of this class. Keeping guest in the wormth of comfort.
		</p>
	</Section>
</div>

<style>
	img {
		width: 100%;
		max-width: 500px;
	}
</style>
