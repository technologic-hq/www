<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Circ from '../primitives/Circ.svelte';
	import Rule from '../primitives/Rule.svelte';

	const modules = [
		{ mod: 'DAC', desc: 'Swappable audio chipset' },
		{ mod: 'Storage', desc: 'Expandable local media' },
		{ mod: 'Amp', desc: 'Headphone amplifier' },
		{ mod: 'Wireless', desc: 'Bluetooth · WiFi' },
		{ mod: 'Battery', desc: 'Hot-swappable power' },
		{ mod: 'Display', desc: 'Upgradeable screen' }
	];
</script>

<Slide bg={C.cream}>
	<div class="right-wash"></div>
	<Circ s={10} c={C.red} style="top: 16%; right: 34%; opacity: 0.4;" />
	<Rule w={1} h={400} c={C.black} style="right: 30%; top: 20%; opacity: 0.06;" />
	<Pad>
		<Label c={C.yellow}>First Product</Label>
		<h2>The Player</h2>
		<p class="subtitle">
			A modular digital audio player. Retro form factor, modern architecture. The beachhead that proves the interconnect works across components.
		</p>
		<div class="modules-grid">
			{#each modules as m}
				<div class="module-card">
					<div class="module-name">{m.mod}</div>
					<div class="module-desc">{m.desc}</div>
				</div>
			{/each}
		</div>
		<div class="price-row">
			<div>
				<div class="price-value">$800–$3,700</div>
				<div class="price-label">Premium DAP price points (Astell&Kern)</div>
			</div>
			<div>
				<div class="price-value">$107M</div>
				<div class="price-label">Portable DAP market</div>
			</div>
		</div>
	</Pad>
</Slide>

<style>
	.right-wash {
		position: absolute;
		right: 0;
		top: 0;
		width: 30%;
		height: 100%;
		background: oklch(74.98% 0.1407 87.06);
		opacity: 0.06;
	}
	h2 {
		font-size: 34px;
		font-weight: 800;
		color: oklch(21.78% 0 0);
		line-height: 1.1;
		margin: 0 0 8px 0;
	}
	.subtitle {
		font-size: 14px;
		color: oklch(56.36% 0.0176 86.46);
		margin: 0 0 28px 0;
		line-height: 1.55;
		max-width: 400px;
	}
	.modules-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 12px;
		max-width: 500px;
	}
	.module-card {
		padding: 12px 14px;
		background: oklch(95.68% 0.012 79.78);
		border: 1px solid oklch(87.73% 0.0229 87.16);
		border-radius: 6px;
	}
	.module-name {
		font-size: 12px;
		font-weight: 700;
		color: oklch(21.78% 0 0);
		margin-bottom: 3px;
	}
	.module-desc {
		font-size: 10px;
		color: oklch(56.36% 0.0176 86.46);
		line-height: 1.4;
	}
	.price-row {
		margin-top: auto;
		padding-top: 20px;
		display: flex;
		gap: 32px;
		max-width: 500px;
	}
	.price-value {
		font-size: 22px;
		font-weight: 800;
		color: oklch(21.78% 0 0);
	}
	.price-label {
		font-size: 10px;
		color: oklch(56.36% 0.0176 86.46);
	}
</style>
