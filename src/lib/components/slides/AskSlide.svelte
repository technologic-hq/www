<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";
  import Tri from "../primitives/Tri.svelte";

  const funds = [
    { label: "Hardware engineering", pct: "40%", c: C.yellow },
    { label: "Tooling & first production run", pct: "25%", c: C.white },
    { label: "Design & prototyping", pct: "20%", c: C.cream },
    { label: "Operations & community", pct: "15%", c: C.cream },
  ];

  const milestones = [
    "Production-ready Player prototype",
    "Validated interconnect architecture",
    "5,000-unit initial production run",
    "Module ecosystem foundation",
    "Crowdfunding campaign launch",
    "Path to seed round",
  ];
</script>

<Slide bg={C.red}>
  <Circ
    s={400}
    c={C.black}
    style="bottom: -200px; right: -120px; opacity: 0.08;"
  />
  <Sq s={24} c={C.yellow} style="top: 12%; right: 12%; opacity: 0.6;" />
  <Tri s={30} c={C.white} style="bottom: 15%; left: 8%; opacity: 0.3;" />
  <Pad>
    <Label c={C.yellow}>The Ask</Label>
    <h2>Pre-Seed · $1M - $1.5M</h2>
    <div class="two-col">
      <div class="funds-col">
        <div class="col-header">Use of funds</div>
        {#each funds as item}
          <div class="fund-row">
            <span class="fund-label">{item.label}</span>
            <span class="fund-pct" style="color: {item.c};">{item.pct}</span>
          </div>
        {/each}
      </div>
      <div class="milestones-col">
        <div class="col-header">Milestones unlocked</div>
        <div class="milestone-list">
          {#each milestones as m}
            <div class="milestone-row">
              <div class="milestone-dot"></div>
              <span class="milestone-text">{m}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 38px;
    font-weight: 900;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.05;
    margin: 0 0 36px 0;
  }
  .two-col {
    display: flex;
    gap: 32px;
    max-width: 560px;
  }
  .funds-col,
  .milestones-col {
    flex: 1;
  }
  .col-header {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(95.68% 0.012 79.78 / 0.5);
    margin-bottom: 12px;
  }
  .fund-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid oklch(95.68% 0.012 79.78 / 0.12);
    padding: 10px 0;
  }
  .fund-label {
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78);
  }
  .fund-pct {
    font-size: 13px;
    font-weight: 700;
  }
  .milestone-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .milestone-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .milestone-dot {
    width: 5px;
    height: 5px;
    background: oklch(74.98% 0.1407 87.06);
    border-radius: 4px;
    flex-shrink: 0;
  }
  .milestone-text {
    font-size: 12px;
    color: oklch(95.68% 0.012 79.78 / 0.7);
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .two-col {
      flex-direction: column;
      max-width: 100%;
    }
    h2 {
      font-size: 30px;
    }
  }
</style>
