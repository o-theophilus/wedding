<script>
	import Section from './_comp/section.svelte';
	import Picture from './_comp/picture.svelte';

	let active = false;
	let images = [
		{ image: 'title', caption: 'This is the first' },
		{ image: 'engage', caption: 'This is not real' },
		{ image: 'date', caption: 'This is not real' },
		{ image: 'gift', caption: 'This is not real' },
		{ image: 'title', caption: 'This is the first' },
		{ image: 'engage', caption: 'This is not real' },
		{ image: 'date', caption: 'This is not real' },
		{ image: 'gift', caption: 'This is not real' },
		{ image: 'title', caption: 'This is the first' }
	];

	let selected;
	const openImage = (i) => {
		selected = i;
		active = true;
	};
</script>

<section id="seven">
	<div class="block">
		<h1>Photo Gallery</h1>

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
</section>

{#if active}
	<Picture {images} {selected} on:closed={() => (active = false)} />
{/if}

<style>
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;

		padding: calc(var(--padding) * 4) var(--padding);
	}
	h1 {
		color: var(--color2);
	}
	.gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 40px;
		width: 100%;
	}

	img {
		--size: calc(100vw - (var(--padding) * 3));
		width: var(--size);
		height: var(--size);

		border-radius: 10px;

		object-fit: cover;

		box-shadow: 0 0 3px var(--color0), 0 0 3px var(--color0);
		cursor: pointer;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	img:hover {
		transform: scale(1.1);
		box-shadow: 0 0 10px var(--color3), 0 0 10px var(--color3);
	}
	@media screen and (min-width: 800px) {
		img {
			--size: calc(100vw / 4);
		}
	}
</style>
