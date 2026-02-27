<script lang="ts">
	import { C } from '$lib/data/colors';

	let { s = 80, c = C.red, style = '' }: { s?: number; c?: string; style?: string } = $props();
</script>

<div
	class="circ"
	style="width: {s}px; height: {s}px; background: {c}; {style}"
></div>

<style>
	.circ {
		border-radius: 50%;
		position: absolute;
	}
</style>
