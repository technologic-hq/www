<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Tri from "../primitives/Tri.svelte";

  const streams = [
    {
      stream: "Device Sales",
      desc: "Base units at 40%+ gross margins",
      pct: 40,
      c: C.red,
    },
    {
      stream: "Module Sales",
      desc: "Upgrades, replacements, specialty components",
      pct: 30,
      c: C.blue,
    },
    {
      stream: "Licensing",
      desc: "Third-party certified modules, open spec revenue",
      pct: 20,
      c: C.yellow,
    },
    {
      stream: "Enterprise",
      desc: "Space agencies, industrial, defense",
      pct: 10,
      c: C.grey,
    },
  ];
</script>

<Slide bg={C.cream}>
  <Tri s={180} c={C.yellow} style="bottom: -50px; right: 8%; opacity: 0.08;" />
  <Pad>
    <Label c={C.red}>Business Model</Label>
    <h2>Compounding revenue, not replacement cycles.</h2>
    <div class="streams">
      {#each streams as item}
        <div class="stream-row">
          <div class="stream-header">
            <div>
              <span class="stream-name">{item.stream}</span>
              <span class="stream-desc">{item.desc}</span>
            </div>
            <span class="stream-pct" style="color: {item.c};">{item.pct}%</span>
          </div>
          <div class="bar-bg">
            <div
              class="bar-fill"
              style="width: {item.pct}%; background: {item.c};"
            ></div>
          </div>
        </div>
      {/each}
    </div>
    <div class="callouts">
      <div class="callout-dark">
        <span class="bold">LTV multiplier:</span> A customer upgrading modules for
        10 years is worth far more than a single device sale.
      </div>
      <div class="callout-border">
        <span class="bold">HaaS premium:</span> Hardware-as-a-Service earns 59% higher
        median revenue multiples.
      </div>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 30px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.15;
    margin: 0 0 32px 0;
  }
  .streams {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 540px;
  }
  .stream-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .stream-name {
    font-size: 14px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
  }
  .stream-desc {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    margin-left: 10px;
  }
  .stream-pct {
    font-size: 13px;
    font-weight: 700;
  }
  .bar-bg {
    width: 100%;
    height: 5px;
    background: oklch(87.73% 0.0229 87.16);
    border-radius: 3px;
  }
  .bar-fill {
    height: 100%;
    border-radius: 3px;
  }
  .callouts {
    margin-top: 28px;
    display: flex;
    gap: 20px;
    max-width: 540px;
  }
  .callout-dark {
    flex: 1;
    padding: 14px 18px;
    background: oklch(21.78% 0 0);
    border-radius: 6px;
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78);
    line-height: 1.5;
  }
  .callout-border {
    flex: 1;
    padding: 14px 18px;
    border: 2px solid oklch(21.78% 0 0);
    border-radius: 6px;
    font-size: 13px;
    color: oklch(21.78% 0 0);
    line-height: 1.5;
  }
  .bold {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
    .streams {
      max-width: 100%;
    }
    .stream-desc {
      display: none;
    }
    .callouts {
      flex-direction: column;
      max-width: 100%;
    }
  }
</style>
