<div class="section">
	<div class="block">
		<img src="/image/title.jpg" class="icon" alt="" />
		<h1>Man & Wife</h1>
		<div class="menu">iii</div>
	</div>
</div>

<style>
	.section {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;

		backdrop-filter: blur(3px);
	}
	.block {
		display: flex;
		align-items: center;

		gap: 20px;
		height: var(--titleHeight);

		/* max-width: 600px; */

		margin: auto;
		padding: 10px;
	}

	img {
		height: 100%;
		/* border-radius: 50%; */
	}
	h1 {
		color: var(--color1);
	}
	.menu {
		margin-left: auto;
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
