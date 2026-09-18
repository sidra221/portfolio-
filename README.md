# Portfolio — Sidra Alsayed

Personal portfolio for a Full-Stack Developer with a UI/UX background.
Single page, light and dark themes, an animated WebGL backdrop.

## Stack

React 19 · TypeScript · Tailwind CSS 4 · Vite 7 · framer-motion · Three.js

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## How it's put together

| Path | What lives there |
|------|------------------|
| `src/content.ts` | Every piece of CV content. Single source of truth — update the CV, update this file. |
| `src/styles/index.css` | Tailwind theme: the rose brand scale, plum-tinted neutrals, glass-card and gradient utilities. |
| `src/components/` | One file per section — Hero, Experience, Education, Skills, Projects, Contact — plus the header. |
| `src/components/ui/` | Shared pieces: Section, SectionHeading, Chip, TiltCard, Reveal, SocialLinks, ScrollProgress. |
| `src/components/ThreeBackground.tsx` | The aurora: one fullscreen GLSL shader, half-resolution, capped at 30fps. |
| `src/hooks/` | Theme, active-section tracking, and the animation fallback. |

### Notes

- **Content and presentation are separate.** Text is never hardcoded in a component; it comes from `content.ts`.
- **Animations never gate content.** Every reveal starts at opacity 0. `useAnimationsUsable` checks that a frame
  actually arrives after mount and, if none does, renders everything plainly — so a throttled or backgrounded
  renderer can never leave the page blank.
- **The backdrop is deliberately cheap.** It mounts only once the browser is idle, renders at half resolution
  and 30fps, and pauses entirely when the tab is hidden.
