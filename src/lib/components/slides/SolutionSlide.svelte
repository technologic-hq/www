<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Circ from '../primitives/Circ.svelte';
	import Tri from '../primitives/Tri.svelte';

	const features = [
		{ shape: 'circle', title: 'Swappable', desc: 'Upgrade or replace individual components. Not the whole device.', c: C.red },
		{ shape: 'square', title: 'Repairable', desc: "Fix what's broken. A dead battery doesn't kill a device.", c: C.blue },
		{ shape: 'triangle', title: 'Upgradeable', desc: 'New processor in two years? Swap the module. Keep everything else.', c: C.yellow },
		{ shape: 'diamond', title: 'Open', desc: 'Published specs. Third-party modules. Community-designed expansions.', c: C.black }
	];
</script>

<Slide bg={C.cream}>
	<div class="border-box"></div>
	<Circ s={140} c={C.yellow} style="right: 3%; bottom: 5%; opacity: 0.12;" />
	<Tri s={50} c={C.blue} style="right: 28%; top: 18%; opacity: 0.15;" />
	<Pad>
		<Label c={C.red}>The Solution</Label>
		<h2>Technologic</h2>
		<p class="subtitle">
			A modular electronics platform where the business model and the product aren't fighting each other. One standardized interconnect across device categories.
		</p>
		<div class="features-grid">
			{#each features as item}
				<div class="feature" style="border-top: 3px solid {item.c};">
					<div class="feature-header">
						{#if item.shape === 'circle'}
							<div class="shape-circle" style="background: {item.c};"></div>
						{:else if item.shape === 'square'}
							<div class="shape-square" style="background: {item.c};"></div>
						{:else if item.shape === 'triangle'}
							<div class="shape-triangle" style="border-bottom-color: {item.c};"></div>
						{:else if item.shape === 'diamond'}
							<div class="shape-diamond" style="background: {item.c};"></div>
						{/if}
						<span class="feature-title">{item.title}</span>
					</div>
					<div class="feature-desc">{item.desc}</div>
				</div>
			{/each}
		</div>
	</Pad>
</Slide>

<style>
	.border-box {
		position: absolute;
		right: 6%;
		top: 8%;
		width: 140px;
		height: 140px;
		border: 4px solid oklch(56.24% 0.1776 30.68);
		border-radius: 12px;
		opacity: 0.15;
	}
	h2 {
		font-size: 36px;
		font-variation-settings: 'wght' 1000, 'wdth' 151;
		color: oklch(21.78% 0 0);
		line-height: 1;
		margin: 0 0 8px 0;
		letter-spacing: -1px;
	}
	.subtitle {
		font-size: 15px;
		color: oklch(56.36% 0.0176 86.46);
		margin: 0 0 32px 0;
		line-height: 1.55;
		max-width: 420px;
	}
	.features-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		max-width: 480px;
	}
	.feature {
		padding: 14px 0;
	}
	.feature-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 6px;
	}
	.shape-circle {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}
	.shape-square {
		width: 10px;
		height: 10px;
	}
	.shape-triangle {
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 10px solid;
	}
	.shape-diamond {
		width: 8px;
		height: 8px;
		transform: rotate(45deg);
	}
	.feature-title {
		font-size: 14px;
		font-weight: 700;
		color: oklch(21.78% 0 0);
	}
	.feature-desc {
		font-size: 12px;
		color: oklch(56.36% 0.0176 86.46);
		line-height: 1.5;
	}
</style>
