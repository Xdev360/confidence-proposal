# Design System — Confidence Proposal

This document defines the visual language, rules, and standards for the Confidence Cargo proposal website. All design and development decisions must follow these guidelines strictly.

---

## 1. Design Philosophy

- **Aesthetic**: Minimal, premium, calm, and professional.
- **Tone**: Thoughtful, confident, and respectful — never salesy or loud.
- **Approach**: Mobile-first, component-first, and intentionally restrained.
- **Goal**: Make the experience feel high-quality and intentional, not generic or template-like.

---

## 2. Colors

| Role                    | Value          | Usage                                      |
|-------------------------|----------------|--------------------------------------------|
| **Background**          | `#FFFFFF`      | Main background across the entire site     |
| **Primary Dark**        | `#232732`      | Headings, body text, icons, dark sections  |
| **Secondary Text**      | `#4A4A4A`      | Supporting text, descriptions              |
| **Muted Text**          | `#6B7280`      | Small text, captions, placeholders         |
| **Accent**              | `#8E3947`      | **Only** for very subtle highlights (use sparingly) |
| **Border / Divider**    | `#E5E5E5`      | Light borders and dividers                 |
| **Success / Positive**  | `#166534`      | Success states (use very rarely)           |

**Rule**: Avoid bright colors, gradients, or loud accents. The design should feel clean and sophisticated.

---

## 3. Typography

**Font Family**: `Gellix` (use for both headings and body text)

### Font Sizes (Strict)

| Element              | Desktop | Mobile   | Weight     | Usage                              |
|----------------------|---------|----------|------------|------------------------------------|
| **H1**               | 56px    | 36px     | 600 / 700  | Main headlines                     |
| **H2**               | 48px    | 32px     | 600        | Section headlines                  |
| **H3**               | 24px    | 20px     | 600        | Sub-section headlines              |
| **Body Large**       | 18px    | 16px     | 400        | Important body text                |
| **Body**             | 16px    | 16px     | 400        | Default body text                  |
| **Button**           | 14px    | 14px     | 500        | Button text                        |
| **Small Text**       | 14px    | 13px     | 400        | Captions, footnotes, meta text     |
| **Tiny Text**        | 12px    | 12px     | 400        | Very small labels (use sparingly)  |

**Line Height**:
- Headings: 1.1 – 1.2
- Body: 1.6 – 1.7

---

## 4. Spacing & Layout

- Use **Tailwind’s spacing scale** (4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64).
- Keep layouts **breathable** — avoid cramped sections.
- Use generous vertical spacing between sections (minimum 80px on desktop).
- Content should feel centered and calm, not stretched wide.

**Container Width**:
- Maximum content width: `1280px`
- Use consistent horizontal padding: `px-6` (mobile) and `px-8` or `px-12` (desktop)

---

## 5. Buttons

**Style**: Clean, minimal, and professional.

| Property             | Value                  |
|----------------------|------------------------|
| **Font Size**        | 14px                   |
| **Font Weight**      | 500                    |
| **Padding**          | `py-2 px-4` (8px top/bottom, 16px left/right) |
| **Border Radius**    | `6px` or `8px`         |
| **Transition**       | Smooth hover states    |

**Variants**:
- **Primary Button**: Dark background (`#232732`) with white text
- **Secondary Button**: Transparent with dark border and text
- **Ghost Button**: Minimal, text-only with subtle hover

---

## 6. Components

### Card
- Clean white background with subtle border or soft shadow
- Generous internal padding (`p-6` or `p-8`)
- Rounded corners (`rounded-xl` or `rounded-2xl`)

### Section
- Clear visual separation between sections
- Consistent vertical spacing
- Optional subtle divider lines when needed

### Interactive Demo Boxes
- Should feel like **mini product previews**, not marketing graphics
- Use clean borders and good contrast
- Keep animations subtle and realistic

---

## 7. Animation Guidelines (GSAP)

- Animations must be **minimal and purposeful**.
- Only animate when it helps the user understand the product.
- Preferred animations:
  - Smooth entrance of elements (fade + subtle slide)
  - Interactive demos (WhatsApp chat, Tracking status, Quote calculator)
  - Preloader progress bar + typing effect
- Avoid: Bouncy animations, excessive motion, decorative animations that don’t serve clarity.

**Rule**: If the animation doesn’t improve understanding, don’t add it.

---

## 8. Responsive (Mobile-First)

- Design and build **mobile-first**.
- Major breakpoints: `640px`, `768px`, `1024px`, `1280px`
- Font sizes and spacing should scale down appropriately on mobile.
- Touch targets should be large enough (minimum 44px height for buttons).

---

## 9. What to Avoid

- Bright or loud colors
- Generic marketing agency aesthetics
- Overly complex layouts
- Excessive animations or micro-interactions
- Cramped spacing
- Using deep burgundy/red tones
- Template-like or repetitive UI patterns
- Long, bloated components

---

## 10. Quality Standard

Every screen should feel:
- Calm and premium
- Intentional (nothing feels random)
- Easy to read and navigate
- Professional enough for a serious business owner like Dada Aigbe

When in doubt, **simplify**.
