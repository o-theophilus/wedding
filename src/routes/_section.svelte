<script>
	export let bgi = null;
	export let blend = true;
</script>

<div
	class="section"
	class:bgi={bgi != null}
	class:blend={bgi != null && blend}
	style="background-image: url('/image/{bgi}.jpg')"
>
	<div class="block">
		<slot {bgi} />
	</div>
	<!-- <slot name="bottom" /> -->
</div>

<style>
	.section {
		position: relative;

		background-blend-mode: multiply;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}
	.bgi {
		color: var(--fColor1);
	}
	.blend {
		background-color: var(--blendColor);
	}
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		/* min-height: 100vh; */

		margin: auto;
		padding: var(--padding);
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
