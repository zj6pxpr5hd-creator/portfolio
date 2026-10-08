---
name: Obsidian Terminal
colors:
  surface: '#101613'
  surface-dim: '#0d110f'
  surface-bright: '#1b2820'
  surface-container-lowest: '#080c0a'
  surface-container-low: '#0d1210'
  surface-container: '#111a15'
  surface-container-high: '#17231b'
  surface-container-highest: '#1e3023'
  on-surface: '#e7f5ea'
  on-surface-variant: '#a5b5aa'
  inverse-surface: '#e7f5ea'
  inverse-on-surface: '#162019'
  outline: '#6b8f76'
  outline-variant: '#294333'
  surface-tint: '#39ff88'
  primary: '#39ff88'
  on-primary: '#06210f'
  primary-container: '#0f7a42'
  on-primary-container: '#d2ffe1'
  inverse-primary: '#006c38'
  secondary: '#b6c7ba'
  on-secondary: '#1b2a20'
  secondary-container: '#2d4434'
  on-secondary-container: '#c8ddcd'
  tertiary: '#9de7b8'
  on-tertiary: '#12351f'
  tertiary-container: '#2d6942'
  on-tertiary-container: '#b7f5c9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b5fac8'
  primary-fixed-dim: '#82d99d'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#005326'
  secondary-fixed: '#d2e8d6'
  secondary-fixed-dim: '#b6cdbb'
  on-secondary-fixed: '#102016'
  on-secondary-fixed-variant: '#3c5342'
  tertiary-fixed: '#baf4c9'
  tertiary-fixed-dim: '#9cdbad'
  on-tertiary-fixed: '#00210d'
  on-tertiary-fixed-variant: '#18552f'
  background: '#090c0a'
  on-background: '#e7f5ea'
  surface-variant: '#1e3023'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies high-craft digital engineering: surgical, precise, unyielding, and quiet. Built for elite software engineers, systems architects, and technical leaders, the aesthetic fuses developer-tool utilitarianism with high-end editorial typography. 

The visual style is **Technical Brutalism meets Ultra-Minimalism**. It strips away all decorative artifacts—no gratuitous gradients, no soft ambient drop-shadows, and no decorative rounded cards. Instead, depth and hierarchy are achieved through stark contrast, monospaced metadata, hairline boundary grids, and deliberate bursts of phosphor green. Every pixel denotes functional clarity and engineering discipline.

## Colors

The palette is strictly calibrated for dark-mode fidelity and high-contrast legibility:

- **Canvas Base (`#090c0a`)**: The infinite ground. Absorbs light almost completely, grounding the interface in a deep green-black terminal void.
- **Surface Elevation (`#101613`)**: Tonal separation for interactive panels, codeblocks, and contextual shelves.
- **Structural Hairline (`#22382a`)**: 1px architectural lines dividing grid cells and sections without introducing optical mass.
- **Primary Accent (`#39ff88`)**: Phosphor green. Reserved strictly for active indicators, status pings, focused tabs, critical metric callouts, and cursor states. Use sparingly; its rarity preserves its punch.
- **Secondary Accent (`#9de7b8`)**: Soft terminal green for supporting highlights and readable success states.
- **Warning Accent (`#f5b942`)**: Warm amber for warnings, experiments, and attention states.
- **High-Contrast Text (`#e7f5ea`)**: Soft white-green clarity for headlines and primary values.
- **Subdued Text (`#a5b5aa`)**: Low-strain secondary metadata, timestamps, and commentary.

## Typography

Typography establishes tension between technical telemetry and modern editorial form. 

- **Space Grotesk** governs structural titles, project statements, and body context. Its quirky geometric idiosyncrasies bring soul and distinction without sacrificing modern clarity.
- **JetBrains Mono** governs the metadata layer: branch references, execution time, architectural specs, tags, navigation items, and code samples. 
- All `mono-label` elements should be rendered uppercase with slight letter spacing to reinforce terminal instrumentation.

## Layout & Spacing

The layout is anchored by a rigid, hairline-bordered container model set within a centered 12-column grid (maximum content width: 1200px). 

- **Rhythm**: Spacing follows an exact 4px / 8px scale. Generous section gaps (`space-2xl`) frame tight, dense data cells (`space-sm` to `space-md`), balancing breathing room with developer-tool information density.
- **Desktop (1024px+)**: Strict column-based alignment where grid lines often extend edge-to-edge as dividing rules.
- **Tablet & Mobile (<768px)**: The 12-column matrix collapses to a single or dual-column stream. Hairline borders shift from vertical division to horizontal section breaks. Margins contract to `1.25rem` to prioritize screen real estate.

## Elevation & Depth

This system avoids blurred drop shadows and physical elevation layers. Instead, visual planes are established strictly through **contrast, hairline containment, and tonal framing**:

- **Ground (Level 0)**: `#090c0a` canvas. The void where content lives.
- **Modules & Tiles (Level 1)**: `#101613` surface wrapped in a crisp 1px solid `#22382a` outline.
- **Interactive State**: Hovering over an interactive element does not lift it along the Z-axis. Instead, the border shifts from `#22382a` to `#39ff88` or the background transitions subtly from `#101613` to `#16251b`.
- **Modals / Drawers**: Solid `#101613` background with a 1px `#22382a` border and a stark `#000000` backdrop at 80% opacity with zero blur.

## Shapes

The geometry is unapologetically **sharp (`0px` border-radius)** across all elements: buttons, badge tags, cards, code previews, and input controls. 

Square corners reinforce the terminal-grade engineering metaphor, drawing direct parallels to CLI screens, oscilloscopes, and production IDEs. Pill shapes and rounded corners are prohibited.

## Components

### Buttons
- **Primary**: Solid background in `#ff3344`, text in `#090a0c` (Space Grotesk, bold), 0px radius. Hover states shift background to `#f4f4f6`.
- **Secondary / Ghost**: Background transparent, 1px solid border `#22252a`, text in `#f4f4f6`. Hover shifts border color to `#ff3344` and text to `#ff3344`.
- **Terminal Action**: Monospaced font prefixed with `$` or `> `, underlined on hover.

### Chips & Badges
- Constructed with `mono-label`.
- Background `#111317`, 1px solid `#22252a` border, text `#7d828d`.
- Active or Featured variants replace text with `#ff3344` and include a 4px square status dot (`#ff3344`).

### Cards & Project Showcases
- Sharp rectangular tiles with `#111317` fills and `#22252a` borders.
- Header row contains monospaced timestamp and repository release tag.
- Image previews use high-contrast grayscale treatment, revealing full color or subtle crimson duotone on hover.

### Inputs & Terminal Search
- Inset or flat bordered fields with `#090a0c` background, 1px `#22252a` border.
- Focus state instantly snaps border to `#ff3344` without glow or ring shadows.
- Monospaced placeholder text in `#7d828d`.

### Lists & Activity Logs
- Hairline-separated entries (`border-b: 1px solid #22252a`).
- Left-aligned timestamp in `JetBrains Mono` (`#7d828d`), followed by project or commit title in `Space Grotesk` (`#f4f4f6`), trailing with arrow indicator (`->`) that animates rightwards on hover.

### Codeblocks
- Deep carbon background (`#111317`) with a custom window header detailing file path (`src/core/runtime.rs`) and character metrics. Syntax highlighting is minimalist: monochrome text with `#ff3344` for active keywords and `#7d828d` for comments.