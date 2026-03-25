<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Tri from "../primitives/Tri.svelte";

  const specs = [
    "Magnetic pogo pin array",
    "USB4 data (40Gbps)",
    "USB-PD power (up to 240W)",
    "Module ID and hot-swap protocol layer",
  ];

  const formFactors = [
    { label: "S", desc: "Wearable" },
    { label: "M", desc: "Handheld" },
    { label: "L", desc: "Appliance" },
  ];
</script>

<Slide bg={C.cream}>
  <div class="border-box"></div>
  <Circ s={140} c={C.yellow} style="right: 3%; bottom: 5%; opacity: 0.12;" />
  <Tri s={50} c={C.blue} style="right: 28%; top: 18%; opacity: 0.15;" />
  <Pad>
    <Label c={C.red}>The Solution</Label>
    <h2>TechLink</h2>
    <p class="subtitle">
      An open interconnect standard for modular electronics. One standard across
      device categories. The comp isn't Framework — it's USB-IF or Bluetooth SIG,
      except shipping first-party hardware to bootstrap the ecosystem.
    </p>
    <div class="two-col">
      <div class="spec-col">
        <div class="section-label">Target spec</div>
        <div class="spec-list">
          {#each specs as spec}
            <div class="spec-item">{spec}</div>
          {/each}
        </div>
        <div class="form-factors">
          {#each formFactors as ff}
            <div class="ff-tag">
              <span class="ff-label">{ff.label}</span>
              <span class="ff-desc">{ff.desc}</span>
            </div>
          {/each}
        </div>
        <div class="board-note">
          Building this board is what the pre-seed funds.
        </div>
      </div>
      <div class="proto-col">
        <div class="section-label">Current prototype</div>
        <div class="proto-detail">
          Simplified I2C/SPI with resistor-based module ID. Validates snap-on,
          hot-swap, and detection today.
        </div>
        <div class="flywheel">
          <div class="section-label">Flywheel</div>
          <div class="flywheel-text">
            First-party hardware → third-party modules → more categories →
            licensing revenue scales independently of device sales.
          </div>
        </div>
      </div>
    </div>
  </Pad>
</Slide>

<style>
  .border-box {
    position: absolute;
    right: 6%;
    top: 8%;
    width: 140px;
    height: 140px;
    border: 4px solid oklch(56.24% 0.1776 30.68);
    border-radius: 12px;
    opacity: 0.15;
  }
  h2 {
    font-size: 36px;
    font-variation-settings:
      "wght" 1000,
      "wdth" 151;
    color: oklch(21.78% 0 0);
    line-height: 1;
    margin: 0 0 8px 0;
    letter-spacing: -1px;
  }
  .subtitle {
    font-size: 14px;
    color: oklch(56.36% 0.0176 86.46);
    margin: 0 0 28px 0;
    line-height: 1.55;
    max-width: 480px;
  }
  .two-col {
    display: flex;
    gap: 32px;
    max-width: 580px;
  }
  .spec-col,
  .proto-col {
    flex: 1;
  }
  .section-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 10px;
    font-weight: 600;
  }
  .spec-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }
  .spec-item {
    font-size: 12px;
    color: oklch(21.78% 0 0);
    padding-left: 12px;
    border-left: 2px solid oklch(56.24% 0.1776 30.68);
    line-height: 1.4;
  }
  .form-factors {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
  .ff-tag {
    padding: 6px 12px;
    background: oklch(95.68% 0.012 79.78);
    border: 1px solid oklch(87.73% 0.0229 87.16);
    border-radius: 6px;
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .ff-label {
    font-size: 13px;
    font-weight: 800;
    color: oklch(56.24% 0.1776 30.68);
  }
  .ff-desc {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
  }
  .board-note {
    font-size: 11px;
    color: oklch(56.24% 0.1776 30.68);
    font-weight: 600;
  }
  .proto-detail {
    font-size: 12px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .flywheel {
    padding: 14px 16px;
    background: oklch(21.78% 0 0);
    border-radius: 6px;
  }
  .flywheel .section-label {
    color: oklch(74.98% 0.1407 87.06);
    margin-bottom: 6px;
  }
  .flywheel-text {
    font-size: 12px;
    color: oklch(95.68% 0.012 79.78 / 0.7);
    line-height: 1.6;
  }

  @media (max-width: 767px) {
    .border-box {
      display: none;
    }
    .two-col {
      flex-direction: column;
      max-width: 100%;
    }
    .subtitle {
      max-width: 100%;
    }
  }
</style>
