# Implementation guide

This document explains the implementation decisions behind each completed
portfolio step. It is intended as a maintenance guide: use it to understand
where a visual change belongs before editing the code.

## Step 1: Page shell and navigation

### What changed

The page shell was narrowed to a readable, reference-inspired workspace and
the header was rebuilt around three areas:

1. Identity and branding on the left.
2. Section navigation in the middle.
3. Availability status and a contact call to action on the right.

The relevant files are:

- [`src/components/Header.tsx`](./src/components/Header.tsx)
- [`src/App.tsx`](./src/App.tsx)
- [`src/App.css`](./src/App.css)
- [`src/index.css`](./src/index.css)

The root shell in `App.tsx` has `id="top"`, so the brand link in the header
can return to the top of the page. The rest of the header links target
`#projects`, `#stack`, and `#contact`. Those IDs should be added to the
corresponding sections when their implementation steps are completed.

### Header structure

`Header.tsx` uses semantic elements instead of a collection of unstructured
headings and paragraphs:

- `.site-header__identity` contains the brand link and subtitle.
- `.site-header__nav` is a labeled `<nav>` containing internal anchor links.
- `.site-header__actions` contains the availability label and CTA link.

The availability dot is marked `aria-hidden="true"` because it is decorative;
the surrounding text communicates the status. Replace the current
`PLACEHOLDER` text in `Header.tsx` when the final availability message is
known. The CTA is an anchor rather than a button because it navigates to the
contact section and does not perform an in-place action.

### Shell layout and sizing

The shared `.site-container` is capped at `780px`:

```css
.site-container {
  width: min(100% - (var(--margin) * 2), 780px);
  margin-inline: auto;
}
```

This keeps reading lines short on desktop while allowing the existing
responsive `--margin` tokens in `index.css` to control the side gutters.

The header is not placed inside `.site-container`; instead, its horizontal
padding calculates the same centered content edges:

```css
padding: var(--space-md) max(var(--margin), calc((100vw - 780px) / 2));
```

If the content width changes later, update both `780px` values in
`App.css`. Keeping these values aligned prevents the header and page content
from appearing to use different grids.

### Sticky header styling

`.site-header` uses:

- `position: sticky` and `top: 0` to remain available while scrolling.
- `z-index: 10` to keep it above page content.
- A semi-transparent canvas background plus `backdrop-filter` for the
  translucent reference effect.
- `border-bottom` to separate navigation from the content without adding a
  shadow.

The site intentionally uses square corners because the radius tokens in
`index.css` are all zero. Do not add rounded corners to individual header
elements unless the overall visual language changes.

### Header typography and interactions

The header uses the existing font tokens:

- `--font-heading` for the brand name.
- `--font-mono` for navigation, status, and CTA labels.
- `--muted` for secondary text.
- `--lime` and `--lime-soft` for active/highlighted states.

Hover and keyboard focus both use the lime accent. The global stylesheet
already provides the baseline `:focus-visible` behavior for form controls;
the header links additionally change color on focus so keyboard users can see
which navigation target is active.

The availability dot uses the `availability-pulse` keyframes. The
`prefers-reduced-motion: reduce` media query disables that animation and
removes link transitions. If more animations are added to the shell, put
their reduced-motion overrides in the same media query.

### Responsive behavior

At widths below `767px`:

- The header wraps instead of overflowing horizontally.
- The navigation moves to its own full-width row.
- The long availability label is hidden to preserve space.
- The CTA remains visible with reduced horizontal padding.
- Main and footer vertical padding is reduced from `--space-2xl` to
  `--space-xl`.

When changing the mobile breakpoint, keep the header and the global breakpoint
in `index.css` consistent unless there is a deliberate reason for them to
diverge.

## Step 2: Recruiter-first hero cockpit

### What changed

The placeholder hero was replaced with a semantic content panel that presents
the portfolio’s value quickly:

1. An eyebrow identifies the section.
2. A short positioning line establishes the profile.
3. The main heading communicates the core point of view.
4. A summary paragraph gives recruiter-facing context.
5. Three metrics expose focus, working mode, and personal signal.
6. A lightweight command-module panel adds technical personality, while a
   low-opacity WebGL texture provides the Hero's background atmosphere.

The relevant files are:

