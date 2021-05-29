<script>
	import Section from './_section.svelte';
	import SVG from './_svg.svelte';
</script>

<div id="four" class="page">
	<Section let:bgi>
		<img src="/image/flower4.gif" alt="flower" />
		<h1 class:v1={bgi != null}>Wedding Details</h1>
		<h2>When & Where</h2>
		<p>
			Our reception will be held at the <strong>Virgin Rose Resort</strong>. Located at Plot 1231A
			Bishop Oluwole Street, Victoria Island. It provides a beautiful and colorful environment for
			an event of this class. Keeping guest in the wormth of comfort.
		</p>
		<br />
		<br />
		<br />
		<div class="details">
			<div class="sec">
				<img src="/image/title.jpg" alt="couple" />
				<svg><SVG type="ceremony" /></svg>
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
				<img src="/image/title.jpg" alt="couple" />
				<svg><SVG type="reception" /></svg>
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
				<img src="/image/title.jpg" alt="couple" />
				<svg><SVG type="party" /></svg>
				<h1>The After Party</h1>
				<p>THURSDAY 17TH DECEMBER</p>
				<p>
					<strong> VIRGIN ROSE RESORT </strong>
					<br />
					Plot 1231A Bishop Oluwole Street, Victoria Island
				</p>
			</div>
		</div>
		<br />
		<p class="rsvp">
			<br />
			<br />
			<strong> R.S.V.P </strong>
			<br />
			Victor: 08127001468
			<br />
			Rume:08136204253
		</p>
	</Section>
</div>

<style>
	img {
		width: 100%;
		max-width: 500px;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
	.details img {
		width: 300px;
		height: 300px;

		border-radius: 50%;
		object-fit: cover;
	}
	SVG {
		width: 50px;
		height: 50px;

		fill: var(--color2);
	}
	.sec {
		display: flex;
		flex-direction: column;
		align-items: center;

		/* justify-content: center; */
		gap: 20px;
	}
	.rsvp {
		border-top: 2px solid var(--color2);
	}
	@media screen and (min-width: 1200px) {
		.details {
			flex-direction: row;
			gap: 50px;
		}
	}
	@media screen and (min-width: 1500px) {
		.details {
			gap: 150px;
		}
	}
</style>
