<script>
	export let id;

	export let bgi = null;
	export let blend = true;

	export let noCenterText = false;

	let innerHeight;
	let outerHeight;

	// $: console.log(innerHeight);
	// $: console.log(outerHeight);
</script>

<svelte:window bind:innerHeight bind:outerHeight />

<section
	{id}
	class:centerText={!noCenterText}
	class:blend={bgi != null && blend}
	style={bgi != null ? `background-image: url('/image/${bgi}.jpg')` : ''}
>
	<!-- <div class="block" style="min-height: {outerHeight}px;"> -->
	<div class="block">
		<slot />
	</div>
</section>

<style>
	section {
		position: relative;

		background-blend-mode: multiply;
		background-position: center;
		background-size: auto 100vh;
		background-attachment: fixed;
	}

	.blend {
		background-color: rgba(0, 0, 0, 0.6);
	}
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		min-height: 100vh;
		
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
