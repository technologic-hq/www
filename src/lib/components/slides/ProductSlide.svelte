<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Rule from "../primitives/Rule.svelte";

  const modules = [
    { mod: "DAC", desc: "Swappable audio chipset" },
    { mod: "Storage", desc: "Expandable local media" },
    { mod: "Amp", desc: "Headphone amplifier" },
    { mod: "Wireless", desc: "Bluetooth · WiFi" },
    { mod: "Battery", desc: "Hot-swappable power" },
    { mod: "Display", desc: "Upgradeable screen" },
  ];
</script>

<Slide bg={C.cream}>
  <div class="right-wash"></div>
  <Circ s={10} c={C.red} style="top: 16%; right: 34%; opacity: 0.4;" />
  <Rule
    w={1}
    h={400}
    c={C.black}
    style="right: 30%; top: 20%; opacity: 0.06;"
  />
  <Pad>
    <Label c={C.yellow}>Proof of Concept</Label>
    <h2>The Player</h2>
    <p class="subtitle">
      The business is the interconnect platform. The Player proves it works.
      A modular digital audio player — retro form factor, modern architecture —
      built entirely on the standard to validate it across real components.
    </p>
    <div class="modules-grid">
      {#each modules as m}
        <div class="module-card">
          <div class="module-name">{m.mod}</div>
          <div class="module-desc">{m.desc}</div>
        </div>
      {/each}
    </div>
    <div class="price-row">
      <div>
        <div class="price-value">$800–$3,700</div>
        <div class="price-label">Premium DAP price points (Astell&Kern)</div>
      </div>
      <div>
        <div class="price-value">$107M</div>
        <div class="price-label">Portable DAP market</div>
      </div>
    </div>
    <div class="player-preview">
      <img src="/player-front.png" alt="Player front" class="preview-img" draggable="false" />
      <img src="/player-back.png" alt="Player back" class="preview-img" draggable="false" />
      <a href="/player" class="render-link">View 3D Render <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1); vertical-align: middle;"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>
    </div>
  </Pad>
</Slide>

<style>
  .right-wash {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
    background: oklch(74.98% 0.1407 87.06);
    opacity: 0.06;
  }
  h2 {
    font-size: 34px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.1;
    margin: 0 0 8px 0;
  }
  .subtitle {
    font-size: 14px;
    color: oklch(56.36% 0.0176 86.46);
    margin: 0 0 28px 0;
    line-height: 1.55;
    max-width: 400px;
  }
  .player-preview {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 10;
  }
  .preview-img {
    width: 180px;
    height: auto;
    border-radius: 8px;
    user-select: none;
    pointer-events: none;
  }
  .render-link {
    font-size: 12px;
    font-weight: 600;
    color: oklch(56.24% 0.1776 30.68);
    text-decoration: none;
    letter-spacing: 0.5px;
    padding: 10px 18px;
    border: 1px solid oklch(56.24% 0.1776 30.68 / 0.3);
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  .render-link:hover {
    background: oklch(56.24% 0.1776 30.68);
    color: oklch(95.68% 0.012 79.78);
  }
  .modules-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    max-width: 500px;
  }
  .module-card {
    padding: 12px 14px;
    background: oklch(95.68% 0.012 79.78);
    border: 1px solid oklch(87.73% 0.0229 87.16);
    border-radius: 6px;
  }
  .module-name {
    font-size: 12px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
    margin-bottom: 3px;
  }
  .module-desc {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.4;
  }
  .price-row {
    margin-top: auto;
    padding-top: 20px;
    display: flex;
    gap: 32px;
    max-width: 500px;
  }
  .price-value {
    font-size: 22px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
  }
  .price-label {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
  }

  @media (max-width: 767px) {
    .player-preview {
      position: relative;
      right: auto;
      top: auto;
      transform: none;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 16px;
    }
    .preview-img {
      width: 42%;
    }
    .right-wash {
      display: none;
    }
    h2 {
      font-size: 28px;
    }
    .subtitle {
      max-width: 100%;
    }
    .modules-grid {
      grid-template-columns: 1fr 1fr;
      max-width: 100%;
    }
    .price-row {
      flex-direction: column;
      gap: 16px;
      max-width: 100%;
    }
  }
</style>
