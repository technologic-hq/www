<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import ArrowIcon from "../ArrowIcon.svelte";

  const modules = [
    { mod: "DAC", desc: "Swappable audio chipset" },
    { mod: "Storage", desc: "Swappable NVMe" },
    { mod: "Amp", desc: "Headphone amplifier" },
    { mod: "Wireless", desc: "Bluetooth · WiFi" },
    { mod: "Battery", desc: "Hot-swappable power" },
    { mod: "Display", desc: "Upgradeable screen" },
  ];
</script>

<Slide bg={C.cream}>
  <div class="right-wash"></div>
  <Circ s={10} c={C.red} style="top: 16%; right: 34%; opacity: 0.4;" />
  <Pad>
    <Label c={C.yellow}>First Product</Label>
    <h2>The Player</h2>
    <p class="subtitle">
      Modular digital audio player. The beachhead that proves The Link works.
      Every component hot-swappable: DAC, amp, storage, battery, wireless,
      display.
    </p>
    <div class="modules-grid">
      {#each modules as m}
        <div class="module-card">
          <div class="module-name">{m.mod}</div>
          <div class="module-desc">{m.desc}</div>
        </div>
      {/each}
    </div>
    <div class="why-daps">
      <div class="why-label">Why DAPs:</div>
      <div class="why-text">
        Audiophiles obsess over components. Vinyl revival proved retro +
        quality = demand. No modular option exists.
      </div>
    </div>
    <div class="price-row">
      <div>
        <div class="price-value">$199–$599</div>
        <div class="price-label">Base to Enthusiast configs, 75–84% margin</div>
      </div>
      <div>
        <div class="price-value">$350+</div>
        <div class="price-label">LTV from $199 customer over 18 months</div>
      </div>
    </div>
    <div class="player-preview">
      <img
        src="/player-front.png"
        alt="Player front"
        class="preview-img front"
        draggable="false"
      />
      <img
        src="/player-exploded.png"
        alt="Player exploded view showing modular components"
        class="preview-img exploded"
        draggable="false"
      />
      <img
        src="/player-back.png"
        alt="Player back"
        class="preview-img back"
        draggable="false"
      />
      <a href="/player" class="render-link">View 3D Render <span class="render-arrow"><ArrowIcon direction="right" /></span></a>
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
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    width: 240px;
  }
  .preview-img {
    width: 100px;
    height: auto;
    border-radius: 6px;
    user-select: none;
    pointer-events: none;
  }
  .preview-img.front {
    align-self: flex-start;
    z-index: 1;
  }
  .preview-img.exploded {
    width: 170px;
    margin-top: -36px;
    margin-bottom: 10px;
    z-index: 2;
    align-self: center;
    border-radius: 0;
  }
  .preview-img.back {
    align-self: flex-end;
    z-index: 1;
  }
  .render-link {
    font-size: 12px;
    font-weight: 700;
    font-family: "Roboto Flex", sans-serif;
    color: oklch(95.68% 0.012 79.78);
    background: oklch(56.24% 0.1776 30.68);
    text-decoration: none;
    letter-spacing: 0.5px;
    padding: 8px 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;
  }
  .render-link:hover {
    opacity: 0.9;
  }
  .render-arrow {
    display: inline-flex;
    vertical-align: middle;
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
  .why-daps {
    margin-top: 16px;
    margin-bottom: 8px;
    max-width: 400px;
  }
  .why-label {
    font-size: 10px;
    font-weight: 700;
    color: oklch(56.24% 0.1776 30.68);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .why-text {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.5;
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
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      width: 100%;
    }
    .render-link {
      width: auto;
      margin-top: 12px;
    }
    .preview-img {
      width: 26%;
    }
    .preview-img.front,
    .preview-img.back {
      align-self: center;
    }
    .preview-img.exploded {
      width: 34%;
      margin-top: 0;
      margin-bottom: 0;
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
