<script lang="ts">
	import { C } from '$lib/data/colors';
	import Slide from '../Slide.svelte';
	import Pad from '../Pad.svelte';
	import Label from '../Label.svelte';
	import Circ from '../primitives/Circ.svelte';
	import Sq from '../primitives/Sq.svelte';
	import Tri from '../primitives/Tri.svelte';
</script>

<Slide bg={C.black}>
	<Circ s={200} c={C.red} style="top: 8%; right: 6%; opacity: 0.12;" />
	<Sq s={120} c={C.blue} style="bottom: 6%; left: 4%; opacity: 0.12;" />
	<Tri s={100} c={C.yellow} style="top: 50%; right: 22%; opacity: 0.08;" />
	<Circ s={30} c={C.yellow} style="top: 28%; left: 18%; opacity: 0.15;" />
	<Sq s={14} c={C.red} style="bottom: 30%; right: 40%; opacity: 0.2;" />
	<Pad style="justify-content: center;">
		<div class="content">
			<Label c={C.yellow}>The Vision</Label>
			<h2 class="white">
				When humanity becomes a spacefaring civilization, modularity won't be a nice-to-have.
			</h2>
			<h2 class="yellow">
				It will be how everything is built.
			</h2>
			<div class="accent-bar"></div>
			<p>We're starting now.</p>
		</div>
	</Pad>
</Slide>

<style>
	.content {
		max-width: 72%;
	}
	h2 {
		font-size: 30px;
		font-weight: 700;
		line-height: 1.35;
		margin: 0 0 20px 0;
	}
	h2.white {
		color: oklch(95.68% 0.012 79.78);
	}
	h2.yellow {
		color: oklch(74.98% 0.1407 87.06);
	}
	.accent-bar {
		width: 36px;
		height: 3px;
		background: oklch(56.24% 0.1776 30.68);
		margin: 24px 0;
		border-radius: 2px;
	}
	p {
		font-size: 17px;
		color: oklch(56.36% 0.0176 86.46);
		margin: 0;
	}
</style>
