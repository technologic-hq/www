<script lang="ts">
	import type { Snippet } from 'svelte';
	import { C } from '$lib/data/colors';

	let { children, bg = C.cream }: { children: Snippet; bg?: string } = $props();
</script>

<div class="slide" style="background: {bg};">
	{@render children()}
</div>

<style>
	.slide {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		font-family: 'Roboto Flex', sans-serif;
		font-variation-settings: 'wght' 450, 'wdth' 121;
	}
</style>
