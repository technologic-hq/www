<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";

  const experience = [
    {
      role: "Sole Mobile Engineer",
      co: "Curio",
      desc: "AI hardware startup. ESP32-based interactive toys. Shipped production firmware and app.",
      c: C.red,
    },
    {
      role: "First Employee",
      co: "Trufflepig",
      desc: "Spreadsheet startup. Built the product from zero as first hire.",
      c: C.yellow,
    },
    {
      role: "VR Development",
      co: "Independent",
      desc: "Immersive education prototypes. Designed a VR-based school replacing lectures with lived experience.",
      c: C.blue,
    },
  ];

  const hires = [
    "Hardware engineering lead",
    "Industrial designer",
    "Firmware engineer",
    "Community lead",
  ];
</script>

<Slide bg={C.black}>
  <Circ s={300} c={C.blue} style="top: -120px; left: -120px; opacity: 0.06;" />
  <Sq s={20} c={C.yellow} style="bottom: 18%; right: 10%; opacity: 0.4;" />
  <Pad>
    <Label c={C.yellow}>Founder</Label>
    <h2>Suhit Agarwal</h2>
    <div class="subtitle">24 &middot; Software & Design Engineer</div>
    <div class="two-col">
      <div class="exp-col">
        {#each experience as item}
          <div class="exp-item" style="border-left: 3px solid {item.c};">
            <div class="exp-role">{item.role}</div>
            <div class="exp-co" style="color: {item.c};">{item.co}</div>
            <div class="exp-desc">{item.desc}</div>
          </div>
        {/each}
      </div>
      <div class="info-col">
        <div class="hires-label">Key hires needed</div>
        {#each hires as h}
          <div class="hire-item">{h}</div>
        {/each}
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 32px;
    font-weight: 800;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.1;
    margin: 0 0 8px 0;
  }
  .subtitle {
    font-size: 14px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 28px;
  }
  .two-col {
    display: flex;
    gap: 32px;
    max-width: 580px;
  }
  .exp-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .exp-item {
    padding-left: 14px;
  }
  .exp-role {
    font-size: 13px;
    font-weight: 700;
    color: oklch(95.68% 0.012 79.78);
  }
  .exp-co {
    font-size: 11px;
    margin-top: 2px;
  }
  .exp-desc {
    font-size: 11px;
    color: oklch(95.68% 0.012 79.78 / 0.45);
    margin-top: 4px;
    line-height: 1.5;
  }
  .info-col {
    flex: 1;
  }
  .hires-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 8px;
  }
  .hire-item {
    font-size: 11px;
    color: oklch(95.68% 0.012 79.78 / 0.4);
    margin-bottom: 4px;
  }
</style>
