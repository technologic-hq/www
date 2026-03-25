<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Tri from "../primitives/Tri.svelte";

  const forces = [
    {
      n: "01",
      label: "Bandwidth solved",
      detail:
        "USB4/Thunderbolt 5. EU USB-C mandate April 2026.",
      accent: C.red,
    },
    {
      n: "02",
      label: "Regulation",
      detail:
        "EU Right to Repair mandatory July 2026. Six US states. Oregon banned parts pairing.",
      accent: C.yellow,
    },
    {
      n: "03",
      label: "Proven demand",
      detail:
        "Framework: 100K+ laptops, $45M raised. Fairphone: €54M revenue. Back Market: $5.7B valuation.",
      accent: C.white,
    },
    {
      n: "04",
      label: "Cost curves caught up",
      detail:
        "Miniaturization and component pricing make modular form factors viable at consumer price points.",
      accent: C.cream,
    },
  ];
</script>

<Slide bg={C.blue}>
  <Circ
    s={300}
    c={C.white}
    style="bottom: -140px; right: -100px; opacity: 0.04;"
  />
  <Tri s={40} c={C.yellow} style="top: 12%; right: 12%; opacity: 0.5;" />
  <Pad>
    <Label c={C.yellow}>Why Now</Label>
    <h2>The blockers that killed every previous attempt are gone.</h2>
    <div class="forces">
      {#each forces as item}
        <div class="force-row">
          <div class="force-number" style="background: {item.accent};">
            {item.n}
          </div>
          <div>
            <div class="force-label">{item.label}</div>
            <div class="force-detail">{item.detail}</div>
          </div>
        </div>
      {/each}
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.15;
    margin: 0 0 36px 0;
  }
  .forces {
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 580px;
  }
  .force-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .force-number {
    min-width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    color: oklch(42.99% 0.1083 257.76);
    border-radius: 4px;
    flex-shrink: 0;
  }
  .force-label {
    font-size: 15px;
    font-weight: 700;
    color: oklch(95.68% 0.012 79.78);
    margin-bottom: 3px;
  }
  .force-detail {
    font-size: 12px;
    color: oklch(95.68% 0.012 79.78 / 0.6);
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 26px;
    }
    .forces {
      max-width: 100%;
    }
    .force-detail {
      font-size: 11px;
    }
  }
</style>
