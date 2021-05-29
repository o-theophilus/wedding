<script>
	import { createEventDispatcher } from 'svelte';
	import SVG from './_svg.svelte';

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
	class="blocker"
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
		<SVG type="close" size="40px"/>
	</div>
	<div class="img">
		<div
			class="btn nav prev"
			on:click={() => {
				chabgePic(-1);
			}}
		>
			<SVG type="prev" />
		</div>
		<div
			class="btn nav next"
			on:click={() => {
				chabgePic(+1);
			}}
		>
			<SVG type="next" />
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

		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.796);
		
	}
	
	.btn {
		--btnSize: 80px;
		
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: rgba(255, 255, 255, 0.2);
		
		width: var(--btnSize);
		height: var(--btnSize);
		border-radius: 50%;
		
		cursor: pointer;
		fill: rgba(0, 0, 0, 0.213);
		
		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.btn:hover {
		transform: scale(1.5);
		/* background-color: var(--color2); */
		fill: var(--color3);
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
	/* .close {
		fill: var(--color3);
	} */
	.img {
		position: relative;

		/* width: 100%; */
	}
	img {
		width: 100%;
		max-width: 800px;
		max-height: 800px;

		object-fit: cover;
	}
</style>
