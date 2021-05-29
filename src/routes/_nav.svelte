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
	<div class="link" on:click={() => scrollTo('seven')}>RSVP</div>
	<div class="link" on:click={() => scrollTo('five')}>Engaged</div>
	<div class="link" on:click={() => scrollTo('six')}>Photo</div>
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

		color: var(--color3);
		/* text-shadow: 0 0 3px black, 0 0 3px black; */

		cursor: pointer;

		font-size: 2.5em;
		font-family: font2;
		
		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}
	.link:hover {
		color: var(--color2);
	}
	.opt {
		font-size: 3em;
		font-family: font1;
		font-weight: bolder;
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
		font-size: 1em;
	}
	.notMobile .opt {
		display: none;
	}
</style>
