<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";


  const years = ["Yr 0", "Yr 2", "Yr 4", "Yr 6", "Yr 8", "10-yr total"];
  const traditional = ["$300", "$300", "$350", "$350", "$400", "$1,700"];
  const modular = ["$300", "$80", "$100", "$80", "$120", "$680"];
</script>

<Slide bg={C.white}>
  <Pad>
    <Label c={C.red}>Value Proposition</Label>
    <h2>60% lower cost of ownership over a decade.</h2>
    <div class="table-wrap">
      <div class="table">
        <div class="row header">
          <div class="cell label-cell"></div>
          {#each years as yr, i}
            <div class="cell" class:total={i === years.length - 1}>{yr}</div>
          {/each}
        </div>
        <div class="row traditional">
          <div class="cell label-cell">Traditional</div>
          {#each traditional as val, i}
            <div class="cell" class:total={i === traditional.length - 1}>
              {val}
            </div>
          {/each}
        </div>
        <div class="row modular">
          <div class="cell label-cell">Modular</div>
          {#each modular as val, i}
            <div class="cell" class:total={i === modular.length - 1}>{val}</div>
          {/each}
        </div>
      </div>
    </div>
    <div class="savings-bar">
      <div class="savings-visual">
        <div class="bar trad-bar">
          <span class="bar-label">Traditional</span>
          <span class="bar-value">$1,700</span>
        </div>
        <div class="bar mod-bar">
          <span class="bar-label">Modular</span>
          <span class="bar-value">$680</span>
        </div>
      </div>
    </div>
    <div class="footnote">
      Cheaper devices move units. More units mean more people building on The Link. That's when licensing kicks in.
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
  .table-wrap {
    max-width: 620px;
    margin-bottom: 32px;
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
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
  .cell {
    flex: 1;
    padding: 10px 8px;
    font-size: 14px;
    color: oklch(21.78% 0 0);
    text-align: center;
  }
  .cell.label-cell {
    flex: 1.2;
    text-align: left;
    font-weight: 700;
    font-size: 13px;
  }
  .cell.total {
    font-weight: 800;
    color: oklch(56.24% 0.1776 30.68);
  }
  .row.traditional .cell.label-cell {
    color: oklch(56.36% 0.0176 86.46);
  }
  .row.modular .cell.label-cell {
    color: oklch(21.78% 0 0);
  }
  .savings-bar {
    max-width: 500px;
    margin-bottom: 28px;
  }
  .savings-visual {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .bar {
    height: 28px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  }
  .trad-bar {
    width: 100%;
    background: oklch(56.36% 0.0176 86.46 / 0.15);
  }
  .mod-bar {
    width: 40%;
    background: oklch(56.24% 0.1776 30.68 / 0.15);
    border: 1px solid oklch(56.24% 0.1776 30.68 / 0.3);
  }
  .bar-label {
    font-size: 10px;
    font-weight: 600;
    color: oklch(21.78% 0 0);
  }
  .bar-value {
    font-size: 12px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
  }

  .footnote {
    margin-top: auto;
    padding-top: 12px;
    font-size: 13px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.6;
    max-width: 500px;
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
    .savings-bar {
      max-width: 100%;
    }
  }
</style>
