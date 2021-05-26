<script>
</script>

<div class="section">
	<div class="block">
		<h1>Send Gifts</h1>

		<h2>
			Bank Name: GT Bank
			<br />

			Account Number: 0051874152
			<br />

			Account Name: Davies Ebhomenye
		</h2>
		<br />
		<img src="/image/thanks.gif" alt="thanks" />
	</div>
</div>

<style>
	.section {
		background-image: url('/image/gift.jpg');
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
		max-width: 300px;
	}
	h1,
	h2 {
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
