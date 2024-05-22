<script lang="ts" type="module">
	import { browser } from '$app/environment';
	import { roseText, initShell } from '$lib/utils';
	import { JsShell } from 'js-shell-emulator';
	import { onMount } from 'svelte';
	onMount(async () => {
		initShell();
	});
</script>

<div class="terminal min-w-screen h-screen p-4" id="terminal"></div>
