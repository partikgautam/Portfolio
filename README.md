# Grow Up Frontend

React + Vite + TypeScript + Tailwind CSS frontend for the Grow Up digital marketing agency website.

## Website Flow

1. Top contact bar
   Shows phone, email, Butwal location, and social media icons. WhatsApp, call, and email links are ready.

2. Main navigation
   Home, About, Services, Portfolio, and Contact. On mobile, the navigation becomes a menu button.

3. Home page
   Hero section explains the business offer, then shows services, working process, and a strong WhatsApp/call CTA.

4. About page
   Explains what Grow Up does, why businesses should trust it, and why video-first marketing is useful.

5. Services page
   Lists digital marketing services: social media, promotion videos, ads, branding, landing pages, and strategy.

6. Portfolio page
   Shows sample campaign blocks. Replace these later with real client work.

7. Contact page
   Business enquiry form, phone, email, location, WhatsApp, and call buttons. For now, the form opens email. Later it can send data to a NestJS backend.

## Run The Website

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal, usually:

```text
http://localhost:5173
```

## Build For Hosting

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  app/              Main app shell, layout, and page routes
  config/           Business details, phone, WhatsApp, and social links
  data/             Services, packages, process steps, portfolio, stats
  lib/              API helper for a future NestJS backend
  modules/          Page modules: home, about, services, portfolio, contact
  shared/           Reusable components, icons, and hooks
  styles/           Tailwind CSS entry file
```

## Non-Coder Edit Guide

Edit business details here:

```text
src/config/site.ts
```

You can change:

- Business name
- Email
- Phone number
- WhatsApp number
- Location
- YouTube link
- Instagram link
- LinkedIn link
- Facebook link
- TikTok link

The missing social links have `TODO` comments. Replace only the `#` value and keep the quotation marks.

Edit services and packages here:

```text
src/data/services.ts
```

Edit sample portfolio/client work here:

```text
src/data/portfolio.ts
```

Edit homepage small stats here:

```text
src/data/stats.ts
```

The current design uses local visual mockups instead of remote photos, so the website still looks complete without internet. To replace those with real client photos later, edit:

```text
src/shared/components/VisualMockups.tsx
src/shared/components/PortfolioCard.tsx
```

## Responsive Design

The website is built mobile-first with Tailwind CSS.

- Small phones use stacked sections and full-width buttons.
- Tablets use two-column sections where space is available.
- Desktop uses wider grids and larger visual sections.
- Images use responsive heights so they do not become too tall on mobile.
- The navbar switches to a mobile menu on small screens.

Important responsive classes used:

```text
sm:
md:
lg:
grid
flex
max-w-7xl
px-4 sm:px-6 lg:px-8
```

## Future NestJS Backend Flow

When you add a backend later:

1. Create a NestJS backend separately.
2. Add this to `.env`:

```text
VITE_API_BASE_URL=http://localhost:3000
```

3. Use the API helper here:

```text
src/lib/apiClient.ts
```

4. Replace the temporary email form logic here:

```text
src/modules/contact/services/contactService.ts
```

Suggested future backend endpoint:

```text
POST /leads
```

Suggested lead data:

```text
name
phone
businessName
service
message
```

## Where To Add New Pages

1. Create a new folder inside:

```text
src/modules/
```

2. Add the page route here:

```text
src/app/App.tsx
```

3. Add the navigation link here:

```text
src/config/site.ts
```
# partikportfolio
# partikportfolio
# Portfolio
# Portfolio
# Portfolio
# Portfolio
# Portfolio