- [`src/components/Hero.tsx`](./src/components/Hero.tsx)
- [`src/App.css`](./src/App.css)
- [`src/App.tsx`](./src/App.tsx)

### Semantic structure

The hero section uses `aria-labelledby="hero-title"` and the main heading has
the matching `id`. This gives assistive technology a clear section name
without adding visually redundant text.

The metrics use a labeled container with `aria-label="Current focus"`.
The visual panel uses `aria-label="Developer status"`, while the decorative
grid, orbit, core, and lines are inside an `aria-hidden="true"` screen. The
visual should support the content, not create a second reading experience.

### Hero spacing and layering

`.hero` is a flex column with `gap: var(--space-lg)`. This means each
content block gets consistent vertical spacing without manual margins.
Padding and borders use existing design tokens so the hero stays aligned with
the rest of the shell.

The `::before` pseudo-element adds a subtle radial lime glow. It is positioned
over the surface but does not intercept input because it has
`pointer-events: none`. The direct-child rule:

```css
.hero > * {
  position: relative;
}
```

keeps all real content above that glow. If you add a new decorative layer,
preserve this separation between decorative and readable content.

### Recruiter-facing typography

The main heading uses a responsive `clamp()` size:

```css
.hero h1 {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 0.98;
  max-width: 10ch;
}
```

The `max-width` creates a deliberate, strong line break on larger screens,
while `clamp()` prevents the title from becoming too large or too small
between breakpoints. The summary uses `--muted` so it has lower visual
priority than the heading but remains readable.

The small labels use the shared `.mono-label` class from `index.css`. Use
that class for new technical metadata instead of duplicating its font,
letter-spacing, and uppercase rules.

### Metrics row

The desktop metrics are a three-column CSS grid. Borders between metrics are
created with the adjacent-sibling selector:

```css
.hero__metric + .hero__metric {
  border-left: 1px solid var(--border);
}
```

This avoids a border on the outside edge of the whole row. On mobile, the
grid becomes one column and the separator changes from a left border to a
top border. If the number of metrics changes, update the grid definition and
check that the mobile stack still reads in a sensible order.

### CSS command module and Hero background

The readable command module is built from ordinary spans:

- `.hero__panel-screen` supplies the dark screen and repeating grid.
- `.hero__panel-orbit` draws elliptical borders.
- `.hero__panel-core` draws the glowing center point.
- `.hero__panel-line` adds directional traces.
- Modifier classes such as `hero__panel-orbit--one` change size and rotation.

This keeps the readable visual inexpensive, responsive, and easy to modify.
The animated canvas is a separate full-Hero background layer, so changing the
shader does not affect the panel metadata or CSS fallback artwork.

The panel footer combines a human-readable status label with a code-styled
snippet. The `code` element inherits the shared monospace treatment from
`index.css`, while its color is overridden locally with `--lime-soft`.

### Mobile hero behavior

On mobile:

- Hero padding is reduced to `--space-md`.
- Metrics become a vertical list.
- Metric separators become horizontal.
- Panel header and footer content stack vertically so labels do not collide.

The visual screen remains fixed at `12rem` high, which preserves the visual
anchor without introducing an aspect-ratio dependency. If the panel content
becomes denser, reduce the height only after checking that the orbit and
center remain visually balanced.

## Validation completed

After implementing these two steps, the project passed:

- `pnpm lint`
- `pnpm build`

The TypeScript/CSS diagnostics for the edited files also reported no errors.

## Step 3: Project experiment cards

### What changed

The placeholder project list was replaced with a typed data model and reusable
cards:

- [`src/components/ProjectsSection.tsx`](./src/components/ProjectsSection.tsx)
  owns the project data and section-level layout.
- [`src/components/ProjectCard.tsx`](./src/components/ProjectCard.tsx) owns
  the markup for one project.
- [`src/App.css`](./src/App.css) owns the visual treatment and responsive
  behavior.

The section now has `id="projects"`, so the Header's Projects anchor resolves
to the correct location.

### Project data model

The `Project` type describes the content needed by every card:

```ts
type Project = {
  title: string;
  icon: string;
  category: string;
  description: string;
  technologies: string[];
  takeaway: string;
  architecture: string;
  link?: string;
};
```

