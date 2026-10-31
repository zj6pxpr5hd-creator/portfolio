## 2026-10-14 - External Link Screen Reader Context
**Learning:** External social links with `target="_blank"` lack explicit visual or audible cues that they leave the site, which can confuse screen reader users when focus unexpectedly changes context.
**Action:** Always supply `aria-label="<Label> (opens in a new tab)"` on `target="_blank"` icon or text links when visual external indicators are omitted.

## 2026-10-14 - Sticky Header Scroll Padding and Reduced Motion
**Learning:** In-page anchor navigation with a fixed/sticky header causes target section headings to be obscured under the header unless `scroll-padding-top` is set on `html`, and smooth scrolling must respect `prefers-reduced-motion`.
**Action:** Always pair sticky headers with `scroll-padding-top` matching header height + offset on `html`, and override `scroll-behavior: auto` inside `prefers-reduced-motion: reduce`.

## 2026-10-14 - Keyboard Scrollable Code Blocks Accessibility
**Learning:** Scrollable code blocks (`overflow-x: auto`) are non-focusable by default for keyboard users, leaving screen reader and keyboard-only users unable to scroll and inspect truncated code lines.
**Action:** Add `tabIndex={0}`, `role="region"`, explicit `aria-label="<Name> code snippet"`, and clear `:focus-visible` outline styles to scrollable container elements.

## 2026-10-14 - Card Heading Click Target & Focus Boundary
**Learning:** Icon-only external links adjacent to prominent card headings create a mismatch between visual cues (heading color changes on hover) and interactive hit areas, frustrating users who attempt to click the title.
**Action:** Wrap both heading text and icon inside the link element to enlarge the click target size while enforcing high-contrast `:focus-visible` outline bounds.

## 2026-10-14 - Layout-Stable Copy Action Feedback
**Learning:** Replacing primary button label text (e.g., an email address) with temporary feedback text (e.g. "✓ Copied!") hides critical context from the user and causes layout jump in flexbox containers due to character length shifts.
**Action:** Retain the full primary label text and append a layout-stable action/status badge (e.g., `Copy` -> `✓ Copied`) to give clear visual affordance and feedback without layout shift.

## 2026-10-31 - Footer Back-To-Top Return Affordance
**Learning:** Long-scroll single-page portfolio layouts force keyboard and mobile users who reach the bottom to manually traverse the entire document height in reverse to re-access top navigation or inspect initial hero context.
**Action:** Provide an explicit, semantic `<a href="#top">` return link in the footer metadata styled with the component's monospaced badge pattern, pairing an arrow indicator with an explicit `aria-label="Back to top of page"`.
