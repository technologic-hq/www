<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";

  const rows = [
    {
      label: "Flagship, every cycle",
      detail: "~$940 avg device, replace every 2-3 yrs",
      devices: "3-4",
      decade: "$2,800-3,700",
    },
    {
      label: "Budget, stretch and replace",
      detail: "~$380 avg device, replace every 3-4 yrs",
      devices: "2-3",
      decade: "$760-1,140",
    },
    {
      label: "Modular, upgrade the part",
      detail: "~$300 base + module swaps",
      devices: "1",
      decade: "~$680",
      highlight: true,
    },
  ];
</script>

<Slide bg={C.white}>
  <Pad>
    <Label c={C.red}>Value Proposition</Label>
    <h2>What the average US consumer actually spends.</h2>
    <div class="table-wrap">
      <div class="table">
        <div class="row header">
          <div class="cell label-cell"></div>
          <div class="cell">Avg device</div>
          <div class="cell">Devices / decade</div>
          <div class="cell">10-yr cost</div>
        </div>
        {#each rows as row}
          <div class="row" class:highlight={row.highlight}>
            <div class="cell label-cell">
              <div class="row-label">{row.label}</div>
              <div class="row-detail">{row.detail}</div>
            </div>
            <div class="cell">{row.label === "Modular, upgrade the part" ? "$300" : row.detail.includes("940") ? "$940" : "$380"}</div>
            <div class="cell">{row.devices}</div>
            <div class="cell cost">{row.decade}</div>
          </div>
        {/each}
      </div>
    </div>
    <div class="footnote">
      Cheaper devices move units. More units mean more people building on The Link. That's when licensing kicks in.
    </div>
    <div class="source">Sources: CIRP 2024, Counterpoint Research 2025, Verizon 2025</div>
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
  .table-wrap {
    max-width: 640px;
    margin-bottom: 28px;
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid oklch(87.73% 0.0229 87.16);
  }
  .row.header {
    border-bottom: 2px solid oklch(21.78% 0 0);
  }
  .row.header .cell {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: oklch(56.36% 0.0176 86.46);
    font-weight: 600;
  }
  .row.highlight {
    background: oklch(56.24% 0.1776 30.68 / 0.06);
  }
  .cell {
    flex: 1;
    padding: 12px 8px;
    font-size: 14px;
    color: oklch(21.78% 0 0);
    text-align: center;
  }
  .cell.label-cell {
    flex: 2;
    text-align: left;
  }
  .row-label {
    font-size: 14px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
  }
  .row-detail {
    font-size: 11px;
    color: oklch(56.36% 0.0176 86.46);
    margin-top: 2px;
  }
  .cell.cost {
    font-weight: 800;
  }
  .row.highlight .cell.cost {
    color: oklch(56.24% 0.1776 30.68);
  }
  .footnote {
    margin-top: auto;
    padding-top: 12px;
    font-size: 13px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.6;
    max-width: 500px;
  }
  .source {
    font-size: 9px;
    color: oklch(56.36% 0.0176 86.46);
    opacity: 0.5;
    margin-top: 8px;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
    .table-wrap {
      max-width: 100%;
      overflow-x: auto;
    }
    .cell {
      font-size: 12px;
      padding: 8px 4px;
    }
    .row-label {
      font-size: 12px;
    }
    .row-detail {
      font-size: 10px;
    }
  }
</style>
