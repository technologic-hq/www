<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";
</script>

<Slide bg={C.offBlack}>
  <Circ s={600} c={C.white} style="top: -280px; left: -200px; opacity: 0.02;" />
  <Sq s={12} c={C.red} style="top: 10%; right: 10%;" />
  <Sq s={12} c={C.yellow} style="bottom: 10%; left: 10%;" />
  <Sq s={12} c={C.blue} style="top: 50%; right: 6%;" />
  <Pad style="justify-content: center;">
    <div class="content">
      <Label c={C.yellow}>The Long-Term Vision</Label>
      <h2>Space is where this matters most.</h2>
      <div class="stats-row">
        <div class="stat">
          <div class="stat-value">6–9<span class="stat-unit">months</span></div>
          <div class="stat-desc">from the nearest supply chain</div>
        </div>
        <div class="stat">
          <div class="stat-value">$200K<span class="stat-unit">/kg</span></div>
          <div class="stat-desc">to ship a replacement to Mars</div>
        </div>
      </div>
      <div class="body">
        Component-level repair isn't a feature, it's the only option.
      </div>
      <div class="quote-box">
        <div class="quote-text">
          NASA's CLEAR project: component-level repair is 1,000x more efficient
          than unit-level replacement.
        </div>
      </div>
      <div class="closer">
        Space is where this ends up. Consumer is how we get there.
      </div>
    </div>
  </Pad>
</Slide>

<style>
  .content {
    max-width: 80%;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.25;
    margin: 0 0 32px 0;
  }
  .stats-row {
    display: flex;
    gap: 40px;
    margin-bottom: 28px;
  }
  .stat {
    border-left: 3px solid oklch(74.98% 0.1407 87.06);
    border-radius: 2px;
    padding-left: 14px;
  }
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1;
  }
  .stat-unit {
    font-size: 12px;
    font-weight: 400;
    color: oklch(56.36% 0.0176 86.46);
    margin-left: 4px;
  }
  .stat-desc {
    font-size: 11px;
    color: oklch(95.68% 0.012 79.78 / 0.55);
    margin-top: 4px;
    line-height: 1.4;
  }
  .body {
    font-size: 16px;
    color: oklch(95.68% 0.012 79.78 / 0.7);
    margin-bottom: 24px;
    line-height: 1.6;
    font-style: italic;
  }
  .quote-box {
    padding: 14px 18px;
    border: 1px solid oklch(95.68% 0.012 79.78 / 0.1);
    background: oklch(95.68% 0.012 79.78 / 0.03);
    border-radius: 6px;
    margin-bottom: 24px;
    max-width: 480px;
  }
  .quote-text {
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78 / 0.6);
    line-height: 1.6;
  }
  .closer {
    font-size: 17px;
    font-weight: 700;
    color: oklch(74.98% 0.1407 87.06);
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .content {
      max-width: 100%;
    }
    h2 {
      font-size: 24px;
    }
    .stats-row {
      flex-direction: column;
      gap: 20px;
    }
    .stat-value {
      font-size: 22px;
    }
  }
</style>
