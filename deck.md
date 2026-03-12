# TECHNOLOGIC

## Modular consumer electronics. Built to last. Built to scale. Built for what comes next.

**PRE-SEED · 2026**

---

# Slide 1: The Hook

> "The ability to perform in-situ repair of electronics at the component level can **dramatically reduce mission risk** and increase crew independence."
> NASA, Component-Level Electronic Assembly Repair (CLEAR) Project

**What if the technology NASA needs for Mars is exactly what Earth needs right now?**

---

# Slide 2: The Problem

## 62 million tonnes of e-waste a year. We recycle less than a quarter of it.

| **$62B**                               | **22%**                                      | **1 in 3**                                 | **87%**                                                |
| -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| in recoverable materials lost annually | formally recycled (declining to 20% by 2030) | replaced devices still work when discarded | drop in component lifecycles. From 30 years to under 4 |

E-waste is growing 5x faster than recycling infrastructure.

_Source: UN Global E-waste Monitor 2024_

---

# Slide 3: The Founder

## Suhit Agarwal

24 · Software & Design Engineer · Applied & Computational Mathematics @ USC

**Founding Product Engineer, Curio**
AI hardware startup. Shipped ESP32 firmware and the consumer mobile app end-to-end. Went from chip to App Store alone.

**Founding Engineer, Trufflepig**
Built the product from zero as founding hire.

**Technologic prototyping**
Built working modular prototype on Raspberry Pi with hot-swappable camera modules. Modules detect on connect, swap without reboot, and degrade cleanly when removed.

`[PHOTO: Pi prototype with swappable modules visible]`

**Building the team:** In conversation with hardware engineering and industrial design leads. First advisor calls scheduled for March 2026.

---

# Slide 4: The Insight

## Modular hardware keeps failing. The engineering was never the problem.

| Project         | Year    | What happened                                                       |
| --------------- | ------- | ------------------------------------------------------------------- |
| **Project Ara** | 2013–16 | Modules 50–100% more expensive. 25% size/weight penalty. Cancelled. |
| **Phonebloks**  | 2013    | Viral concept, zero product. Inspired Ara, then vanished.           |
| **LG G5**       | 2016    | Two modules shipped. Abandoned after one generation.                |
| **Moto Z**      | 2016–18 | 14 Moto Mods launched. Ecosystem died quietly.                      |

> Every single attempt lived inside a company whose revenue depended on you replacing the whole device. The incentive structure killed the product before engineering ever could.

---

# Slide 5: The Solution

## Technologic

A modular electronics platform where the business model and the product aren't fighting each other. One standardized interconnect across device categories.

|                                                                                     |                                                                                |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Swappable.** Upgrade or replace individual components. Not the whole device.      | **Repairable.** Fix what's broken. A dead battery doesn't kill a device.       |
| **Upgradeable.** New processor in two years? Swap the module. Keep everything else. | **Open.** Published specs. Third-party modules. Community-designed expansions. |

`[VISUAL: Technologic logo + brand shapes]`

---

# Slide 6: Why This Matters Beyond Earth

## On Mars, you can't ship a replacement. Modularity is survival, not just a feature.

| **26 months**               | **6–9 months**         | **$200K/kg**                       | **41%**                                    |
| --------------------------- | ---------------------- | ---------------------------------- | ------------------------------------------ |
| between Mars launch windows | transit time, each way | to deliver payload to Mars surface | of small satellites fail or partially fail |

The ISS has operated for 25+ years through modular Orbital Replacement Units. But NASA's own CLEAR project found ORU-level replacement is 1,000x less efficient than component-level repair. For Mars, you need modularity at every layer.

> **Our thesis:** What's essential for space is transformative for Earth.

---

# Slide 7: Why Now

## Four forces. All converging.

**01 · Regulation**
EU Right to Repair mandatory July 2026. Six US states passed laws. Oregon banned parts pairing entirely.

**02 · Consumer demand**
80% willing to pay ~10% premium for sustainability. Gen Z chooses sustainable over brand names 75% of the time.

