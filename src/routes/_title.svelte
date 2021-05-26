<script>
</script>

<div class="section">
	<div class="block">
		<h1>Man & Wife</h1>
		<br />
		<br />
		<div class="img">
			<img class="pic" src="/images/title.jpg" alt="" />
			<img class="flower" src="images/flower1.png" alt="" />
		</div>
	</div>
</div>

<style>
	.section {
		background-image: url('/images/title.jpg');

		background-position: center;
		background-size: cover;
		background-attachment: fixed;

		--imagePad: 60px;
		--imgMaxWidth: 400px;
	}
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;

		min-height: 100vh;
		margin: auto;

		padding-bottom: var(--titleHeight);
		padding-top: calc(var(--titleHeight) * 2);
	}
	h1 {
		text-align: center;
	}
	.img {
		position: relative;

		width: calc(100vw - var(--imagePad));
		height: calc(100vw - var(--imagePad));

		max-width: var(--imgMaxWidth);
		max-height: var(--imgMaxWidth);

		margin: 0 auto;

		overflow: hidden;
	}
	.pic {
		position: absolute;
		top: var(--imagePad);
		left: var(--imagePad);

		width: calc(100% - var(--imagePad));
		height: calc(100% - var(--imagePad));

		object-fit: cover;
		border-radius: 50%;
	}
	@keyframes revolve {
		from {
			transform: rotateZ(0);
		}
		to {
			transform: rotateZ(360deg);
		}
	}
	.flower {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		animation-name: revolve;
		animation-duration: 60s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@media screen and (min-width: 800px) {
		/* .section {
			--imgMaxWidth: 400px;
		} */
		.block {
			max-width: 800px;
		}
	}
	@media screen and (min-width: 1200px) {
		.section {
			--imgMaxWidth: 500px;
		}

		.block {
			max-width: 1000px;
		}
	}
	@media screen and (min-width: 1500px) {
		/* .section {
			--imgMaxWidth: 600px;
		} */
		.block {
			max-width: 1200px;
		}
	}
</style>
