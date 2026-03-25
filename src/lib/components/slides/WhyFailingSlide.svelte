<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";

  const failures = [
    {
      name: "Modu",
      yr: "2007–11",
      result: "Too early. Components too large.",
    },
    {
      name: "Project Ara",
      yr: "2013–16",
      result: "50–100% module premium. Interfaces too slow.",
    },
    {
      name: "PuzzlePhone",
      yr: "2014–17",
      result: "Barely shipped.",
    },
    {
      name: "LG G5",
      yr: "2016",
      result: "Two modules. Needed to sell new phones.",
    },
    {
      name: "Moto Z",
      yr: "2016–18",
      result: "14 Moto Mods. Ecosystem died. Needed upgrade cycles.",
    },
    {
      name: "Essential",
      yr: "2017–20",
      result:
        "Failed as a phone, not as a modular concept.",
    },
    {
      name: "Palm",
      yr: "2009–11",
      result:
        "Beloved product, beloved OS. HP acquired it, new CEO killed it in 49 days.",
    },
  ];
</script>

<Slide bg={C.white}>
  <Pad>
    <Label c={C.blue}>The Graveyard</Label>
    <h2>
      Every modular attempt has failed.<br />
      None failed because consumers rejected modularity.
    </h2>
    <div class="failures">
      {#each failures as item}
        <div class="failure-row">
          <div class="dot"></div>
          <span class="name">{item.name}</span>
          <span class="year">{item.yr}</span>
          <span class="result">{item.result}</span>
        </div>
      {/each}
    </div>
    <div class="patterns">
      <div class="pattern-row">
        <span class="pattern-label">Pattern 1:</span>
        <span class="pattern-text">Tech wasn't ready</span>
        <span class="pattern-detail"
          >(bandwidth, miniaturization, cost)</span
        >
      </div>
      <div class="pattern-row">
        <span class="pattern-label">Pattern 2:</span>
        <span class="pattern-text"
          >Corporate incentives killed the product</span
        >
        <span class="pattern-detail"
          >(upgrade cycles, acquisitions, strategic pivots)</span
        >
      </div>
    </div>
    <div class="callout">
      <p>
        Framework finally ran the experiment right. Independent, no conflicts.
        100K+ laptops. $45M raised. Genuinely loved. But it's one category, one
        company. <strong>The venture-scale outcome isn't another device company.
        It's the standard.</strong>
      </p>
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 26px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.2;
    margin: 0 0 20px 0;
  }
  .failures {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 620px;
  }
  .failure-row {
    display: flex;
    align-items: baseline;
    gap: 0;
    border-bottom: 1px solid oklch(87.73% 0.0229 87.16);
    padding-bottom: 6px;
  }
  .failure-row:last-child {
    border-bottom: none;
  }
  .dot {
    min-width: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: oklch(56.36% 0.0176 86.46);
    margin-top: 5px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .name {
    font-size: 12px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
    min-width: 90px;
    flex-shrink: 0;
  }
  .year {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    min-width: 56px;
    flex-shrink: 0;
  }
  .result {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.4;
    margin-left: 12px;
  }
  .patterns {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 620px;
  }
  .pattern-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 12px;
  }
  .pattern-label {
    font-weight: 700;
    color: oklch(56.24% 0.1776 30.68);
    flex-shrink: 0;
  }
  .pattern-text {
    font-weight: 600;
    color: oklch(21.78% 0 0);
  }
  .pattern-detail {
    color: oklch(56.36% 0.0176 86.46);
  }
  .callout {
    margin-top: 16px;
    padding: 14px 18px;
    background: oklch(21.78% 0 0);
    border-radius: 6px;
    max-width: 620px;
  }
  .callout p {
    font-size: 13px;
    color: oklch(95.68% 0.012 79.78);
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 22px;
    }
    .failures {
      max-width: 100%;
    }
    .failure-row {
      flex-wrap: wrap;
    }
    .name-col {
      min-width: auto;
    }
    .callout {
      max-width: 100%;
    }
  }
</style>
