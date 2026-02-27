<script lang="ts">
	import { C } from '$lib/data/colors';

	let { s = 70, c = C.yellow, style = '' }: { s?: number; c?: string; style?: string } = $props();
</script>

<div class="tri" style="width: {s}px; height: {s}px; {style}">
	<svg viewBox="0 0 100 100" fill={c} xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 50 8 Q 53 8 55 12 L 92 80 Q 95 86 89 90 L 11 90 Q 5 86 8 80 L 45 12 Q 47 8 50 8 Z"
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

	@media (max-width: 767px) {
		.tri {
			display: none;
		}
	}
</style>
