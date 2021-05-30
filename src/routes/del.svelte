<script>
	let win;
	$: console.log(win);
</script>

<div>1111</div>

<svelte:window bind:scrollY={win} />

<style>
	div {
		background-color: red;
		height: 200vh;
	}

	@media screen and (min-width: 500px) {
		div {
			background-color: blue;
		}
	}
</style>