This keeps content decisions in one place and prevents each card from
developing a different structure. To add a project, append another object to
the `projects` array. The `key` passed to `ProjectCard` uses the title, so
titles must remain unique.

The current projects intentionally follow the design reference's learning
trajectory: a compiler/VM experiment, a distributed-systems experiment, and a
full-stack interface. Replace their copy and technology arrays with real
portfolio details as those become available.

The links currently point to the generic GitHub homepage as placeholders.
Replace each `link` with the real project URL, or remove the property when a
project should not expose an external link.

### Card structure

Each card is an `<article>` with four visual regions:

1. Icon and project identity.
2. External-link affordance when `link` exists.
3. Category and technology metadata.
4. Key takeaway and architecture evidence.

The card uses a regular anchor for external navigation. It opens in a new tab
and uses `rel="noreferrer"` to avoid passing the originating page URL.
Because the icon is decorative, it is hidden from assistive technology. The
project title and description remain ordinary readable text.

### Card styling

`.project-card` is a bordered surface using the same `--surface` and
`--border` tokens as the hero. Its hover and `:focus-within` states share the
same treatment:

```css
.project-card:hover,
.project-card:focus-within {
  border-color: color-mix(in srgb, var(--lime) 50%, var(--border));
  transform: translateY(-2px);
}
```

Using `:focus-within` is important because the card contains a link: keyboard
users receive the same visual context as pointer users. The title also turns
lime when the card is hovered or contains focus.

The card header is a flex row on larger screens. The identity stays flexible
and can shrink, while the metadata stays at its natural width. On mobile the
header becomes a column and the metadata aligns to the left, preventing long
project titles or technology lists from forcing horizontal overflow.

The details area is a two-column grid separated from the header by a border.
It becomes a single column below the mobile breakpoint. If more evidence is
needed later, add another detail block to the grid and check the mobile
reading order.

### Section heading

The project section heading has its own small pattern:

- `.section-heading__eyebrow` provides the lime dot and monospace label.
- `h2` gives recruiters a plain-language section title.
- `.section-heading__aside` adds a small supporting label on desktop.

The aside is hidden on mobile because it is secondary information. Keep the
main heading meaningful without relying on that aside.

### Interaction boundary

This step deliberately uses only hover, focus, and external links. The
reference includes inspection tabs, but those would add client-side state and
more content density before the core portfolio information is finalized. The
card model leaves room to add tabs later without changing the data ownership:
the additional tab content should live on `Project`, while the interactive
state should remain local to `ProjectCard`.

## Reference alignment pass: Hero and projects

After comparing the implementation with the screenshots and
[`design-reference/code.html`](./design-reference/code.html), the Hero and
Projects sections were brought closer to the reference composition.

### Hero alignment

The Hero now has three layers:

1. A badge row for profile/status context.
2. A desktop two-column grid with identity copy on the left and the command
   module on the right.
3. The existing metrics nested under the identity copy.

The grid uses a flexible `1.35fr / 0.9fr` split. This gives the recruiter-facing
copy more room while keeping the technical visual visible as a distinct
secondary module. At the mobile breakpoint it collapses to one column, with the
copy appearing before the visual.

The heading now follows the reference's identity-first hierarchy:

- `Systems Crafter & CS Student`
- `Aspiring Systems & Full-Stack Engineer`
- The longer first-principles paragraph

The visual remains CSS-only, but its framing now mirrors the reference terminal
card: a compact header (`gcc · 03:42 AM` and `0 warnings`), a visual screen,
and a status footer. This preserves the lightweight implementation decision
while matching the reference's proportion and information density.

### Project alignment

Project cards now use a small card radius and an inset learning panel to match
the reference's softer card geometry and nested content treatment. The
learning panel is intentionally static; it adds technical depth without
introducing tab state before the project content is finalized.

Each project now declares an `accent` in its data:

```ts
accent: "lime" | "blue" | "amber";
```

The modifier class (`project-card--blue`, for example) changes only the
category and detail-label accents. This keeps the shared card layout in one
place while allowing the reference's color coding for systems, distributed,
and iterative-learning projects.

The fourth reference project, TinySQL, was added to restore the reference's
four-card learning trajectory. Its link remains a placeholder like the other
sample project links.

## Step 4: Technology showcase

### What changed

