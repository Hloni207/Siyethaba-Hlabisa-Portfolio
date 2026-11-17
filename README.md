# Siyethaba Hlabisa — Portfolio Website

A portfolio website crafted for **Siyethaba Hlabisa**, specializing in Robotics, IoT Systems, Electronics, and Software Engineering. Built as a high-performance React SPA with Vite and Tailwind CSS v4, designed to replicate the clean, modern editorial aesthetic of the reference design while providing interactive components, animations, and clean browser URLs (no `.html` suffix).

---

## 🌟 Key Features & Requirements Met

1. **Initial Full-Screen Hero View (100vh)**:
   - When visitors land on the site, they are immediately greeted by the hero section (Image 1 replica) without seeing the sections below.
   - Fixed header with avatar circle, name `Siyethaba H.` + warm terracotta dot (`#E28D69`), navigation links (`About`, `Projects`, `Education`, `Experience`), language switcher (`中`), and theme toggle (Sun/Moon).
   - Bio: *"Hi, I'm Siyethaba Hlabisa, a Programming and Robotics student at East Cape Midlands TVET College..."*
   - Outlined pill button: `Explore my work ↓` (smooth scrolls to Projects).
   - Direct contact links: `siyethabahla@gmail.com` with one-click clipboard copy + `LinkedIn` profile link (`https://www.linkedin.com/in/siyethaba-hlabisa-3746583b6/`).
   - Interactive hero photograph carousel with large overlay `Siyethaba Hlabisa.` and 5 clickable indicator dots.

2. **Manual Scroll to Projects Section (Image 2 Replica)**:
   - Visitors scroll down manually from the hero view to reveal the Projects section.
   - Large bold typography: `Projects`.
   - **Filter Tags**: Includes `All projects`, `IoT`, `Electronics`, `Softwares`.
   - Dynamic filtering with smooth card transitions.
   - Rich project cards featuring:
     - *Robo Wars: Combat Robot Car (Robo Rumble Runner-Up)*
     - *Industrial Maintenance API & Telemetry (Lumotech)*
     - *P2P Decentralized Mobile App (W3Node Hackathon)*
     - *Smart Micro-Climate IoT Sensor Node*
     - *4-DOF Articulated Robotic Manipulator Arm*
     - *Robotics Mission Control & Diagnostic Suite*
   - Clickable cards opening a detailed modal with technical specs and tech stacks.

3. **Constant Fixed Header Across One Continuous Long Page**:
   - Stays locked at the top (`fixed top-0 left-0 right-0 z-50`) across the entire page with backdrop blur and active section tracking.

4. **Contact Information**:
   - Email: `siyethabahla@gmail.com`
   - LinkedIn: `https://www.linkedin.com/in/siyethaba-hlabisa-3746583b6/`

5. **Education Section (Image 3 Replica)**:
   - 4-column layout:
     - **Institution**: East Cape Midlands TVET College
     - **Major Course**: Programming and Robotics
     - **Certification Level**: NCV Levels 2 – 4 (L2 – L4)
     - **Period & Location**: 2025 – 2027 · Eastern Cape, Uitenhage (Kariega)
   - Core academic & practical competency badges.

6. **Experience Section with Accordion Animation (Image 4 & 5 Replica)**:
   - Default small details displayed for each entry:
     1. **Lumotech** (`June 2026`) · *WorkShadowing and Maintenance API · Eastern Cape, Uitenhage*
     2. **Robo Rumble Finale** (`August 2026`) · *Robo Wars · Gauteng, Soweto (1 Day Competition)*
     3. **W3Node Hackathon** (`November 2026`) · *P2P Mobile App · Western Cape, Cape Town (3 Day Hackathon)*
   - Interactive `+` button that rotates smoothly into an `×` on click.
   - Accordion animation expanding:
     - Your exact reflection & learning outcome quote.
     - Key responsibilities & industry milestones with checkmark icons.
     - Skill and achievement tags.

7. **Clean Browser URLs (No `.html`)**:
   - Single-Page Application (SPA) structure powered by Vite and React, running cleanly at root URL `http://localhost:5173/` without any file extension in the address bar.

8. **Theme Toggle & Bilingual Support**:
   - Full dark mode (warm charcoal `#141210`) and light mode (warm cream `#FAF8F5`).
   - Bilingual language switcher in the header.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local development server (clean URL at http://localhost:5173/)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```
