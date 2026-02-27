<script lang="ts">
	import { C } from '$lib/data/colors';

	let { s = 70, c = C.yellow, style = '' }: { s?: number; c?: string; style?: string } = $props();
</script>

<div class="tri" style="width: {s}px; height: {s}px; {style}">
	<svg viewBox="0 0 100 100" fill={c} xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 45 14 L 90 81 Q 95 90 85 90 L 15 90 Q 5 90 10 81 L 55 14 Q 50 5 45 14 Z"
		/>
	</svg>
</div>

<style>
	.tri {
		position: absolute;
	}
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
