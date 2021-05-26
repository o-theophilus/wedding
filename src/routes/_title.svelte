<script>
</script>

<div class="section">
	<div class="block">
		<div class="img">
			<img class="pic" src="/image/title.jpg" alt="title" />
			<img class="flower" src="image/flower1.png" alt="flower1" />
		</div>

		<h1>Man & Wife</h1>
	</div>
</div>

<style>
	.section {
		background-image: url('/image/title_1024.jpg');

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
		gap: 20px;

		min-height: 100vh;
		max-width: 800px;
		margin: auto;

		padding: var(--titleHeight) 0;
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
		top: 12.5%;
		left: 12.5%;

		width: 75%;
		height: 75%;

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
		top: 2.5%;
		left: 2.5%;

		width: 95%;
		height: 95%;

		animation-name: revolve;
		animation-duration: 250s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@media screen and (min-width: 800px) {
		.section {
			--imgMaxWidth: 450px;
		}
	}
	@media screen and (min-width: 1200px) {
		.section {
			background-image: url('/image/title.jpg');
			--imgMaxWidth: 500px;
		}

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
