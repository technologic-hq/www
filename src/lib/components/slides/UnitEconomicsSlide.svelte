<script lang="ts">
  import { C } from "$lib/data/colors";
  import Slide from "../Slide.svelte";
  import Pad from "../Pad.svelte";
  import Label from "../Label.svelte";
  import Rule from "../primitives/Rule.svelte";

  const bom = [
    { component: "DAC module", part: "ESS ES9038Q2M (32-bit Sabre)", cost: "$5–8" },
    { component: "Headphone amp", part: "ESS ES9602C or discrete Class AB", cost: "$3–5" },
    { component: "Wireless module", part: "ESP32-S3 (WiFi + BT 5.0)", cost: "$2–3" },
    { component: "Display", part: '1.3" OLED 128x64 (SH1106)', cost: "$2–4" },
    { component: "Storage", part: "microSD slot + controller IC", cost: "$1" },
    { component: "Battery", part: "3,500mAh Li-Po cell + BMS", cost: "$4–6" },
    { component: "TechLink interconnect", part: "Custom multi-layer PCB + connectors", cost: "$10–15" },
    { component: "Enclosure", part: "CNC aluminum / injection mold", cost: "$12–20" },
    { component: "Passives + misc", part: "USB-C, buttons, capacitors, etc.", cost: "$3–5" },
    { component: "Assembly", part: "Contract manufacturing (Shenzhen)", cost: "$8–12" },
  ];

  const configs = [
    { name: "Base", detail: "ES9038Q2M DAC, 3.5mm, 32GB, BT/WiFi", price: "$199", bom: "~$50", margin: "~75%" },
    { name: "Plus", detail: "Balanced 4.4mm, 128GB, display upgrade", price: "$349", bom: "~$70", margin: "~80%" },
    { name: "Enthusiast", detail: "Dual DAC, balanced, 256GB, full set", price: "$599", bom: "~$95", margin: "~84%" },
  ];
</script>

<Slide bg={C.white}>
  <Rule w="100%" h={1} c={C.red} style="top: 8%; opacity: 0.08;" />
  <Pad>
    <Label c={C.red}>Unit Economics</Label>
    <h2>What The Player costs to build.</h2>
    <div class="layout">
      <div class="bom-col">
        <div class="section-header">Base unit BOM at 1,000 units</div>
        <div class="bom-table">
          {#each bom as item}
            <div class="bom-row">
              <span class="bom-component">{item.component}</span>
              <span class="bom-cost">{item.cost}</span>
            </div>
          {/each}
          <div class="bom-row total">
            <span class="bom-component">Total BOM</span>
            <span class="bom-cost">$50–79</span>
          </div>
        </div>
      </div>
      <div class="pricing-col">
        <div class="section-header">Pricing architecture</div>
        {#each configs as cfg}
          <div class="config-card">
            <div class="config-header">
              <span class="config-name">{cfg.name}</span>
              <span class="config-price">{cfg.price}</span>
            </div>
            <div class="config-detail">{cfg.detail}</div>
            <div class="config-metrics">
              <span>BOM {cfg.bom}</span>
              <span>Margin {cfg.margin}</span>
            </div>
          </div>
        {/each}
        <div class="upsell">
          Module upsells after purchase: DAC swaps ($49–99), amp upgrades ($59–149), storage ($29–79). A $199 customer upgrading 2 modules = $350+ LTV.
        </div>
      </div>
    </div>
    <div class="footnote">
      BOM drops 25–35% at 5K units. Estimates at 1K MOQ; requires engineering validation.
    </div>
  </Pad>
</Slide>

<style>
  h2 {
    font-size: 28px;
    font-weight: 800;
    color: oklch(21.78% 0 0);
    line-height: 1.15;
    margin: 0 0 24px 0;
  }
  .layout {
    display: flex;
    gap: 28px;
    max-width: 680px;
  }
  .bom-col {
    flex: 1;
    min-width: 0;
  }
  .pricing-col {
    flex: 1;
    min-width: 0;
  }
  .section-header {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: oklch(56.36% 0.0176 86.46);
    margin-bottom: 10px;
  }
  .bom-table {
    display: flex;
    flex-direction: column;
  }
  .bom-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 0;
    border-bottom: 1px solid oklch(87.73% 0.0229 87.16 / 0.6);
  }
  .bom-row.total {
    border-bottom: none;
    border-top: 2px solid oklch(21.78% 0 0);
    margin-top: 2px;
    padding-top: 6px;
  }
  .bom-component {
    font-size: 10px;
    color: oklch(21.78% 0 0);
  }
  .bom-row.total .bom-component,
  .bom-row.total .bom-cost {
    font-weight: 800;
    font-size: 11px;
  }
  .bom-cost {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    font-weight: 600;
    text-align: right;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .config-card {
    padding: 10px 12px;
    background: oklch(95.68% 0.012 79.78);
    border: 1px solid oklch(87.73% 0.0229 87.16);
    border-radius: 6px;
    margin-bottom: 8px;
  }
  .config-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }
  .config-name {
    font-size: 13px;
    font-weight: 700;
    color: oklch(21.78% 0 0);
  }
  .config-price {
    font-size: 16px;
    font-weight: 800;
    color: oklch(56.24% 0.1776 30.68);
  }
  .config-detail {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.4;
    margin-bottom: 6px;
  }
  .config-metrics {
    display: flex;
    gap: 12px;
    font-size: 9px;
    color: oklch(56.36% 0.0176 86.46);
    font-weight: 600;
  }
  .upsell {
    font-size: 10px;
    color: oklch(56.36% 0.0176 86.46);
    line-height: 1.5;
    margin-top: 4px;
  }
  .footnote {
    margin-top: auto;
    padding-top: 12px;
    font-size: 9px;
    color: oklch(56.36% 0.0176 86.46);
    opacity: 0.6;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 22px;
    }
    .layout {
      flex-direction: column;
      max-width: 100%;
    }
  }
</style>
