<script>
	import { days } from '$lib/store.js';

	// let days;
	let hours;
	let minutes;
	let seconds;
	let distance;

	export let time = new Date('Dec 31, 2021 00:00:00').getTime();

	const x = () => {
		let now = new Date().getTime();
		distance = time - now;

		$days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
	};
	setInterval(x, 1000);
</script>

<div class="count">
	{#if distance > 0}
		{#if $days > 0}
			<div class="grp">
				<h2>{$days}</h2>
				<p>Day{$days > 1 ? 's' : ''}</p>
			</div>
		{/if}
		{#if hours > 0}
			<div class="grp">
				<h2>{hours}</h2>
				<p>Hour{hours > 1 ? 's' : ''}</p>
			</div>
		{/if}
		{#if minutes > 0}
			<div class="grp">
				<h2>{minutes}</h2>
				<p>Minute{minutes > 1 ? 's' : ''}</p>
			</div>
		{/if}
		<div class="grp">
			<h2>{seconds}</h2>
			<p>Second{seconds > 1 ? 's' : ''}</p>
		</div>
	{:else}
		<h2>EXPIRED</h2>
	{/if}
</div>

<style>
	.count {
		display: flex;
		gap: 20px;

		color: var(--fColor1);
	}

	h2 {
		font-size: 3em;
	}
</style>
