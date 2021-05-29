<script>
	export let bgi = null;
	export let blend = true;

	export let noCenterText = false;
</script>

<section
	class:centerText={!noCenterText}
	class:bgi={bgi != null}
	class:blend={bgi != null && blend}
	style={bgi != null ? `background-image: url('/image/${bgi}.jpg')` : ''}
	>
<!-- <img src="/image/{bgi}.jpg" alt="img"> -->
	<div class="block">
		<slot {bgi} />
	</div>
</section>

<style>
	section {
		position: relative;

		background-blend-mode: multiply;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}
	.bgi {
		color: var(--fColor1);
	}
	/* img{
		position: static;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;

		object-fit: cover;
	} */
	.blend {
		background-color: var(--blendColor);
	}
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		margin: auto;
		padding: calc(var(--padding) * 4) var(--padding);
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
