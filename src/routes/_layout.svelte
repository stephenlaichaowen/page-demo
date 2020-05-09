<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  main {
    padding: 0;
    margin-top: 0;
  }
</style>

<Nav {segment}/>
<main>
  <slot></slot>
</main>
