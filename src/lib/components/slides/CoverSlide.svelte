<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Logo from '../Logo.svelte';
</script>

<Slide bg={C.cream}>
	<Pad>
		<div class="layout">
			<div class="text">
				<div class="pre-seed">Pre-Seed &middot; 2026</div>
				<h1>Technologic</h1>
				<div class="accent-bar"></div>
				<p>
					Modular consumer electronics.<br />
					Built to last. Built to scale. Built for what comes next.
				</p>
			</div>
			<div class="logo-side">
				<Logo
					upColor="oklch(68% 0.22 250)"
					downColor="oklch(82% 0.18 80)"
					size={260}
				/>
			</div>
		</div>
	</Pad>
</Slide>

<style>
	.layout {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 40px;
	}
	.text {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.logo-side {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.pre-seed {
		font-size: 10px;
		letter-spacing: 6px;
		text-transform: uppercase;
		color: oklch(56.36% 0.0176 86.46);
		margin-bottom: 20px;
		font-variation-settings: 'wght' 600, 'wdth' 100;
	}
	h1 {
		font-size: 52px;
		font-variation-settings: 'wght' 1000, 'wdth' 151;
		color: oklch(21.78% 0 0);
		line-height: 1;
		margin: 0;
		letter-spacing: -1px;
	}
	.accent-bar {
		width: 50px;
		height: 4px;
		background: oklch(56.24% 0.1776 30.68);
		margin: 20px 0 16px;
		border-radius: 2px;
	}
	p {
		font-size: 16px;
		color: oklch(56.36% 0.0176 86.46);
		margin: 0;
		line-height: 1.55;
	}
</style>
