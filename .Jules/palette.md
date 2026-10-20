## 2026-10-14 - External Link Screen Reader Context
**Learning:** External social links with `target="_blank"` lack explicit visual or audible cues that they leave the site, which can confuse screen reader users when focus unexpectedly changes context.
**Action:** Always supply `aria-label="<Label> (opens in a new tab)"` on `target="_blank"` icon or text links when visual external indicators are omitted.

## 2026-10-14 - Code Block Copy Snippet Accessibility & Layout
**Learning:** Adding absolute positioned copy buttons inside scrollable code blocks can cause text overlap if right padding is missing, and visual-only text changes ("✓ Copied") are invisible to screen readers without live regions.
**Action:** Always add `padding-right` to `<pre>` elements when overlaying copy buttons, dynamic `aria-label`, and a dedicated `sr-only` element with `aria-live="polite"` for instant screen reader feedback.
