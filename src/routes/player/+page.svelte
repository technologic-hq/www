<script lang="ts">
  import { Canvas } from '@threlte/core';
  import PlayerScene from './PlayerScene.svelte';

  let isExploded = $state(false);
  let flipCount = $state(0);
  let selectedName: string | null = $state(null);

  const componentInfo: Record<string, { title: string; desc: string }> = {
    Screen: {
      title: 'OLED Display',
      desc: '2.8" 320x480 AMOLED. Deep blacks, 120Hz refresh. Swappable for e-ink variant.'
    },
    Breadboard: {
      title: 'Breadboard (Brain + Grid)',
      desc: 'RISC-V MCU, power management, and universal 4x5 connector grid. The heart of the device.'
    },
    DAC: {
      title: 'DAC Module',
      desc: 'ES9038Q2M chip. 32-bit/384kHz, -120dB THD+N. Swappable for different sound signatures.'
    },
    Amp: {
      title: 'Amplifier Module',
      desc: 'Class-A headphone amp. 150mW @ 32ohm. Drives any headphone from IEMs to planars.'
    },
    Battery: {
      title: 'Battery Module',
      desc: '4000mAh Li-Po. Hot-swappable with 30-second buffer. ~40 hours playback.'
    },
    Storage: {
      title: 'Storage Module',
      desc: 'NVMe slot, up to 2TB. High-speed USB4 transfer. Your entire FLAC library.'
    },
    Wireless: {
      title: 'Wireless Module',
      desc: 'Bluetooth 5.3 LE Audio + aptX Lossless. WiFi 6 for streaming. Antenna integrated.'
    },
    Speaker: {
      title: 'Front Speaker',
      desc: 'Balanced armature driver. Mono front-firing. For quick previews without headphones.'
    }
  };

  const legendItems = [
    { name: 'DAC', color: 'oklch(56.24% 0.1776 30.68)' },
    { name: 'Amp', color: 'oklch(42.99% 0.1083 257.76)' },
    { name: 'Battery', color: 'oklch(74.98% 0.1407 87.06)' },
    { name: 'Storage', color: 'oklch(42.99% 0.06 150)' },
    { name: 'Wireless', color: 'oklch(28.43% 0.0036 106.63)' },
    { name: 'Speaker', color: 'oklch(35% 0.02 250)' },
    { name: 'Screen', color: 'oklch(21.78% 0 0)' },
    { name: 'Breadboard', color: 'oklch(56.36% 0.0176 86.46)' }
  ];

  function toggleSelect(name: string) {
    selectedName = selectedName === name ? null : name;
  }

  function toggleExplode() {
    isExploded = !isExploded;
  }

  function flipDevice() {
    flipCount++;
  }

  let selected = $derived(selectedName ? componentInfo[selectedName] : null);
</script>

<svelte:head>
  <title>Technologic Player — Concept Render</title>
</svelte:head>

<div class="player-page">
  <div class="canvas-container">
    <Canvas>
      <PlayerScene {isExploded} {flipCount} {selectedName} />
    </Canvas>
  </div>

  <div class="ui-overlay" class:hidden-mobile={selected}>
    <div class="logo">Technologic</div>
    <div class="tagline">The Player — Concept Render</div>
  </div>

  <div class="controls-hint">
    Drag to rotate<br />
    Scroll to zoom
  </div>

  <div class="btn-group">
    <button class="view-btn" class:active={isExploded} onclick={toggleExplode}>
      {isExploded ? 'Collapse' : 'Explode'}
    </button>
    <button class="view-btn" onclick={flipDevice}>Flip</button>
  </div>

  {#if selected}
    <div class="selection-info">
      <h3>{selected.title}</h3>
      <p>{selected.desc}</p>
    </div>
  {/if}

  <div class="module-info">
    {#each legendItems as item}
      <button
        class="module-tag"
        class:selected={selectedName === item.name}
        style="--dot-color: {item.color};"
        onclick={() => toggleSelect(item.name)}
      >
        <div class="module-dot"></div>
        {item.name}
      </button>
    {/each}
  </div>
</div>

<style>
  .player-page {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: oklch(86% 0.012 79.78);
    font-family: 'Roboto Flex', sans-serif;
  }

  .canvas-container {
    position: absolute;
    inset: 0;
    cursor: grab;
  }

  .canvas-container:active {
    cursor: grabbing;
  }

  .ui-overlay {
    position: absolute;
    top: 24px;
    left: 24px;
    color: oklch(21.78% 0 0);
    z-index: 100;
    pointer-events: none;
  }

  .logo {
    font-size: 28px;
    font-variation-settings: 'wght' 1000, 'wdth' 151;
    letter-spacing: -1px;
    margin-bottom: 4px;
  }

  .tagline {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: oklch(21.78% 0 0 / 0.8);
    font-weight: 400;
  }

  .module-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 160px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    z-index: 100;
  }

  .module-tag {
    background: color-mix(in srgb, var(--dot-color) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--dot-color) 25%, transparent);
    padding: 6px 12px;
    border-radius: 4px;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 11px;
    letter-spacing: 0.5px;
    color: oklch(21.78% 0 0 / 0.85);
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .module-tag:hover {
    border-color: color-mix(in srgb, var(--dot-color) 50%, transparent);
    color: oklch(21.78% 0 0);
  }

  .module-tag.selected {
    background: var(--dot-color);
    border-color: var(--dot-color);
    color: oklch(100% 0 0);
  }

  .module-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--dot-color);
  }

  .controls-hint {
    position: absolute;
    top: 24px;
    right: 24px;
    color: oklch(21.78% 0 0 / 0.8);
    font-size: 10px;
    letter-spacing: 1px;
    text-align: right;
    z-index: 100;
    pointer-events: none;
  }

  .btn-group {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 6px;
    z-index: 100;
  }

  .view-btn {
    border: 1px solid oklch(21.78% 0 0 / 0.15);
    background: oklch(21.78% 0 0);
    padding: 6px 16px;
    border-radius: 4px;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 11px;
    letter-spacing: 0.5px;
    color: oklch(95.68% 0.012 79.78 / 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .view-btn:hover {
    background: oklch(28% 0 0);
    color: oklch(95.68% 0.012 79.78);
  }

  .view-btn.active {
    background: oklch(56.24% 0.1776 30.68);
    border-color: oklch(56.24% 0.1776 30.68);
    color: oklch(100% 0 0);
  }

  .selection-info {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background: oklch(100% 0 0 / 0.85);
    border: 1px solid oklch(21.78% 0 0 / 0.1);
    padding: 14px 18px;
    border-radius: 6px;
    color: oklch(21.78% 0 0);
    font-size: 12px;
    z-index: 100;
    min-width: 180px;
    max-width: 220px;
  }

  .selection-info h3 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 6px;
    color: oklch(56.24% 0.1776 30.68);
  }

  .selection-info p {
    color: oklch(21.78% 0 0 / 0.6);
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    .module-info {
      right: 20px;
      bottom: 60px;
    }

    .btn-group {
      bottom: 16px;
      right: 16px;
    }

    .ui-overlay {
      top: 16px;
      left: 16px;
    }

    .controls-hint {
      display: none;
    }

    .selection-info {
      top: 16px;
      left: 16px;
      right: auto;
      bottom: auto;
      transform: none;
      max-width: 220px;
    }

    .hidden-mobile {
      display: none;
    }

    .logo {
      font-size: 22px;
    }
  }
</style>
