<script>
	import SVG from './_svg.svelte';

	let myAudio = {};

	let playing = false;
	const togglePlay = () => {
		if (myAudio.paused) {
			myAudio.play();
		} else {
			myAudio.pause();
		}
		playing = !myAudio.paused;
	};
</script>

<div class="btn" on:click={togglePlay} class:playing>
	{#if playing}
		<SVG type="pause" size="20px" />
	{:else}
		<SVG type="play" size="20px" />
	{/if}
</div>
<audio
	bind:this={myAudio}
	src="/music/Francis_And_The_Lights_-_May_I_Have_This_Dance_Remix_Ft_Chance_The_Rapper.mp3"
	preload="auto"
	loop
>
	<track kind="captions" />
</audio>

<style>
	.btn {
		position: fixed;

		bottom: 20px;
		left: 20px;

		z-index: 1;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		background-color: rgba(116, 116, 116, 0.255);
		--size: 50px;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;

		fill: var(--color2);

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.playing {
		fill: var(--color1);
		background-color: var(--color2);
	}
</style>
