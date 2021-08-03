<script>
	import { title } from '$lib/store.js';

	import Home from './_home.svelte';
	import Story from './_story.svelte';
	import Date from './_date/index.svelte';
	import Details from './_details/index.svelte';
	import Divider from '../lib/divider.svelte';
	import Form from './_rsvp/index.svelte';
	import Photo from './_photo/index.svelte';
	import Story2 from './_engage.svelte';
	import Gift from './_gift.svelte';
	import Footer from './_footer.svelte';

	import Music from '$lib/music.svelte';

	import TitleBar from './_base/titleBar.svelte';
	import TitleBar2 from './_base/titleBar2.svelte';
	import MobileMenu from './_base/mobileMenu.svelte';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<Home />
<Story />
<Date />
<Details />
<Divider />
<Form />
<Story2 />
<Photo />
<Gift />
<Footer />

<Music />

<TitleBar />
<MobileMenu />
<TitleBar2 />
