<script>
	import Section from './_section.svelte';
	import Picture from './_picture.svelte';

	let active = false;
	let images = [
		{ image: 'title', note: 'This is not real' },
		{ image: 'engage', note: 'This is not real' },
		{ image: 'date', note: 'This is not real' },
		{ image: 'gift', note: 'This is not real' },
		{ image: 'title', note: 'This is not real' },
		{ image: 'title', note: 'This is not real' },
		{ image: 'title', note: 'This is not real' },
		{ image: 'title', note: 'This is not real' },
		{ image: 'title', note: 'This is not real' }
	];

	let selected;
	const openImage = (i) => {
		selected = i;
		active = true;
	};
</script>

<div id="six" class="page">
	<Section let:bgi>
		<h1 class:v1={bgi != null}>Photo Gallery</h1>
	</Section>
	<div class="gallery">
		{#each images as img, i}
			<img
				src="/image/{img.image}.jpg"
				alt="img"
				on:click={() => {
					openImage(i);
				}}
			/>
		{/each}
	</div>
</div>
{#if active}
	<Picture {images} {selected} on:closed={() => (active = false)} />
{/if}

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 40px;

		padding-bottom: 80px;
	}
	img {
		--size: calc(100vw - (var(--padding) * 3));
		width: var(--size);
		height: var(--size);
		border-radius: 10px;

		object-fit: cover;

		box-shadow: 0 0 3px black, 0 0 3px var(--color0);
		cursor: pointer;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	img:hover {
		transform: scale(1.1, 1.1);
		box-shadow: 0 0 10px var(--color3), 0 0 10px var(--color3);
	}
	@media screen and (min-width: 800px) {
		img {
			--size: calc(100vw / 4);
		}
	}
</style>
