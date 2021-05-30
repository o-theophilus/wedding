<script>
	import { openMobileMenu } from '$lib/store.js';
</script>

<div
	class="humburger"
	class:openMobileMenu={$openMobileMenu}
	on:click={() => {
		$openMobileMenu = !$openMobileMenu;
	}}
>
	<div class=" one" />
	<div class=" two" />
	<div class=" three" />
</div>

<style>
	.humburger {
		--buttonSize: 50px;

		--barHeight: calc(var(--buttonSize) / 10);
		--barWidth: calc(var(--buttonSize) - var(--buttonSize) / 5);
		--barPos: calc(var(--buttonSize) / 5);
		--barPos2: calc(var(--buttonSize) / 8);
		--barCenter: calc(var(--buttonSize) / 2 - var(--barHeight) / 2);

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;

		width: var(--buttonSize);
		height: var(--buttonSize);

		cursor: pointer;
		pointer-events: auto;

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}

	.humburger div {
		position: absolute;

		height: var(--barHeight);
		width: var(--barWidth);

		border-radius: calc(var(--barHeight) / 2);
		background-color: var(--color3);

		/* box-shadow: 0 0 3px var(--color3), 0 0 3px var(--color3); */

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}

	.one {
		top: var(--barPos);
	}
	.three {
		bottom: var(--barPos);
	}

	.humburger:hover:not(.openMobileMenu) .one {
		top: var(--barPos2);
	}
	.humburger:hover:not(.openMobileMenu) .three {
		bottom: var(--barPos2);
	}

	.openMobileMenu .one {
		top: var(--barCenter);
	}
	.openMobileMenu .three {
		bottom: var(--barCenter);
	}
	.openMobileMenu .one,
	.openMobileMenu .three {
		transform: rotate(45deg);
	}
	.openMobileMenu .two {
		transform: rotate(-45deg);
	}
</style>
