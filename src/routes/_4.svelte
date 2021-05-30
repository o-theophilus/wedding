<script>
	import Section from './_comp/section.svelte';
	import IV from './_comp/invitation.svelte';
</script>

<Section id="four">
	<img src="/image/flower4.gif" alt="flower" />
	<h1>Wedding Details</h1>
	<h2>When & Where</h2>
	<p>
		Our reception will be held at the <strong>Virgin Rose Resort</strong>. Located at Plot 1231A
		Bishop Oluwole Street, Victoria Island. It provides a beautiful and colorful environment for an
		event of this class. Keeping guest in the wormth of comfort.
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
