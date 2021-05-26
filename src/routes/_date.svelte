<script>
</script>

<div class="section">
	<div class="block">
		<img src="/image/date.gif" alt="date" />
		<h1>December 17th, 2020</h1>
		<h2>RCCG - Christ The Lord , 1-5 Admiralty Road, Lekki Phase 1</h2>
	</div>
</div>

<style>
	.section {
		background-image: url('/image/date.jpg');
		background-color: var(--blendColor);
		background-blend-mode: multiply;

		background-position: center;
		background-size: cover;
		background-attachment: fixed;
		
		color: var(--fColor1);
	}
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		min-height: 100vh;


		margin: auto;
		padding: var(--padding);
	}
	img {
		width: 100%;
		max-width: 200px;
	}
	h1, h2 {
		max-width: 500px;

	}

	@media screen and (min-width: 800px) {
		.block {
			max-width: 800px;
		}
	}
	@media screen and (min-width: 1200px) {
		.block {
			max-width: 1000px;
		}
	}
	@media screen and (min-width: 1500px) {
		.block {
			max-width: 1200px;
		}
	}
</style>
