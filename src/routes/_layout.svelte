<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  /* main {
    padding: 2rem;
  } */
</style>

<Nav {segment}/>
<main>
  <slot></slot>
</main>
