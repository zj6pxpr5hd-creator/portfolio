## 2026-10-14 - External Link Screen Reader Context
**Learning:** External social links with `target="_blank"` lack explicit visual or audible cues that they leave the site, which can confuse screen reader users when focus unexpectedly changes context.
**Action:** Always supply `aria-label="<Label> (opens in a new tab)"` on `target="_blank"` icon or text links when visual external indicators are omitted.

## 2026-10-14 - Sticky Header Scroll Padding and Reduced Motion
**Learning:** In-page anchor navigation with a fixed/sticky header causes target section headings to be obscured under the header unless `scroll-padding-top` is set on `html`, and smooth scrolling must respect `prefers-reduced-motion`.
**Action:** Always pair sticky headers with `scroll-padding-top` matching header height + offset on `html`, and override `scroll-behavior: auto` inside `prefers-reduced-motion: reduce`.

## 2026-10-14 - Keyboard Scrollable Code Blocks Accessibility
**Learning:** Scrollable code blocks (`overflow-x: auto`) are non-focusable by default for keyboard users, leaving screen reader and keyboard-only users unable to scroll and inspect truncated code lines.
**Action:** Add `tabIndex={0}`, `role="region"`, explicit `aria-label="<Name> code snippet"`, and clear `:focus-visible` outline styles to scrollable container elements.
