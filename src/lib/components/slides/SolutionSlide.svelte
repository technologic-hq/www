<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Circ from "../primitives/Circ.svelte";
</script>

<Slide bg={C.cream}>
  <Circ s={140} c={C.yellow} style="right: 3%; bottom: 5%; opacity: 0.12;" />
  <Pad>
    <Label c={C.red}>The Solution</Label>
    <h2>The Link</h2>
    <p class="subtitle">
      An open interconnect standard for modular electronics.
    </p>
    <div class="comp">
      The comp isn't Framework. It's USB-IF or Bluetooth SIG, except we ship
      first-party hardware to bootstrap the ecosystem.
    </div>
    <div class="spec-row">
      <div class="spec-card">
        <div class="spec-label">Data</div>
        <div class="spec-value">USB4</div>
        <div class="spec-detail">40 Gbps</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Power</div>
        <div class="spec-value">USB-PD</div>
        <div class="spec-detail">Up to 240W</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Connect</div>
        <div class="spec-value">Magnetic</div>
        <div class="spec-detail">Pogo pin array</div>
      </div>
      <div class="spec-card">
        <div class="spec-label">Protocol</div>
        <div class="spec-value">Hot-swap</div>
        <div class="spec-detail">Module ID + detection</div>
      </div>
    </div>
    <div class="form-factors">
      <div class="ff">
        <span class="ff-size">S</span>
        <span class="ff-name">Wearable</span>
      </div>
      <div class="ff">
        <span class="ff-size">M</span>
        <span class="ff-name">Handheld</span>
      </div>
      <div class="ff">
        <span class="ff-size">L</span>
        <span class="ff-name">Appliance</span>
      </div>
    </div>
    <div class="flywheel">
      First-party hardware → third-party modules → more categories → licensing
      revenue that grows whether or not we sell more devices.
    </div>
    <div class="board-note">
      Building this board is what the pre-seed funds.
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 42px;
    font-variation-settings:
      "wght" 1000,
      "wdth" 151;
    color: oklch(21.78% 0 0);
    line-height: 1;
    margin: 0 0 6px 0;
    letter-spacing: -1px;
  }
  .subtitle {
    font-size: 16px;
    color: oklch(56.36% 0.0176 86.46);
    margin: 0 0 20px 0;
    line-height: 1.5;
  }
  .comp {
    font-size: 14px;
    color: oklch(21.78% 0 0);
    line-height: 1.6;
    max-width: 500px;
    margin-bottom: 28px;
    font-weight: 500;
  }
  .spec-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    max-width: 540px;
  }
  .spec-card {
    flex: 1;
    padding: 14px 16px;
    background: oklch(95.68% 0.012 79.78);
    border: 1px solid oklch(87.73% 0.0229 87.16);
    border-radius: 6px;
  }
  .spec-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 4px;
    font-weight: 600;
  }
  .spec-value {
    font-size: 18px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.2;
  }
  .spec-detail {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    margin-top: 2px;
  }
  .form-factors {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
  }
  .ff {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ff-size {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    color: oklch(95.68% 0.012 79.78);
    background: oklch(56.24% 0.1776 30.68);
    border-radius: 4px;
  }
  .ff-name {
    font-size: 12px;
    color: oklch(56.36% 0.0176 86.46);
  }
  .flywheel {
    font-size: 13px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 12px;
  }
  .board-note {
    font-size: 13px;
    color: oklch(56.24% 0.1776 30.68);
    font-weight: 700;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 34px;
    }
    .spec-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 100%;
    }
    .subtitle {
      max-width: 100%;
    }
  }
</style>
