<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Logo from "../Logo.svelte";
</script>

<Slide bg={C.cream}>
  <Pad>
    <div class="layout">
      <div class="pre-seed">Pre-Seed &middot; 2026</div>
      <div class="logo-side">
        <Logo
          upColor="oklch(68% 0.22 250)"
          downColor="oklch(82% 0.18 80)"
          size={260}
        />
      </div>
      <div class="text">
        <h1>Technologic</h1>
        <div class="accent-bar"></div>
        <p>
          Modular consumer electronics.<br />
          Built to last. Built to scale. Built for what comes next.
        </p>
      </div>
    </div>
  </Pad>
</Slide>

<style>
  .layout {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    align-items: center;
    column-gap: 40px;
  }
  .pre-seed {
    grid-column: 1;
    grid-row: 1;
    align-self: end;
    font-size: 10px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 20px;
    font-variation-settings:
      "wght" 600,
      "wdth" 100;
  }
  .text {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .logo-side {
    grid-column: 2;
    grid-row: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 52px;
    font-variation-settings:
      "wght" 1000,
      "wdth" 151;
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

  @media (max-width: 767px) {
    .layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0;
      justify-content: center;
    }
    .pre-seed {
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
    }
    .logo-side {
      margin-bottom: 20px;
    }
    .logo-side :global(svg) {
      width: 140px;
      height: 140px;
    }
    .text {
      align-items: center;
    }
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 14px;
    }
    .accent-bar {
      margin: 16px auto 12px;
    }
  }
</style>
