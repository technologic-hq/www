<script lang="ts">
  import { C } from "$lib/data/colors";
  import CoverSlide from "$lib/components/slides/CoverSlide.svelte";
  import HookSlide from "$lib/components/slides/HookSlide.svelte";
  import ProblemSlide from "$lib/components/slides/ProblemSlide.svelte";
  import WhyFailingSlide from "$lib/components/slides/WhyFailingSlide.svelte";
  import SolutionSlide from "$lib/components/slides/SolutionSlide.svelte";
  import SpaceSlide from "$lib/components/slides/SpaceSlide.svelte";
  import WhyNowSlide from "$lib/components/slides/WhyNowSlide.svelte";
  import ProductSlide from "$lib/components/slides/ProductSlide.svelte";
  import MarketSlide from "$lib/components/slides/MarketSlide.svelte";
  import RoadmapSlide from "$lib/components/slides/RoadmapSlide.svelte";
  import BusinessSlide from "$lib/components/slides/BusinessSlide.svelte";
  import CompetitionSlide from "$lib/components/slides/CompetitionSlide.svelte";
  import TeamSlide from "$lib/components/slides/TeamSlide.svelte";
  import AskSlide from "$lib/components/slides/AskSlide.svelte";
  import VisionSlide from "$lib/components/slides/VisionSlide.svelte";
  import ContactSlide from "$lib/components/slides/ContactSlide.svelte";
  import DownloadButton from "$lib/components/DownloadButton.svelte";
  import EmailBar from "$lib/components/EmailBar.svelte";
  import type { Component } from "svelte";

  const allSlides: {
    id: string;
    component: Component;
    label: string;
    dark: boolean;
  }[] = [
    { id: "cover", component: CoverSlide, label: "Cover", dark: false },
    { id: "hook", component: HookSlide, label: "Thesis", dark: true },
    { id: "problem", component: ProblemSlide, label: "Problem", dark: false },
    {
      id: "failing",
      component: WhyFailingSlide,
      label: "Insight",
      dark: false,
    },
    {
      id: "solution",
      component: SolutionSlide,
      label: "Solution",
      dark: false,
    },
    { id: "space", component: SpaceSlide, label: "Space", dark: true },
    { id: "whynow", component: WhyNowSlide, label: "Why Now", dark: true },
    { id: "product", component: ProductSlide, label: "Product", dark: false },
    { id: "market", component: MarketSlide, label: "Market", dark: false },
    { id: "roadmap", component: RoadmapSlide, label: "Roadmap", dark: true },
    {
      id: "business",
      component: BusinessSlide,
      label: "Business",
      dark: false,
    },
    {
      id: "competition",
      component: CompetitionSlide,
      label: "Landscape",
      dark: false,
    },
    { id: "team", component: TeamSlide, label: "Team", dark: true },
    { id: "ask", component: AskSlide, label: "The Ask", dark: true },
    { id: "vision", component: VisionSlide, label: "Vision", dark: true },
    { id: "contact", component: ContactSlide, label: "Contact", dark: false },
  ];

  const SLIDE_W = 860;
  const SLIDE_H = SLIDE_W * (10 / 16);

  let cur = $state(0);
  let stageEl = $state<HTMLDivElement | undefined>(undefined);
  let scale = $state(1);
  let isMobile = $state(false);
  let scrollEl = $state<HTMLDivElement | undefined>(undefined);
  let mobileCurrentSlide = $state(0);

  let emailBarTriggered = $state(false);

  $effect(() => {
    if ((isMobile ? mobileCurrentSlide >= 3 : cur >= 3) && !emailBarTriggered) {
      emailBarTriggered = true;
    }
  });

  let emailBarVisible = $derived(emailBarTriggered);
  let mobileDotsDark = $derived(allSlides[mobileCurrentSlide]?.dark ?? false);
  let currentSlideDark = $derived(
    isMobile
      ? (allSlides[mobileCurrentSlide]?.dark ?? false)
      : (allSlides[cur]?.dark ?? false),
  );

  function updateScale() {
    if (!stageEl) return;
    const pad = 80;
    const availW = stageEl.clientWidth - pad;
    const availH = stageEl.clientHeight - pad;
    scale = Math.min(availW / SLIDE_W, availH / SLIDE_H, 1.35);
  }

  $effect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    isMobile = mql.matches;
    function onChange(e: MediaQueryListEvent) {
      isMobile = e.matches;
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  });

  $effect(() => {
    if (!isMobile) {
      updateScale();
    }
  });

  $effect(() => {
    if (!isMobile || !scrollEl) return;

    const sections = scrollEl.querySelectorAll(".slide-section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(sections).indexOf(entry.target as Element);
            if (index >= 0) mobileCurrentSlide = index;
          }
        }
      },
      { root: scrollEl, threshold: 0.5 },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  });

  function next() {
    cur = Math.min(cur + 1, allSlides.length - 1);
  }

  function prev() {
    cur = Math.max(cur - 1, 0);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (isMobile) return;
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  }

  function scrollToSlide(index: number) {
    if (!scrollEl) return;
    const sections = scrollEl.querySelectorAll(".slide-section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<svelte:window
  onkeydown={handleKeydown}
  onresize={() => {
    if (!isMobile) updateScale();
  }}
/>

<DownloadButton dark={currentSlideDark} />
<EmailBar visible={emailBarVisible} />

{#if isMobile}
  <div class="deck-mobile">
    <div class="slides-scroll" bind:this={scrollEl}>
      {#each allSlides as s}
        <div class="slide-section">
          <s.component />
        </div>
      {/each}
    </div>
    <div class="mobile-dots" class:on-light={!mobileDotsDark}>
      {#each allSlides as s, i}
        <button
          class="mobile-dot"
          class:active={i === mobileCurrentSlide}
          title={s.label}
          onclick={() => scrollToSlide(i)}
        ></button>
      {/each}
    </div>
  </div>
{:else}
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
          aria-label="Previous slide"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path></svg
          >
        </button>
        <button
          class="nav-btn next"
          class:at-end={cur === allSlides.length - 1}
          disabled={cur === allSlides.length - 1}
          onclick={next}
          aria-label="Next slide"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="transform: scaleX(-1);"
            ><path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path></svg
          >
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  /* ── Desktop layout ── */

  .deck {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: oklch(14.48% 0 0);
    font-family: "Roboto Flex", sans-serif;
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

  .nav-btn:not(:disabled) {
    background: oklch(56.24% 0.1776 30.68);
    color: oklch(95.68% 0.012 79.78);
  }

  .nav-btn:disabled {
    color: oklch(100% 0 0 / 0.1);
    cursor: default;
  }

  /* ── Mobile layout ── */

  .deck-mobile {
    width: 100%;
    height: 100vh;
    height: 100svh;
    position: relative;
    font-family: "Roboto Flex", sans-serif;
  }

  .slides-scroll {
    height: 100vh;
    height: 100svh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .slide-section {
    height: 100vh;
    height: 100svh;
    scroll-snap-align: start;
    overflow: hidden;
  }

  .mobile-dots {
    position: fixed;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 40;
  }

  .mobile-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: oklch(100% 0 0 / 0.25);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s;
  }

  .mobile-dot.active {
    height: 16px;
    border-radius: 3px;
    background: oklch(56.24% 0.1776 30.68);
  }

  .on-light .mobile-dot {
    background: oklch(0% 0 0 / 0.2);
  }

  .on-light .mobile-dot.active {
    background: oklch(56.24% 0.1776 30.68);
  }
</style>