**03 · Technical feasibility**
USB4 and Thunderbolt 5 solved the bandwidth problem that killed Project Ara. EU USB-C mandate standardizes charging across all devices by April 2026.

**04 · Market proof**
Framework raised $45M, shipped 100K+ laptops. Fairphone: €87M raised, €54M revenue. Back Market: $5.7B valuation.

---

# Slide 8: First Product. The Player

## A modular digital audio player. Retro form factor, modern architecture.

The beachhead that proves the interconnect works across components.

| DAC                     | Storage                | Amp                 |
| ----------------------- | ---------------------- | ------------------- |
| Swappable audio chipset | Expandable local media | Headphone amplifier |
| **Wireless**            | **Battery**            | **Display**         |
| Bluetooth · WiFi        | Hot-swappable power    | Upgradeable screen  |

`[VISUAL: Concept render, assembled view with Technologic logo on face]`
`[VISUAL: Exploded view showing color-coded module grid. DAC (red), Amp (blue), Battery (yellow), Storage (green), Wireless, Speaker, Screen, Breadboard]`

**$800–$3,700** price range for premium DAPs (Astell&Kern)
**$107M** portable DAP market

**Why DAPs:** The vinyl revival proved that retro + quality = demand. Audiophiles are early adopters who obsess over components. No modular option exists. And the Breadboard module gives hackers and developers a hardware on-ramp from day one.

---

# Slide 9: Unit Economics

## What The Player costs to build.

**Base unit BOM estimate at 1,000 units:**

| Component             | Part                                               | Est. cost  |
| --------------------- | -------------------------------------------------- | ---------- |
| DAC module            | ESS ES9038Q2M (32-bit Sabre)                       | $5–8       |
| Headphone amp         | ESS ES9602C or discrete Class AB                   | $3–5       |
| Wireless module       | ESP32-S3 (WiFi + BT 5.0)                           | $2–3       |
| Display               | 1.3" OLED 128x64 (SH1106)                          | $2–4       |
| Storage               | microSD slot + controller IC                       | $1         |
| Battery               | 3,500mAh Li-Po cell + BMS                          | $4–6       |
| TechLink interconnect | Custom multi-layer PCB + module connectors         | $10–15     |
| Enclosure             | CNC aluminum (low vol) / injection mold (high vol) | $12–20     |
| Passives + misc       | USB-C, buttons, capacitors, resistors, crystal osc | $3–5       |
| Assembly              | Contract manufacturing (Shenzhen, per unit)        | $8–12      |
| **Total BOM**         |                                                    | **$50–79** |

**Pricing architecture:**

| Config         | What's in the box                                                | Retail   | BOM  | Gross margin |
| -------------- | ---------------------------------------------------------------- | -------- | ---- | ------------ |
| **Base**       | ES9038Q2M DAC, 3.5mm out, 32GB, BT/WiFi, standard amp            | **$199** | ~$50 | ~75%         |
| **Plus**       | Base + balanced 4.4mm amp module, 128GB storage, display upgrade | **$349** | ~$70 | ~80%         |
| **Enthusiast** | Dual DAC, balanced out, 256GB, full module set + Breadboard      | **$599** | ~$95 | ~84%         |

The base gets someone into the ecosystem at a price point that competes with standalone DAPs. The real revenue engine is modules after purchase: DAC swaps ($49–99), amp upgrades ($59–149), storage expansion ($29–79). A customer who starts at $199 and upgrades two modules over 18 months is worth $350+.

BOM drops 25–35% at 5,000 units with injection molding and volume component pricing.

_Estimates based on component distributor pricing at 1K MOQ. Final BOM requires engineering validation._

---

# Slide 10: Market

## The categories with zero modular options.

| Segment                     | Size                                 |
| --------------------------- | ------------------------------------ |
| **Consumer electronics**    | **$1.2T** annually, 5.5–7.8% CAGR    |
| **Kitchen appliances**      | **$242B**, smart kitchen: 12.4% CAGR |
| **Climate tech investment** | **$40.5B** in 2025, +8% YoY          |

