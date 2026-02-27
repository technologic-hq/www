<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, style = '' }: { children: Snippet; style?: string } = $props();
</script>

<div class="pad" style={style}>
	{@render children()}
</div>

<style>
	.pad {
		padding: 8% 10%;
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
