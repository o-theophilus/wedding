<script>
	import { createEventDispatcher } from 'svelte';
	import SVG from '$lib/svg.svelte';

	const dispatch = createEventDispatcher();

	export let images = [];
	export let selected;

	const chabgePic = (n) => {
		selected = selected + n;
		if (selected < 0) {
			selected = images.length - 1;
		} else if (selected > images.length - 1) {
			selected = 0;
		}
	};
</script>

<div
	class="blocker glass"
	on:click|self={() => {
		dispatch('closed');
	}}
>
	<div
		class="btn close"
		on:click={() => {
			dispatch('closed');
		}}
	>
		<SVG type="close" size="30px" />
	</div>

	<div class="img">
		<div
			class="btn nav prev"
			on:click={() => {
				chabgePic(-1);
			}}
		>
			<SVG type="prev" size="30px"  />
		</div>

		<div
			class="btn nav next"
			on:click={() => {
				chabgePic(+1);
			}}
		>
			<SVG type="next" size="30px"  />
		</div>
		<img src="/image/{images[selected].image}.jpg" alt="img" />
	</div>

	<p>
		{images[selected].caption}
	</p>
</div>

<style>
	.blocker {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;

		position: fixed;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.btn {
		--btnSize: 60px;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: rgba(255, 255, 255, 0.2);

		width: var(--btnSize);
		height: var(--btnSize);
		border-radius: 50%;

		cursor: pointer;
		fill: rgba(0, 0, 0, 0.4);
		/* opacity: 0.2; */

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.btn:hover {
		transform: scale(1.3);
		fill: var(--color3);
		/* opacity: 1; */
	}
	.nav {
		position: absolute;
		top: calc(50% - (var(--btnSize) / 2));
	}
	.prev {
		left: 20px;
	}
	.next {
		right: 20px;
	}
	.img {
		position: relative;
		max-height: calc(100% - 200px);
	}
	img {
		width: 100%;
		height: 100%;

		object-fit: contain;
	}
</style>
