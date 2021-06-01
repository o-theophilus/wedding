<script>
	import Section from './_comp/section.svelte';
	import IV from './_comp/invitation.svelte';
</script>

<Section id="four">
	<img src="/image/f5.gif" alt="flower" />
	<h1>Wedding Details</h1>
	<h2>When & Where</h2>
	<p>
		Our reception will be held at the <strong>LANDMARK CENTRE</strong>. Located at Plot 3 & 4 Water
		Corporation Road, Victoria Island Annex, Lagos, Nigeria. It provides a beautiful and colorful
		environment for an event of this class. Keeping guest in the wormth of comfort.
	</p>
	<br />
	<br />
	<br />

	<IV />
</Section>

<style>
	img {
		width: 100%;
		max-width: 500px;
	}
	h1 {
		color: var(--color2);
	}
</style>
