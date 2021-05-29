<script>
	import TitleBar from './_titleBar.svelte';
	import TitleBar2 from './_titleBar2.svelte';
	import Title from './_1.svelte';
	import Story from './_2.svelte';
	import Date from './_3.svelte';
	import Details from './_4.svelte';
	import Story2 from './_5.svelte';
	import Gallery from './_6.svelte';
	import Form from './_7.svelte';
	import Gift from './_8.svelte';
	import Footer from './_footer.svelte';
	import Blocker from './_blocker.svelte';
	

	import { title } from '$lib/store.js';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<Title />
<Story />
<Date />
<Details />
<Form />
<Story2 />
<Gallery />
<Gift />
<Footer />

<TitleBar />
<Blocker />
<TitleBar2 />

