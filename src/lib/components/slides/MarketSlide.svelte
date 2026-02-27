<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Sq from "../primitives/Sq.svelte";
  import Rule from "../primitives/Rule.svelte";

  const markets = [
    {
      label: "Consumer Electronics",
      val: "$1.2T",
      sub: "annually, 5.5–7.8% CAGR",
    },
    {
      label: "Kitchen Appliances",
      val: "$242B",
      sub: "smart kitchen: 12.4% CAGR",
    },
    { label: "Climate Tech Investment", val: "$40.5B", sub: "2025, +8% YoY" },
  ];

  const categories = [
    "Home appliances",
    "Wearables & fitness",
    "Smart home devices",
    "Consumer audio",
    "Kitchen electronics",
  ];
</script>

<Slide bg={C.white}>
  <Sq
    s={300}
    c={C.blue}
    style="bottom: -140px; right: -140px; opacity: 0.04;"
  />
  <Rule
    w="76%"
    h={1}
    c={C.black}
    style="bottom: 13%; left: 10%; opacity: 0.08;"
  />
  <Pad>
    <Label c={C.blue}>Market</Label>
    <h2>The categories with zero modular options.</h2>
    <div class="market-layout">
      <div class="market-numbers">
        {#each markets as item}
          <div class="market-item">
            <div class="market-label">{item.label}</div>
            <div class="market-val">{item.val}</div>
            <div class="market-sub">{item.sub}</div>
          </div>
        {/each}
      </div>
      <div class="categories-col">
        <div class="cat-header">Unaddressed categories</div>
        {#each categories as cat}
          <div class="cat-row">
            <div class="cat-dot"></div>
            <span class="cat-name">{cat}</span>
            <span class="cat-note">No modular options</span>
          </div>
        {/each}
        <div class="cat-footer">
          Sustainable products grow 2.7x faster than conventional. 17% market
          share, capturing 32% of growth.
        </div>
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 30px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.15;
    margin: 0 0 32px 0;
  }
  .market-layout {
    display: flex;
    gap: 32px;
    max-width: 620px;
  }
  .market-numbers {
    flex: 1;
  }
  .market-item {
    margin-bottom: 24px;
  }
  .market-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 4px;
  }
  .market-val {
    font-size: 32px;
    font-weight: 900;
    color: oklch(21.78% 0 0);
    line-height: 1;
  }
  .market-sub {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    margin-top: 2px;
  }
  .categories-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .cat-header {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 4px;
  }
  .cat-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    background: oklch(95.68% 0.012 79.78);
    border-radius: 6px;
  }
  .cat-dot {
    width: 6px;
    height: 6px;
    background: oklch(56.24% 0.1776 30.68);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .cat-name {
    font-size: 12px;
    color: oklch(21.78% 0 0);
    font-weight: 500;
  }
  .cat-note {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    margin-left: auto;
  }
  .cat-footer {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    margin-top: 8px;
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
    .market-layout {
      flex-direction: column;
      max-width: 100%;
    }
    .cat-note {
      display: none;
    }
    .market-val {
      font-size: 26px;
    }
  }
</style>
