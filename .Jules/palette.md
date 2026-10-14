## 2026-10-14 - External Link Screen Reader Context
**Learning:** External social links with `target="_blank"` lack explicit visual or audible cues that they leave the site, which can confuse screen reader users when focus unexpectedly changes context.
**Action:** Always supply `aria-label="<Label> (opens in a new tab)"` on `target="_blank"` icon or text links when visual external indicators are omitted.
