<script>
	import Section from '$lib/section.svelte';
	import IV from './invitation.svelte';

	import { date } from '$lib/store.js';
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

	<div class="details">
		<IV
			img="pic5"
			svg="ceremony"
			title="The Ceremony"
			_date="Saturday {$date}"
			time="12pm"
			venue="CATHOLIC CHURCH OF DEVINE MERCY."
			address="Omega Estate, Admiralty Way, Lekki Phase 1, Lagos, Nigeria."
		/>
		<IV
			img="pic1"
			svg="reception"
			title="The Reception"
			_date="Saturday {$date}"
			time="2pm"
			venue="LANDMARK CENTRE."
			address="Plot 3 & 4 Water Corporation Road, Victoria Island Annex, Lagos, Nigeria."
		/>
		<IV
			img="pic7"
			svg="party"
			title="The After Party"
			_date="Saturday {$date}"
			venue="LANDMARK CENTRE."
			address="Plot 3 & 4 Water Corporation Road, Victoria Island Annex, Lagos, Nigeria."
		/>
	</div>
</Section>

<style>
	img {
		width: 100%;
		max-width: 500px;
	}
	h1 {
		color: var(--color2);
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
	@media screen and (min-width: 1200px) {
		.details {
			flex-direction: row;
			gap: 40px;
		}
	}
	@media screen and (min-width: 1500px) {
		.details {
			gap: 140px;
		}
	}
</style>
