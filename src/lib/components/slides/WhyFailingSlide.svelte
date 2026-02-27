<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Rule from '../primitives/Rule.svelte';

	const failures = [
		{ name: 'Project Ara', yr: '2013–16', result: 'Modules 50–100% more expensive. 25% size/weight penalty. Cancelled.', col: C.red },
		{ name: 'Phonebloks', yr: '2013', result: 'Viral concept, zero product. Inspired Ara, then vanished.', col: C.grey },
		{ name: 'LG G5', yr: '2016', result: 'Two modules shipped. Abandoned after one generation.', col: C.grey },
		{ name: 'Moto Z', yr: '2016–18', result: '14 Moto Mods launched. Ecosystem died quietly.', col: C.grey }
	];
</script>

<Slide bg={C.white}>
	<div class="right-wash"></div>
	<Rule w="100%" h={1} c={C.blue} style="top: 13%; opacity: 0.12;" />
	<Pad>
		<Label c={C.blue}>The Insight</Label>
		<h2>
			Modular hardware keeps failing.<br />
			The engineering was never the problem.
		</h2>
		<div class="failures">
			{#each failures as item}
				<div class="failure-row">
					<div class="dot" style="background: {item.col};"></div>
					<div class="name-col">
						<span class="name">{item.name}</span>
						<span class="year">{item.yr}</span>
					</div>
					<span class="result">{item.result}</span>
				</div>
			{/each}
		</div>
		<div class="callout">
			<p>
				Every single attempt lived inside a company whose revenue depended on you replacing the whole device. The incentive structure killed the product before engineering ever could.
			</p>
		</div>
	</Pad>
</Slide>

<style>
	.right-wash {
		position: absolute;
		right: 0;
		top: 0;
		width: 35%;
		height: 100%;
		background: oklch(42.99% 0.1083 257.76);
		opacity: 0.04;
	}
	h2 {
		font-size: 30px;
		font-weight: 800;
		color: oklch(21.78% 0 0);
		line-height: 1.2;
		margin: 0 0 28px 0;
	}
	.failures {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 580px;
	}
	.failure-row {
		display: flex;
		align-items: baseline;
		gap: 12px;
		border-bottom: 1px solid oklch(87.73% 0.0229 87.16);
		padding-bottom: 10px;
	}
	.dot {
		min-width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-top: 5px;
		flex-shrink: 0;
	}
	.name-col {
		min-width: 130px;
	}
	.name {
		font-size: 14px;
		font-weight: 700;
		color: oklch(21.78% 0 0);
	}
	.year {
		font-size: 11px;
		color: oklch(56.36% 0.0176 86.46);
		margin-left: 6px;
	}
	.result {
		font-size: 12px;
		color: oklch(56.36% 0.0176 86.46);
		line-height: 1.4;
	}
	.callout {
		margin-top: 28px;
		padding: 18px 22px;
		background: oklch(21.78% 0 0);
		border-radius: 6px;
		max-width: 580px;
	}
	.callout p {
		font-size: 15px;
		color: oklch(95.68% 0.012 79.78);
		margin: 0;
		line-height: 1.6;
	}
</style>
