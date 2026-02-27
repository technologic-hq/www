<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Circ from '../primitives/Circ.svelte';

	const stats = [
		{ n: '$62B', d: 'in recoverable materials lost annually', sub: '$19B copper · $15B gold · $16B iron' },
		{ n: '22%', d: 'formally recycled', sub: 'Declining to 20% by 2030' },
		{ n: '1 in 3', d: 'replaced devices still work', sub: 'Discarded while functional' },
		{ n: '87%', d: 'drop in component lifecycles', sub: 'From 30 years to under 4' }
	];
</script>

<Slide bg={C.cream}>
	<div class="left-bar"></div>
	<Circ s={280} c={C.red} style="bottom: -120px; right: -80px; opacity: 0.06;" />
	<Pad>
		<Label c={C.red}>The Problem</Label>
		<h2>
			62 million tonnes of e-waste a year.<br />
			We recycle less than a quarter of it.
		</h2>
		<div class="stats-grid">
			{#each stats as s}
				<div class="stat">
					<div class="stat-number">{s.n}</div>
					<div class="stat-desc">{s.d}</div>
					<div class="stat-sub">{s.sub}</div>
				</div>
			{/each}
		</div>
		<div class="footer">
			<div class="footer-text">
				E-waste is growing 5x faster than recycling infrastructure. 1.55 million trucks of it would circle the equator bumper-to-bumper.
			</div>
			<div class="footer-source">Source: UN Global E-waste Monitor 2024</div>
		</div>
	</Pad>
</Slide>

<style>
	.left-bar {
		position: absolute;
		left: 0;
		top: 0;
		width: 6px;
		height: 100%;
		background: oklch(56.24% 0.1776 30.68);
	}
	h2 {
		font-size: 32px;
		font-weight: 800;
		color: oklch(21.78% 0 0);
		line-height: 1.15;
		margin: 0 0 32px 0;
		max-width: 80%;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 20px;
		max-width: 620px;
	}
	.stat-number {
		font-size: 28px;
		font-weight: 900;
		color: oklch(56.24% 0.1776 30.68);
		line-height: 1;
	}
	.stat-desc {
		font-size: 12px;
		color: oklch(21.78% 0 0);
		margin-top: 6px;
		line-height: 1.4;
		font-weight: 500;
	}
	.stat-sub {
		font-size: 10px;
		color: oklch(56.36% 0.0176 86.46);
		margin-top: 4px;
		line-height: 1.4;
	}
	.footer {
		margin-top: auto;
		padding-top: 20px;
	}
	.footer-text {
		font-size: 13px;
		color: oklch(56.36% 0.0176 86.46);
		line-height: 1.6;
		max-width: 520px;
	}
	.footer-source {
		font-size: 9px;
		color: oklch(56.36% 0.0176 86.46);
		opacity: 0.5;
		margin-top: 8px;
	}
</style>
