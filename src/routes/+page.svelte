<script lang="ts">
	import { C } from '$lib/data/colors';
	import CoverSlide from '$lib/components/slides/CoverSlide.svelte';
	import HookSlide from '$lib/components/slides/HookSlide.svelte';
	import ProblemSlide from '$lib/components/slides/ProblemSlide.svelte';
	import WhyFailingSlide from '$lib/components/slides/WhyFailingSlide.svelte';
	import SolutionSlide from '$lib/components/slides/SolutionSlide.svelte';
	import SpaceSlide from '$lib/components/slides/SpaceSlide.svelte';
	import WhyNowSlide from '$lib/components/slides/WhyNowSlide.svelte';
	import ProductSlide from '$lib/components/slides/ProductSlide.svelte';
	import MarketSlide from '$lib/components/slides/MarketSlide.svelte';
	import RoadmapSlide from '$lib/components/slides/RoadmapSlide.svelte';
	import BusinessSlide from '$lib/components/slides/BusinessSlide.svelte';
	import CompetitionSlide from '$lib/components/slides/CompetitionSlide.svelte';
	import TeamSlide from '$lib/components/slides/TeamSlide.svelte';
	import AskSlide from '$lib/components/slides/AskSlide.svelte';
	import VisionSlide from '$lib/components/slides/VisionSlide.svelte';
	import ContactSlide from '$lib/components/slides/ContactSlide.svelte';
	import type { Component } from 'svelte';

	const allSlides: { id: string; component: Component; label: string }[] = [
		{ id: 'cover', component: CoverSlide, label: 'Cover' },
		{ id: 'hook', component: HookSlide, label: 'Thesis' },
		{ id: 'problem', component: ProblemSlide, label: 'Problem' },
		{ id: 'failing', component: WhyFailingSlide, label: 'Insight' },
		{ id: 'solution', component: SolutionSlide, label: 'Solution' },
		{ id: 'space', component: SpaceSlide, label: 'Space' },
		{ id: 'whynow', component: WhyNowSlide, label: 'Why Now' },
		{ id: 'product', component: ProductSlide, label: 'Product' },
		{ id: 'market', component: MarketSlide, label: 'Market' },
		{ id: 'roadmap', component: RoadmapSlide, label: 'Roadmap' },
		{ id: 'business', component: BusinessSlide, label: 'Business' },
		{ id: 'competition', component: CompetitionSlide, label: 'Landscape' },
		{ id: 'team', component: TeamSlide, label: 'Team' },
		{ id: 'ask', component: AskSlide, label: 'The Ask' },
		{ id: 'vision', component: VisionSlide, label: 'Vision' },
		{ id: 'contact', component: ContactSlide, label: 'Contact' }
	];

	const SLIDE_W = 860;
	const SLIDE_H = SLIDE_W * (10 / 16);

	let cur = $state(0);
	let stageEl = $state<HTMLDivElement | undefined>(undefined);
	let scale = $state(1);

	function updateScale() {
		if (!stageEl) return;
		const pad = 80;
		const availW = stageEl.clientWidth - pad;
		const availH = stageEl.clientHeight - pad;
		scale = Math.min(availW / SLIDE_W, availH / SLIDE_H, 1.35);
	}

	$effect(() => {
		updateScale();
	});

	function next() {
		cur = Math.min(cur + 1, allSlides.length - 1);
	}

	function prev() {
		cur = Math.max(cur - 1, 0);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight' || e.key === ' ') {
			e.preventDefault();
			next();
		}
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} onresize={updateScale} />

<div class="deck">
	<div class="stage" bind:this={stageEl}>
		<div
			class="slide-container"
			style="width: {SLIDE_W}px; height: {SLIDE_H}px; transform: scale({scale});"
		>
			{#key cur}
				{@const SlideComp = allSlides[cur].component}
				<SlideComp />
			{/key}
		</div>
	</div>
	<div class="controls">
		<div class="dots">
			{#each allSlides as s, i}
				<button
					class="dot"
					class:active={i === cur}
					title={s.label}
					onclick={() => (cur = i)}
				></button>
			{/each}
		</div>
		<div class="label">
			{allSlides[cur].label} &middot; {cur + 1}/{allSlides.length}
		</div>
		<div class="nav-buttons">
			<button
				class="nav-btn"
				disabled={cur === 0}
				onclick={prev}
			>&larr;</button>
			<button
				class="nav-btn next"
				class:at-end={cur === allSlides.length - 1}
				disabled={cur === allSlides.length - 1}
				onclick={next}
			>&rarr;</button>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.deck {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: oklch(14.48% 0 0);
		font-family: 'Roboto Flex', sans-serif;
	}

	.stage {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		min-height: 0;
	}

	.slide-container {
		flex-shrink: 0;
		transform-origin: center center;
		box-shadow: 0 24px 80px oklch(0% 0 0 / 0.7);
		overflow: hidden;
		border-radius: 8px;
	}

	.controls {
		padding: 10px 24px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.dots {
		display: flex;
		gap: 2px;
		align-items: center;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 3px;
		background: oklch(100% 0 0 / 0.15);
		border: none;
		cursor: pointer;
		transition: all 0.2s;
		padding: 0;
	}

	.dot.active {
		width: 24px;
		background: oklch(56.24% 0.1776 30.68);
	}

	.label {
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: oklch(100% 0 0 / 0.35);
	}

	.nav-buttons {
		display: flex;
		gap: 6px;
	}

	.nav-btn {
		width: 32px;
		height: 32px;
		border: 1px solid oklch(100% 0 0 / 0.12);
		background: transparent;
		color: oklch(100% 0 0 / 0.6);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		border-radius: 4px;
	}

	.nav-btn:disabled {
		color: oklch(100% 0 0 / 0.1);
		cursor: default;
	}

	.nav-btn.next:not(.at-end) {
		background: oklch(56.24% 0.1776 30.68);
		color: oklch(95.68% 0.012 79.78);
	}

	.nav-btn.next.at-end {
		background: transparent;
	}
</style>
