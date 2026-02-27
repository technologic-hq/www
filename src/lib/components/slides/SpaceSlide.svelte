<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";

  const stats = [
    { n: "26", u: "months", d: "between Mars launch windows" },
    { n: "6–9", u: "months", d: "transit time, each way" },
    { n: "$200K", u: "/kg", d: "to deliver payload to Mars surface" },
    { n: "41%", u: "", d: "of small satellites fail or partially fail" },
  ];
</script>

<Slide bg={C.offBlack}>
  <Circ s={600} c={C.white} style="top: -280px; left: -200px; opacity: 0.02;" />
  <Sq s={12} c={C.red} style="top: 10%; right: 10%;" />
  <Sq s={12} c={C.yellow} style="bottom: 10%; left: 10%;" />
  <Sq s={12} c={C.blue} style="top: 50%; right: 6%;" />
  <Pad>
    <Label c={C.yellow}>Why This Matters Beyond Earth</Label>
    <h2>
      On Mars, you can't ship a replacement.<br />
      Modularity is survival not just a feature.
    </h2>
    <div class="stats-grid">
      {#each stats as s}
        <div class="stat">
          <div class="stat-value">
            {s.n}<span class="stat-unit">{s.u}</span>
          </div>
          <div class="stat-desc">{s.d}</div>
        </div>
      {/each}
    </div>
    <div class="context">
      <div class="context-text">
        The ISS has operated for 25+ years through modular Orbital Replacement
        Units. But NASA's own CLEAR project found ORU-level replacement is
        1,000x less efficient than component-level repair. For Mars, you need
        modularity at every layer.
      </div>
      <div class="thesis-box">
        <span class="thesis-label">Our thesis: </span>
        <span class="thesis-text"
          >What's essential for space is transformative for Earth.</span
        >
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.25;
    margin: 0 0 32px 0;
    max-width: 80%;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    max-width: 540px;
  }
  .stat {
    border-left: 3px solid oklch(74.98% 0.1407 87.06);
    border-radius: 2px;
    padding-left: 14px;
  }
  .stat-value {
    font-size: 26px;
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
  .context {
    margin-top: 28px;
    max-width: 540px;
  }
  .context-text {
    font-size: 12px;
    color: oklch(95.68% 0.012 79.78 / 0.5);
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .thesis-box {
    padding: 14px 18px;
    border: 1px solid oklch(95.68% 0.012 79.78 / 0.1);
    background: oklch(95.68% 0.012 79.78 / 0.03);
    border-radius: 6px;
  }
  .thesis-label {
    font-size: 13px;
    color: oklch(74.98% 0.1407 87.06);
    font-weight: 600;
  }
  .thesis-text {
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78 / 0.75);
  }
</style>
