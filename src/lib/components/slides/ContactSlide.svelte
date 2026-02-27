<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Circ from "../primitives/Circ.svelte";
  import Sq from "../primitives/Sq.svelte";
  import Tri from "../primitives/Tri.svelte";
  import Logo from "../Logo.svelte";
</script>

<Slide bg={C.cream}>
  <div class="right-panel"></div>
  <Circ s={160} c={C.red} style="right: 26%; top: 15%; z-index: 1;" />
  <Sq s={100} c={C.blue} style="right: 8%; bottom: 18%; z-index: 1;" />
  <Tri s={80} c={C.yellow} style="right: 18%; bottom: 40%; z-index: 1;" />
  <Pad style="justify-content: center;">
    <div class="content">
      <div class="logo"><Logo size={64} /></div>
      <h1>Technologic</h1>
      <div class="accent-bar"></div>
      <div class="name">Suhit Agarwal</div>
      <div class="contact">
        <a href="mailto:suhit@technologic.computer" class="email-link">suhit@technologic.computer</a><br />
        San Francisco, CA
      </div>
      <div class="tagline">Modular electronics for Earth and beyond.</div>
    </div>
  </Pad>
</Slide>

<style>
  .right-panel {
    position: absolute;
    right: 0;
    top: 0;
    width: 38%;
    height: 100%;
    background: oklch(21.78% 0 0);
  }
  .content {
    max-width: 55%;
  }
  .logo {
    margin-bottom: 10px;
  }
  h1 {
    font-size: 42px;
    font-variation-settings:
      "wght" 1000,
      "wdth" 151;
    color: oklch(21.78% 0 0);
    line-height: 1;
    margin: 0;
    letter-spacing: -1px;
  }
  .accent-bar {
    width: 36px;
    height: 3px;
    background: oklch(56.24% 0.1776 30.68);
    margin: 18px 0;
    border-radius: 2px;
  }
  .name {
    font-size: 15px;
    color: oklch(21.78% 0 0);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .contact {
    font-size: 13px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.8;
  }
  .email-link {
    color: inherit;
    text-decoration: none;
  }
  .email-link:hover {
    text-decoration: underline;
  }
  .tagline {
    margin-top: 20px;
    font-size: 13px;
    color: oklch(56.36% 0.0176 86.46);
    font-style: italic;
  }

  @media (max-width: 767px) {
    .right-panel {
      display: none;
    }
    .content {
      max-width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-size: 34px;
    }
  }
</style>
