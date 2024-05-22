<script lang="ts" type="module">
	import { initShell } from '$lib/utils';

	import { onMount } from 'svelte';
	onMount(async () => {
		initShell();
	});
</script>

<div class="terminal p-4" id="terminal"></div>
