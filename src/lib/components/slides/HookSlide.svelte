<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Circ from '../primitives/Circ.svelte';
	import Sq from '../primitives/Sq.svelte';
</script>

<Slide bg={C.black}>
	<Circ s={500} c={C.white} style="top: -220px; right: -180px; opacity: 0.03;" />
	<Sq s={16} c={C.red} style="top: 12%; left: 10%; opacity: 0.6;" />
	<Sq s={16} c={C.yellow} style="bottom: 12%; right: 10%; opacity: 0.6;" />
	<Pad style="justify-content: center;">
		<div class="content">
			<div class="quote-block">
				<div class="quote-mark">&ldquo;</div>
				<div class="quote">
					The ability to perform in-situ repair of electronics at the component level can
					<span class="highlight">dramatically reduce mission risk</span>
					and increase crew independence.
				</div>
			</div>
			<div class="source">
				NASA — Component-Level Electronic Assembly Repair (CLEAR) Project
			</div>
			<div class="divider"></div>
			<div class="followup">
				What if the technology NASA needs for Mars is exactly what Earth needs right now?
			</div>
		</div>
	</Pad>
</Slide>

<style>
	.content {
		max-width: 82%;
	}
	.quote-block {
		display: flex;
		gap: 16px;
		margin-bottom: 24px;
	}
	.quote-mark {
		font-size: 72px;
		font-variation-settings: 'wght' 900, 'wdth' 151;
		color: oklch(56.24% 0.1776 30.68);
		line-height: 0.8;
		flex-shrink: 0;
		margin-top: -4px;
	}
	.quote {
		font-size: 22px;
		color: oklch(95.68% 0.012 79.78);
		line-height: 1.6;
		font-variation-settings: 'wght' 300, 'wdth' 121;
	}
	.highlight {
		color: oklch(74.98% 0.1407 87.06);
		font-variation-settings: 'wght' 700, 'wdth' 121;
	}
	.source {
		font-size: 11px;
		color: oklch(56.36% 0.0176 86.46);
		letter-spacing: 2px;
		text-transform: uppercase;
		font-variation-settings: 'wght' 600, 'wdth' 100;
	}
	.divider {
		width: 60%;
		height: 1px;
		background: oklch(56.24% 0.1776 30.68 / 0.4);
		margin-top: 32px;
		border-radius: 1px;
	}
	.followup {
		font-size: 17px;
		color: oklch(95.68% 0.012 79.78 / 0.7);
		margin-top: 24px;
		line-height: 1.6;
	}
</style>
