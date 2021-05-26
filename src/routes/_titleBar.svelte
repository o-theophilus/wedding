<script>
	import Hamburger from './_mmb.svelte';
</script>

<div class="section">
	<div class="block">
		<img src="/image/title.jpg" class="icon" alt="" />
		<h2>Man & Wife</h2>
		<div class="menu">
			<Hamburger />
		</div>
	</div>
</div>

<style>
	.section {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;

		backdrop-filter: blur(3px);
		color: var(--color1);
	}
	.block {
		display: flex;
		align-items: center;

		gap: 20px;
		height: var(--titleHeight);

		margin: auto;
		padding: 10px;
	}

	img {
		height: 100%;
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
