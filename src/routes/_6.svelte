<script>
	import Section from './_section.svelte';
</script>

<div id="six">
	<Section let:bgi>
		<h1 class:v1={bgi != null}>Gallery</h1>
	</Section>
</div>

