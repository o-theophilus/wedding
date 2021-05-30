<script>
	import TitleBar from './_comp/titleBar.svelte';
	import TitleBar2 from './_comp/titleBar2.svelte';
	import Title from './_1.svelte';
	import Story from './_2.svelte';
	import Date from './_3.svelte';
	import Details from './_4.svelte';
	import Divider from './_comp/divider.svelte';
	import Form from './_5.svelte';
	import Gallery from './_7.svelte';
	import Story2 from './_6.svelte';
	import Gift from './_8.svelte';
	import Footer from './_comp/footer.svelte';
	import MobileMenu from './_comp/mobileMenu.svelte';
	import Music from './_comp/music.svelte';

	import { title } from '$lib/store.js';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<Title />
<Story />
<Date />
<Details />
<Divider />
<Form />
<Story2 />
<Gallery />
<Gift />
<Footer />

<TitleBar />
<MobileMenu />
<TitleBar2 />
<Music />
