<script lang="ts">
	import { C } from '$lib/data/colors';

	let { s = 60, c = C.blue, style = '' }: { s?: number; c?: string; style?: string } = $props();
</script>

<div
	class="sq"
	style="width: {s}px; height: {s}px; background: {c}; border-radius: {Math.round(s * 0.15)}px; {style}"
></div>

<style>
	.sq {
		position: absolute;
	}
</style>
