<script>
	import SVG from './svg.svelte';
	import { date } from '$lib/store.js';
</script>

<div class="details">
	<div class="sec">
		<img src="/image/pic5.jpg" alt="couple" />
		<svg><SVG size="70px" type="ceremony" /></svg>
		<h1>The Ceremony</h1>
		<p>
			Saturday {$date}
			<br />
			12pm
		</p>
		<p>
			<strong> CATHOLIC CHURCH OF DEVINE MERCY </strong>
			<br />
			Omega Estate, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
		</p>
	</div>

	<div class="sec">
		<img src="/image/pic1.jpg" alt="couple" />
		<svg><SVG size="70px" type="reception" /></svg>
		<h1>The Reception</h1>
		<p>
			Saturday {$date}
			<br />
			2pm
		</p>
		<p>
			<strong> LANDMARK CENTRE </strong>
			<br />
			Plot 3 & 4 Water Corporation Road, Victoria Island Annex, Lagos, Nigeria.
		</p>
	</div>

	<div class="sec">
		<img src="/image/pic7.jpg" alt="couple" />
		<svg><SVG size="70px" type="party" /></svg>
		<h1>The After Party</h1>
		<p>Saturday {$date}</p>
		<p>
			<strong> LANDMARK CENTRE </strong>
			<br />
			Plot 3 & 4 Water Corporation Road, Victoria Island Annex, Lagos, Nigeria.
		</p>
	</div>
</div>

<style>
	.details {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
	img {
		width: 300px;
		height: 300px;

		border-radius: 50%;
		object-fit: cover;
	}
	SVG {
		width: 70px;
		height: 70px;

		fill: var(--color2);
	}
	h1,
	strong {
		color: var(--color2);
	}
	.sec {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 20px;
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