**Unaddressed categories:** Home appliances, wearables & fitness, smart home devices, consumer audio, kitchen electronics. All with zero modular options.

Sustainable products grow 2.7x faster than conventional. 17% market share, capturing 32% of growth.

---

# Slide 11: Where this goes.

**01 · 2026 · The Player**
Working prototype → Crowdfunding campaign → First 1,000 units shipped

**02 · 2027 · Expand**
Second device category → Module marketplace → Third-party developer SDK

**03 · 2028 · Platform**
Smart home integration → Kitchen electronics → Module licensing program

**04 · 2029+ · Scale**
Enterprise / space contracts → Open standard consortium → Global manufacturing

Each phase shares the same interconnect standard. Every module sold in Phase 1 works in Phase 4.

When humanity becomes a spacefaring civilization, modularity won't be a nice-to-have. It will be how everything is built. We're starting now.

---

# Slide 12: Business Model

## Compounding revenue, not replacement cycles.

| Stream           | Mix | Description                                      |
| ---------------- | --- | ------------------------------------------------ |
| **Device Sales** | 40% | Base units at 40%+ gross margins                 |
| **Module Sales** | 30% | Upgrades, replacements, specialty components     |
| **Licensing**    | 20% | Third-party certified modules, open spec revenue |
| **Enterprise**   | 10% | Space agencies, industrial, defense              |

**LTV multiplier:** A customer upgrading modules for 10 years is worth far more than a single device sale.

**HaaS premium:** Hardware-as-a-Service earns 59% higher median revenue multiples.

---

# Slide 13: Landscape

## The goal is not to compete with Framework but to expand the map.

```
                    HIGH MODULARITY
                          │
                          │     ● TECHNOLOGIC
                          │       Multi-category platform
         Framework ●      │
         $45M · Laptops   │
                          │
    ──────────────────────┼──────────────────────
    SINGLE CATEGORY       │        MULTI-CATEGORY
                          │
         Fairphone ●      │
         €87M · Phones    │
                          │
              Apple ·     │    · Samsung
                          │
                    LOW MODULARITY
```

**Why incumbents won't build this:**
Device upgrade cycles drive repeat purchases. Proprietary parts sold through authorized channels only. Ecosystem lock-in creates switching costs. iFixit-Samsung partnership ended 2024. No interest in repair at scale.

---

# Slide 14: The Ask

## Pre-Seed · $1M – $1.5M

**Use of funds:**

| Category                       | Allocation |
| ------------------------------ | ---------- |
| Hardware engineering           | 40%        |
| Tooling & first production run | 25%        |
| Design & prototyping           | 20%        |
| Operations & community         | 15%        |

**What this gets us to:**
Production-ready Player prototype · Interconnect architecture tested and validated · 5,000-unit initial production run · First modules shipping to real users · Crowdfunding campaign launch · Path to seed round

---

# Slide 15: Contact

## Technologic

**Suhit Agarwal**
suhit@technologic.computer
San Francisco, CA

_Modular electronics for Earth and beyond._

`[LINK/QR: technologic.computer. Interactive prototype, exploded module view, full specs]`

---

# Appendix (for Q&A)

## A1: Technical Architecture

- Interconnect: USB4-based with custom power delivery
- Module form factors: S (wearable), M (handheld), L (appliance)
- Hot-swap capability with graceful degradation
- Working Raspberry Pi prototype validates core swap mechanism

## A2: Detailed Financials

_Unit economics, BOM estimates, margin projections available on request_

## A3: Regulatory Landscape

- EU Right to Repair timeline and compliance advantages
- US state-by-state status (Oregon parts pairing ban as leading indicator)
- Why regulation is pushing the market toward modular-native companies

## A4: NASA / Space Opportunity

- CLEAR project findings on component-level repair
- ISS ORU precedent and limitations
- How in-space manufacturing developments map to Technologic's architecture

## A5: Competitive Detail

- Framework: why laptops-only is a ceiling, not a strategy
- Fairphone: lessons from B-corp hardware at scale
- Why Apple/Samsung will never build this (and why that's the point)
