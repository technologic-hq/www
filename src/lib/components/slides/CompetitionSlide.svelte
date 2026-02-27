<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";

  const reasons = [
    "Device upgrade cycles drive repeat purchases",
    "Proprietary parts sold through authorized channels only",
    "Ecosystem lock-in creates switching costs",
    "iFixit-Samsung partnership ended 2024 — no interest in repair at scale",
  ];
</script>

<Slide bg={C.white}>
  <Pad>
    <Label c={C.blue}>Landscape</Label>
    <h2>
      The goal is not to compete with Framework<br />
      but to expand the map.
    </h2>
    <div class="layout">
      <div class="chart-wrap">
        <div class="y-label">Modularity</div>
        <div class="chart">
          <div class="point" style="left: 20%; top: 18%;">
            <div class="dot grey"></div>
            <div class="name">Framework</div>
            <div class="sub">$45M &middot; Laptops</div>
          </div>
          <div class="point" style="left: 18%; top: 42%;">
            <div class="dot grey"></div>
            <div class="name">Fairphone</div>
            <div class="sub">&euro;87M &middot; Phones</div>
          </div>
          <div class="point technologic" style="left: 62%; top: 14%;">
            <div class="dot accent"></div>
            <div class="name accent-name">Technologic</div>
            <div class="sub">Multi-category platform</div>
          </div>
          <div class="point" style="left: 28%; top: 72%;">
            <div class="dot faded"></div>
            <div class="name faded-name">Apple</div>
          </div>
          <div class="point" style="left: 88%; top: 68%;">
            <div class="dot faded"></div>
            <div class="name faded-name">Samsung</div>
          </div>
        </div>
        <div class="x-label">Category breadth</div>
      </div>
      <div class="sidebar">
        <div class="sidebar-title">Why incumbents won't build this</div>
        <div class="sidebar-items">
          {#each reasons as item}
            <div class="sidebar-item">{item}</div>
          {/each}
        </div>
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 28px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.2;
    margin: 0 0 28px 0;
  }
  .layout {
    display: flex;
    gap: 32px;
    align-items: flex-start;
  }
  .chart-wrap {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .y-label {
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: oklch(56.36% 0.0176 86.46);
    align-self: flex-start;
    margin-bottom: -4px;
  }
  .x-label {
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: oklch(56.36% 0.0176 86.46);
  }
  .chart {
    position: relative;
    width: 280px;
    height: 220px;
    border-left: 1px solid oklch(21.78% 0 0 / 0.12);
    border-bottom: 1px solid oklch(21.78% 0 0 / 0.12);
    border-radius: 0 0 0 2px;
  }
  .point {
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 auto 4px;
  }
  .dot.grey {
    background: oklch(56.36% 0.0176 86.46);
  }
  .dot.accent {
    width: 14px;
    height: 14px;
    background: oklch(56.24% 0.1776 30.68);
    box-shadow: 0 0 0 4px oklch(56.24% 0.1776 30.68 / 0.15);
  }
  .dot.faded {
    background: oklch(56.36% 0.0176 86.46 / 0.25);
  }
  .name {
    font-size: 9px;
    color: oklch(56.36% 0.0176 86.46);
    white-space: nowrap;
  }
  .accent-name {
    font-size: 10px;
    font-weight: 700;
    color: oklch(56.24% 0.1776 30.68);
  }
  .faded-name {
    color: oklch(56.36% 0.0176 86.46 / 0.4);
  }
  .sub {
    font-size: 8px;
    color: oklch(56.36% 0.0176 86.46 / 0.5);
    white-space: nowrap;
  }
  .sidebar {
    flex: 1;
  }
  .sidebar-title {
    font-size: 11px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .sidebar-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sidebar-item {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.5;
    padding-left: 12px;
    border-left: 2px solid oklch(87.73% 0.0229 87.16);
    border-radius: 2px;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 22px;
    }
    .layout {
      flex-direction: column;
    }
    .chart {
      width: 220px;
      height: 170px;
    }
    .sidebar {
      width: 100%;
    }
  }
</style>
