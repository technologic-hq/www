<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Rule from '../primitives/Rule.svelte';

	const phases = [
		{ phase: '01', time: '2026', title: 'The Player', items: ['Working prototype', 'Crowdfunding campaign', 'First 1,000 units shipped'], c: C.red },
		{ phase: '02', time: '2027', title: 'Expand', items: ['Second device category', 'Module marketplace', 'Third-party developer SDK'], c: C.yellow },
		{ phase: '03', time: '2028', title: 'Platform', items: ['Smart home integration', 'Kitchen electronics', 'Module licensing program'], c: C.blue },
		{ phase: '04', time: '2029+', title: 'Scale', items: ['Enterprise / space contracts', 'Open standard consortium', 'Global manufacturing'], c: C.white }
	];
</script>

<Slide bg={C.black}>
	<Rule w="76%" h={1} c={C.white} style="top: 52%; left: 10%; opacity: 0.06;" />
	<Pad>
		<Label c={C.yellow}>Roadmap</Label>
		<h2>From one device to an ecosystem.</h2>
		<div class="phases">
			{#each phases as p}
				<div class="phase">
					<div class="phase-dot" style="background: {p.c};"></div>
					<div class="phase-meta">{p.phase} &middot; {p.time}</div>
					<div class="phase-title">{p.title}</div>
					{#each p.items as item}
						<div class="phase-item">{item}</div>
					{/each}
				</div>
			{/each}
		</div>
		<div class="footer">
			Each phase shares the same interconnect standard. Every module sold in Phase 1 works in Phase 4.
		</div>
	</Pad>
</Slide>

<style>
	h2 {
		font-size: 30px;
		font-weight: 700;
		color: oklch(95.68% 0.012 79.78);
		line-height: 1.15;
		margin: 0 0 40px 0;
	}
	.phases {
		display: flex;
		gap: 16px;
		max-width: 640px;
	}
	.phase {
		flex: 1;
	}
	.phase-dot {
		width: 10px;
		height: 10px;
		border-radius: 4px;
		margin-bottom: 10px;
	}
	.phase-meta {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: oklch(56.36% 0.0176 86.46);
		margin-bottom: 4px;
	}
	.phase-title {
		font-size: 16px;
		font-weight: 700;
		color: oklch(95.68% 0.012 79.78);
		margin-bottom: 10px;
	}
	.phase-item {
		font-size: 11px;
		color: oklch(95.68% 0.012 79.78 / 0.5);
		margin-bottom: 5px;
		line-height: 1.4;
	}
	.footer {
		margin-top: auto;
		padding-top: 16px;
		font-size: 12px;
		color: oklch(56.36% 0.0176 86.46);
		max-width: 500px;
	}
</style>
