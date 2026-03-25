<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";
</script>

<Slide bg={C.black}>
  <Circ
    s={500}
    c={C.white}
    style="top: -220px; right: -180px; opacity: 0.03;"
  />
  <Sq s={16} c={C.red} style="top: 12%; left: 10%; opacity: 0.6;" />
  <Sq s={16} c={C.yellow} style="bottom: 12%; right: 10%; opacity: 0.6;" />
  <Pad style="justify-content: center;">
    <div class="content">
      <div class="stat">$1,500<span class="per">/year</span></div>
      <div class="context">
        The average American household spends this on consumer electronics. Most
        of that is rebuying capability they already owned.
      </div>
      <div class="divider"></div>
      <div class="body">
        A new chip is released and your two-year-old device loses half its
        resale value overnight. A single component becomes outdated and the
        whole thing gets replaced.
      </div>
      <div class="kicker">
        What if you only replaced the part that mattered?
      </div>
    </div>
  </Pad>
</Slide>

<style>
  .content {
    max-width: 82%;
  }
  .stat {
    font-size: 64px;
    font-variation-settings:
      "wght" 900,
      "wdth" 151;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1;
    margin-bottom: 8px;
  }
  .per {
    font-size: 28px;
    font-variation-settings:
      "wght" 400,
      "wdth" 100;
    color: oklch(56.36% 0.0176 86.46);
  }
  .context {
    font-size: 18px;
    color: oklch(95.68% 0.012 79.78 / 0.7);
    line-height: 1.6;
    max-width: 520px;
  }
  .divider {
    width: 60%;
    height: 1px;
    background: oklch(56.24% 0.1776 30.68 / 0.4);
    margin: 28px 0;
    border-radius: 1px;
  }
  .body {
    font-size: 15px;
    color: oklch(95.68% 0.012 79.78 / 0.5);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 24px;
  }
  .kicker {
    font-size: 20px;
    font-variation-settings:
      "wght" 700,
      "wdth" 121;
    color: oklch(74.98% 0.1407 87.06);
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .content {
      max-width: 100%;
    }
    .stat {
      font-size: 48px;
    }
    .per {
      font-size: 22px;
    }
    .context {
      font-size: 15px;
    }
    .kicker {
      font-size: 17px;
    }
  }
</style>
