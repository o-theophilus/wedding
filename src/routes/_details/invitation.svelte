<script>
	import SVG from '$lib/svg.svelte';

	export let img = "";
	export let svg = "";
	export let title = '';
	export let _date = '';
	export let time = '';
	export let venue = '';
	export let address = '';
</script>

<div class="sec">
	<img src="/image/{img}.jpg" alt="couple" />
	<svg><SVG size="70px" type={svg} /></svg>
	<h1>{title}</h1>
	<p>
		{_date}
		<br />
		{time}
	</p>
	<p>
		<strong> {venue} </strong>
		<br />
		{address}
	</p>
</div>

<style>
	.sec {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 20px;
	}
	img {
		width: 300px;
		height: 300px;

		border-radius: 50%;
		object-fit: cover;
	}
	SVG {
		width: 70px;
		height: 70px;

		fill: var(--color2);
	}
	h1,
	strong {
		color: var(--color2);
	}
</style>