The technology section now keeps the existing five entries but uses the denser
engineering-card structure from the second reference:

- [`src/components/Stack.tsx`](./src/components/Stack.tsx) owns the typed
  technology data and section composition.
- [`src/components/TechnologyCard.tsx`](./src/components/TechnologyCard.tsx)
  renders one reusable reference-style technology card.
- [`src/App.css`](./src/App.css) owns the grid, card surfaces, accents, and
  responsive layout.

The section now has `id="stack"` so the Header's Stack link points to it.
Its heading uses the same section-heading pattern as Projects, with an amber
marker and an annotated-systems aside.

### Technology data model

Each technology entry uses:

```ts
type Technology = {
  name: string;
  category: string;
  description: string;
  accent: "lime" | "blue" | "amber" | "purple";
  path: string;
  code: string;
  strength: string;
  tradeoff: string;
  wide?: boolean;
};
```

To add or edit a technology, change the `technologies` array in `Stack.tsx`.
`path` is the small file/module label shown in the card header, while `code`
is an illustrative snippet rendered in the dark code block. Replace both with
real evidence when publishing. `strength` and `tradeoff` are intentionally
short: they make the technology claim concrete without turning each card into
an essay. `wide: true` is reserved for a card whose description benefits from
the extra horizontal space.

### Grid and card styling

The desktop grid has two equal columns, matching the attached reference. The
Distributed Systems card uses `technology-card--wide` and spans both columns.
Below `520px` the grid becomes a single-column stack and removes the wide
span.

Each card has four visual regions:

1. A file/path header and category badge.
2. A title row with the technology and capability label.
3. A dark code block followed by the explanatory description.
4. Strengths and tradeoffs evidence rows.

Accent modifiers (`lime`, `blue`, `amber`, and `purple`) change the category
badge and hover border without duplicating the card layout. This keeps visual
variation controlled by the data while preserving one styling source of truth.

### Responsive and maintenance notes

Category badges are allowed to wrap naturally because their text is not
positioned absolutely. If a category becomes too long, shorten the label in
the data rather than adding fixed widths. Keep the card descriptions concise:
the grid is designed for scanability, not essay-length explanations.

## Step 5: Contact section and footer

### What changed

The placeholder contact section was replaced with a reference-aligned
internship and collaboration call to action in
[`src/components/Contacts.tsx`](./src/components/Contacts.tsx).

The section now has `id="contact"` so both the Header navigation and the Hero
CTA resolve to it. It contains:

- A labeled collaboration/internship eyebrow.
- A recruiter-facing heading and supporting paragraph.
- A mailto email link.
- A visible “Get in touch” mailto CTA.
- Footer metadata and social links.

The current email, year, name, and social URLs are intentionally placeholders.
They are listed in the personalization map below.

### Contact styling

The `.contacts` panel uses a three-stop linear gradient between existing
surface tokens to echo the reference's subtle horizontal surface shift. It is
bordered and lightly rounded like the reference while preserving the
portfolio's square, technical controls.

On desktop, the copy and actions sit in one row. The copy has a constrained
width so the heading remains readable, while the actions stay at their
natural width. On mobile, the panel stacks vertically and the email field
expands to share the row with the CTA without causing horizontal overflow.

The email is an anchor, not a form input: this keeps the implementation honest
because no backend or form submission behavior exists yet.

### Footer styling

`.site-footer__meta` is a compact flex row with two groups:

- identity/year and a short build statement
- external social links and email

It wraps naturally on smaller screens and becomes a vertical layout at the
mobile breakpoint. All external links use `target="_blank"` and
`rel="noreferrer"`.

## Personalization map

The current UI uses reference/sample content in a few clearly defined places.
Before publishing, update the following sources:

### Personal identity and availability

- [`src/components/Header.tsx`](./src/components/Header.tsx)
  - `Systems Crafter`
  - `SWE Undergrad · Building from scratch`
  - `PLACEHOLDER` availability text
- [`src/components/Hero.tsx`](./src/components/Hero.tsx)
  - `CS Year 3 / Tech · Building Daily`
  - `First-principles enthusiast`
  - `Open to SWE internships`
  - Hero name, role, and biography copy
- [`src/components/Contacts.tsx`](./src/components/Contacts.tsx)
  - Internship availability copy
  - Footer name and copyright year

