<script lang="ts">
	import '../app.css';
	import Lenis from 'lenis';
	import { onDestroy, onMount } from 'svelte';
	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<slot></slot>

<style></style>
