<script>
	import { isMobile, title } from '$lib/store.js';

	const scrollTo = (id) => {
		let e = document.querySelector(`#${id}`);
		e.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<div class="nav" class:notMobile={!$isMobile}>
	<div class="link opt" on:click={() => scrollTo('one')}>{$title}</div>
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
		position: absolute;
		top: 100px;
		right: 20px;
	}

	.link {
		padding: 5px 0;

		text-align: right;

		color: var(--color1);
		text-shadow: 0 0 3px black, 0 0 3px black;

		cursor: pointer;
	}
	.opt {
		font-size: 1.5em;
		font-family: font1;
	}
	.notMobile {
		position: static;

		display: flex;
		margin-left: auto;

		height: 100%;
	}
	.notMobile .link {
		display: flex;
		height: 100%;

		padding: 0 10px;

		justify-content: center;
		align-items: center;

		cursor: pointer;
	}
	.notMobile .opt {
		display: none;
	}
</style>
