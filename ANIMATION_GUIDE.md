# Animation Guide — Confidence Proposal

This document defines how animations should be used across the Confidence Cargo proposal website. The goal is to create purposeful, minimal, and professional motion that enhances understanding — not decoration.

---

## 1. Animation Philosophy

- **Core Principle**: Animations should be **minimal, purposeful, and calm**.
- **Purpose**: Help the user understand how the proposed tools work.
- **Tone**: Subtle, professional, and intentional — never flashy or playful.
- **Rule**: If an animation does not improve clarity or user understanding, it should not be added.

We are not building a marketing site with heavy motion. We are building a **professional proposal experience**.

---

## 2. When to Use Animations

Use animations **only** in these cases:

| Situation                              | Should Animate? | Reason |
|----------------------------------------|------------------|--------|
| Preloader (typing + progress bar)      | Yes              | Sets professional tone |
| Interactive product demos              | Yes              | Helps user understand the tools |
| Section entrance (subtle fade + slide) | Yes (light)      | Improves perceived quality |
| Button hover states                    | Yes (subtle)     | Basic interactivity |
| Modal / drawer opening                 | Yes              | Improves UX |
| Decorative or looping animations       | No               | Feels unnecessary |
| Scroll-triggered heavy animations      | No               | Can feel bloated |

---

## 3. Technical Guidelines

- Use **GSAP** as the primary animation library.
- Prefer **GSAP core** + `gsap.to()` and `gsap.timeline()` for control.
- Keep animations **lightweight** — avoid complex timelines unless necessary.
- Use `ease: "power2.out"` or `ease: "power1.out"` for most animations (feels calm and premium).
- Respect `prefers-reduced-motion` for accessibility.
- Animate with **purpose**, not for visual flair.

**Performance Rule**: Animations should not negatively affect page performance or feel laggy on mobile.

---

## 4. Preloader Animation

**Location**: Appears immediately when the site loads.

**Elements**:
- Typing effect: `"Opening Proposal for Confidence Cargo"`
- Progress bar that fills smoothly from 0% to 100%

**Animation Specs**:
- Typing effect should feel natural and calm (not too fast).
- Progress bar should fill smoothly over ~1.8 – 2.2 seconds.
- Once complete, the preloader fades out and the website fades in.

**GSAP Approach**:
- Use `gsap.to()` for the progress bar.
- Use a simple character-by-character typing effect (can be done with GSAP or a lightweight helper).

---

## 5. Interactive Demo Animations

These are the **most important** animations in the project. They should feel realistic and demonstrate how the final tools will work.

### 5.1 WhatsApp AI Agent Demo

**Goal**: Show how routine enquiries can be handled automatically.

**Animation Behavior**:
- User types a message (or clicks a suggested question).
- After a short delay, the AI responds naturally.
- Show 2–3 exchanges to demonstrate the flow.
- Keep the chat interface clean and minimal (like real WhatsApp).

**Animation Notes**:
- Message bubbles should appear with a subtle scale + fade.
- Typing indicator (three dots) can appear briefly before AI response.
- Keep it short — maximum 3–4 message exchanges.

---

### 5.2 Shipment Tracking Demo

**Goal**: Show how clients can independently check cargo status.

**Animation Behavior**:
- User enters a shipment reference number.
- Status updates smoothly through stages:  
  `Picked Up → In Transit → At Port → Customs Clearance → Out for Delivery → Delivered`
- Optional: A fake WhatsApp notification pops up when status changes.

**Animation Notes**:
- Use a clean progress/stepper UI.
- Status changes should feel smooth but not overly animated.
- The WhatsApp notification should be subtle (slide in from bottom or side).

---

### 5.3 AI Instant Quote Calculator Demo

**Goal**: Show how fast clients can get pricing.

**Animation Behavior**:
- User selects or inputs: Origin, Destination, Weight, Cargo Type.
- On clicking “Get Instant Quote”, the estimated price appears smoothly.
- Show a small breakdown (Air vs Sea freight) if space allows.

**Animation Notes**:
- The result should appear with a subtle fade + slide up.
- Keep the interaction fast and satisfying.
- Avoid complex loading states unless necessary.

---

## 6. Section Entrance Animations

- Use **subtle fade + slight upward slide** for section content.
- Stagger elements slightly when multiple items appear together.
- Keep duration between **0.4s – 0.6s**.
- Avoid heavy stagger or dramatic entrances.

**Recommended GSAP Pattern**:
```js
gsap.from(element, {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power2.out"
});
```