### Projects

- [`src/components/ProjectsSection.tsx`](./src/components/ProjectsSection.tsx)
  - Project titles and descriptions
  - Categories and technologies
  - Learning takeaways
  - Architecture summaries
  - External project links
  - Accent colors

Each project is an object in the `projects` array. Replace the sample GitHub
URLs with real project URLs or remove `link` when no public link is available.

### Technologies and learning radar

- [`src/components/Stack.tsx`](./src/components/Stack.tsx)
  - Technology names
  - Category labels
  - Descriptions
  - File/module labels and code snippets
  - Strengths and tradeoffs
  - Accent variants

The `technologies` array is the single source of truth for the cards. Keep
descriptions concise because the layout is optimized for quick scanning.

### Contact and social links

- [`src/components/Contacts.tsx`](./src/components/Contacts.tsx)
  - `example@email.com` mailto links
  - GitHub URL
  - Twitter / X URL
  - LinkedIn URL

Update both the visible labels and their `href` values together. Remove a
social link entirely if it is not part of the public portfolio.

## Step 6: Final UI validation

### Checks completed

The final implementation was validated with:

- `pnpm lint`
- `pnpm build`
- TypeScript and CSS diagnostics on the edited source files
- Browser inspection at desktop and mobile viewport sizes

The production build completed successfully and the linter reported no
errors.

### Responsive checks

At a desktop viewport, the page rendered with:

- All four project cards.
- All five technology showcase cards.
- The wide Distributed Systems card spanning both columns.
- The complete contact panel and footer.
- No document width overflow.

At a `390px` mobile viewport:

- The header wrapped into identity, CTA, and navigation rows.
- The Hero collapsed to one column.
- Metrics stacked vertically.
- Project and technology cards remained within the viewport.
- The technology showcase grid collapsed to one column.
- Contact actions remained usable without horizontal overflow.

### Navigation checks

The following Header links were tested in the browser and resolved to their
matching section IDs:

- `#projects`
- `#stack`
- `#contact`

The brand link targets the root `#top` anchor. Section targets account for the
sticky header and remain visible after navigation.

### Known intentional difference

The reference's animated visual is now implemented as a local WebGL shader
behind the entire Hero content. Its opacity is intentionally low so it adds
atmosphere without competing with the copy, metrics, or status panel. The CSS
grid/orbit remains inside the panel as a graceful fallback for browsers
without WebGL support.

## Animated Hero background

### Component boundary

The animated background lives in
[`src/components/CommandModule.tsx`](./src/components/CommandModule.tsx).
`Hero.tsx` places `<CommandModule />` directly inside `.hero`, before the
readable content. The terminal header and footer remain ordinary readable
HTML.

This boundary is deliberate: the shader owns rendering and browser resources,
while the Hero owns content and layout. Changes to the animation should
normally stay in `CommandModule.tsx` and the `.hero__shader` rule in
`App.css`.

### Shader pipeline

The component uses the reference shader's two-stage pipeline:

1. A vertex shader draws a fullscreen quad.
2. A fragment shader generates domain-warped simplex-like noise, emerald
   contours, grid lines, mouse glow, and a vignette.

The `u_time`, `u_resolution`, and centered `u_mouse` uniforms are updated per
frame. Pointer movement is intentionally disabled for now.
The shader source is kept as module constants so it is easy to compare with
the source in `design-reference/assets/code.html`.

### Lifecycle and fallback behavior

The component:

- Obtains a WebGL context from the canvas.
- Compiles and links the shaders with explicit console diagnostics on failure.
- Uses `ResizeObserver` to keep the drawing buffer aligned with the full Hero.
- Cancels `requestAnimationFrame` on unmount.
- Disconnects the observer on unmount.
- Deletes the buffer, program, and shaders during cleanup.

The existing CSS grid/orbit visual remains behind the canvas. If WebGL is
unavailable or shader setup fails, the component renders no canvas content and
that CSS visual remains visible as the fallback.

The canvas is decorative (`aria-hidden="true"`), while the terminal metadata
outside it remains accessible and readable.

### Reduced motion

When `prefers-reduced-motion: reduce` matches, the component renders one stable
frame and skips the animation loop. The shader still provides the visual
texture, but it does not continuously update.
