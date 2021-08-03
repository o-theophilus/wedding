<script>
	import { browser } from '$app/env';
	import { setCookie, getCookie } from '$lib/cookie.js';

	import SVG from './_comp/svg.svelte';
	import { template, attend, meal } from './_comp/template.js';
	import { days } from '$lib/store.js';

	let formDaysExpire = 10;

	let form = {};
	let err = {};
	let sent = false;

	if (browser) {
		sent = getCookie('rsvp');
	}

	const validate = () => {
		err = {};
		if (!form.name) {
			err.name = 'Please enter your name';
		}

		if (!form.email) {
			err.email = 'Please enter an email address';
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			err.email = 'Please enter a valid email address';
		}

		if (!form.phone) {
			err.phone = 'Please enter your phone number';
		}

		if (!form.attend) {
			err.attend = 'Please select an option';
		}

		if (form.attend == attend[0] && !form.meal) {
			err.meal = 'Please select an option';
		}

		// if (form.msg === '') {
		// 	err.msg = 'Please enter a message';
		// }

		if (Object.keys(err).length === 0) {
			submit();
		}
	};

	const submit = async () => {
		const resp = await fetch('https://formspree.io/f/xknkjbpb', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		});

		const data = await resp.json();

		if (resp.ok) {
			sent = true;
			setCookie('rsvp', 'true', 365);
		} else {
			err.form = data.error;
		}
	};

	let store;
</script>

<section id="five" noCenterText>
	<div class="block">
		<h1>RSVP</h1>
		<div class="rsvp">
			<p><strong>Yinka Oladayo</strong>: 08012345678</p>
		</div>
		<br />
		{#if $days >= formDaysExpire}
			{#if !sent}
				<form on:submit|preventDefault={validate}>
					<div class="inputGroup">
						<label for="name">Name</label>
						<input placeholder="e.g. John Doe" type="text" id="name" bind:value={form.name} />

						{#if err.name}
							<p class="err">
								{err.name}
							</p>
						{/if}
					</div>

					<div class="inputGroup">
						<label for="phone">Phone Number</label>
						<input placeholder="e.g. 08012345678" type="text" id="phone" bind:value={form.phone} />

						{#if err.phone}
							<p class="err">
								{err.phone}
							</p>
						{/if}
					</div>

					<div class="inputGroup">
						<label for="email">E-mail (Optional)</label>
						<input placeholder="e.g. john@doe.com" type="text" id="email" bind:value={form.email} />

						{#if err.email}
							<p class="err">
								{err.email}
							</p>
						{/if}
					</div>

					<div class="inputGroup">
						<p>Will you attend?</p>
						{#each attend as value, i}
							<br />
							<input type="radio" bind:group={form.attend} id="attend{i}" {value} />
							<label for="attend{i}">{value}</label>
						{/each}
						{#if err.attend}
							<p class="err">
								{err.attend}
							</p>
						{/if}
					</div>

					{#if form.attend != attend[1]}
						<div class="inputGroup">
							<p>Meal Preference</p>
							{#each meal as value, i}
								<br />
								<input type="radio" bind:group={form.meal} id="meal{i}" {value} />
								<label for="meal{i}">{value}</label>
							{/each}
							{#if err.meal}
								<p class="err">
									{err.meal}
								</p>
							{/if}
						</div>
					{/if}

					<div class="inputGroup">
						<select name="template" id="" bind:value={form.msg}>
							<option value={store}>Message (Optional)</option>
							{#each template as temp}
								<option value={temp.text}>{temp.name}</option>
							{/each}
						</select>

						<textarea
							placeholder="Your Message"
							id="message"
							bind:value={form.msg}
							on:input={() => (store = form.msg)}
						/>
						{#if err.msg}
							<p class="err">
								{err.msg}
							</p>
						{/if}
					</div>
					{#if err.form}
						<p class="err">
							{err.form}
						</p>
					{/if}

					<div class="inputGroup submit">
						<input type="submit" value="Submit" />
					</div>
				</form>
			{:else}
				<div class="done">
					<SVG type="check" />
				</div>
			{/if}
		{/if}
	</div>
</section>

<style>
	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		margin: auto;
		padding: calc(var(--padding) * 4) var(--padding);
	}

	h1 {
		color: var(--color2);
	}

	form {
		max-width: 400px;
		margin: auto;
	}

	.inputGroup {
		--inputHeight: 50px;
	}
	.inputGroup:not(:first-child) {
		margin-top: 40px;
	}
	label {
		display: inline-block;
		margin-bottom: 10px;
	}
	[type='text'],
	[type='submit'],
	textarea {
		width: 100%;
		height: var(--inputHeight);

		border-radius: 25px;
		border: 2px solid var(--color0);

		padding: 10px;

		font-size: 1.2rem;

		background-color: rgb(243, 243, 243);

		transition: all var(--animTime1);
		transition-timing-function: ease-in-out;
	}

	select {
		background-color: var(--color0);
		font-size: 16px;
		border: none;
		margin-bottom: 10px;
	}
	textarea {
		display: block;
		resize: none;
		height: 150px;
	}
	[type='submit'] {
		background-color: var(--color3);
		color: var(--color1);
		text-align: center;
		cursor: pointer;
	}

	input:focus,
	textarea:focus {
		background-color: var(--color1);
		border-color: var(--color2);
	}

	[type='submit']:hover,
	[type='submit']:focus {
		background-color: var(--color2);
	}

	.err {
		color: var(--fColor3);
	}

	.done {
		fill: var(--fColor2);
	}
</style>
