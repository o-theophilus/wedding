<script>
	const scrollTo = (id) => {
		let e = document.querySelector(`#${id}`);
		e.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<div class="nav">
	<div class="link" on:click={() => scrollTo('two')}>Our Story</div>
	<div class="link" on:click={() => scrollTo('three')}>Date</div>
	<div class="link" on:click={() => scrollTo('four')}>Details</div>
	<div class="link" on:click={() => scrollTo('five')}>Engaged</div>
	<div class="link" on:click={() => scrollTo('six')}>Photos</div>
	<div class="link" on:click={() => scrollTo('seven')}>RSVP</div>
	<div class="link" on:click={() => scrollTo('eight')}>Gift</div>
</div>

<style>
	.nav {
		display: none;
		justify-content: flex-end;
		margin-left: auto;

		height: 100%;
	}
	.link {
		display: flex;

		height: 100%;

		padding: 0 10px;

		justify-content: center;
		align-items: center;

		cursor: pointer;
	}

	@media screen and (min-width: 800px) {
		.nav {
			display: flex;
		}
	}
</style>
