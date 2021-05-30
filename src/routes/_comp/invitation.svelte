<script>
	import SVG from './svg.svelte';
</script>

<div class="details">
	<div class="sec">
		<img src="/image/pic4.jpg" alt="couple" />
		<svg><SVG size="70px" type="ceremony" /></svg>
		<h1>The Ceremony</h1>
		<p>
			THURSDAY 17TH DECEMBER
			<br />
			12 NOON
		</p>
		<p>
			<strong> RCCG - CHRIST THE LORD PARISH </strong>
			<br />
			1-5 Admiralty Road, Lekki Phase 1
		</p>
	</div>

	<div class="sec">
		<img src="/image/pic5.jpg" alt="couple" />
		<svg><SVG size="70px" type="reception" /></svg>
		<h1>The Reception</h1>
		<p>
			THURSDAY 17TH DECEMBER
			<br />
			2PM
		</p>
		<p>
			<strong> VIRGIN ROSE RESORT </strong>
			<br />
			Plot 1231A Bishop Oluwole Street, Victoria Island
		</p>
	</div>

	<div class="sec">
		<img src="/image/pic6.jpg" alt="couple" />
		<svg><SVG size="70px" type="party" /></svg>
		<h1>The After Party</h1>
		<p>THURSDAY 17TH DECEMBER</p>
		<p>
			<strong> VIRGIN ROSE RESORT </strong>
			<br />
			Plot 1231A Bishop Oluwole Street, Victoria Island
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
	h1 {
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
