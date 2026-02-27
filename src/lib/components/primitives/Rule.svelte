<script lang="ts">
	import { C } from '$lib/data/colors';

	let {
		w = '100%',
		h = 1,
		c = C.black,
		style = ''
	}: { w?: string | number; h?: number; c?: string; style?: string } = $props();

	let width = $derived(typeof w === 'number' ? `${w}px` : w);
</script>

<div
	class="rule"
	style="width: {width}; height: {h}px; background: {c}; {style}"
></div>

<style>
	.rule {
		position: absolute;
	}

	@media (max-width: 767px) {
		.rule {
			display: none;
		}
	}
</style>
