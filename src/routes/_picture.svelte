<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let images = [];
	export let selected;


	const chabgePic = (n)=>{

	}
</script>

<div
	class="blocker"
	on:click|self={() => {
		dispatch('closed');
	}}
>
	<div
		class="close"
		on:click|self={() => {
			dispatch('closed');
		}}
	>
		x
	</div>
	<!-- <div
		class="close"
		on:click|self={() => {
			dispatch('closed');
		}}
	>
		p
	</div>
	<div
		class="close"
		on:click={() => {
			dispatch('closed');
		}}
	>
		n
	</div> -->
	<img src="/image/{images[selected].image}.jpg" alt="img" />
	<p>
		{images[selected].note}
	</p>
</div>

<style>
	.blocker {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;

		position: fixed;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;
		z-index: 1;

		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.796);
	}

	.close {
		background-color: red;

		width: 50px;
		height: 50px;
		border-radius: 50%;

		cursor: pointer;
	}
	img {
		width: 100%;
		max-height: 80vh;

		object-fit: cover;
	}
</style>
