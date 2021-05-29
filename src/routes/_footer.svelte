<footer>
	<div class="block">
		<p>
			Made with <span>❤</span> by
			<a rel="external" href="https://theophilus.website/" target="_blank"
				><strong>Theophilus</strong></a
			>
		</p>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color3);
		color: var(--color1);
	}
	.block {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: auto;

		height: 40px;

		padding: 0 var(--padding);
	}
	p {
		text-align: right;
	}
	a {
		color: var(--color1);
	}
	span {
		color: red;
	}
	@media screen and (min-width: 800px) {
		.block {
			max-width: 800px;
		}
	}
	@media screen and (min-width: 1200px) {
		.block {
			max-width: 1000px;
		}
	}
	@media screen and (min-width: 1500px) {
		.block {
			max-width: 1200px;
		}
	}
</style>
