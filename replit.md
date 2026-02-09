# Blacklyon Power Holdings Website

## Project Overview
A premium, corporate-grade website for Blacklyon Power Holdings (BPH), a South African based renewable energy and infrastructure development platform focused on originating, developing, and owning bankable clean energy assets across Southern Africa.

**Tagline:** Building the Energy Infrastructure Africa Needs

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Backend**: Express.js
- **Email**: ZeptoMail API for contact form submissions
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query

## Brand Color Palette
| Role           | Hex         | HSL |
| -------------- | ----------- | --- |
| Primary Gold   | #BD6D2C | hsl(26, 63%, 46%) |
| Secondary Gold | #CFAC73 | hsl(39, 50%, 63%) |
| Light Accent   | #F3E9D1 | hsl(40, 58%, 88%) |
| Black Base     | #000000 | hsl(0, 0%, 0%) |
| Dark Neutral   | #3A3531 | hsl(27, 7%, 21%) |
| Soft Neutral   | #827C73 | hsl(36, 7%, 48%) |

### Strategic Color Usage
- **Power / Action / CTAs:** Primary Gold (#BD6D2C)
- **Premium surfaces / headers:** Secondary Gold (#CFAC73)
- **Background light sections:** Light Accent (#F3E9D1)
- **Text + authority:** Black Base (#000000)
- **UI depth:** Dark Neutral (#3A3531)

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx      # Navigation header with lion logo
│   │   │   │   ├── Footer.tsx      # Footer with Lekker Network integration
│   │   │   │   └── Layout.tsx      # Main layout wrapper
│   │   │   ├── SEO.tsx             # Per-page SEO meta tags
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Landing page with purpose/vision/mission, why BPH, values
│   │   │   ├── About.tsx           # About BPH, founder's note, values, leadership, ambition
│   │   │   ├── Approach.tsx        # Development philosophy & lifecycle
│   │   │   ├── Projects.tsx        # Projects & focus areas (solar/hybrid)
│   │   │   ├── Sustainability.tsx  # ESG & Impact
│   │   │   ├── Partnerships.tsx    # Partner with us
│   │   │   ├── Contact.tsx         # Start a conversation / contact form
│   │   │   ├── Privacy.tsx         # Privacy policy
│   │   │   └── Terms.tsx           # Terms of use
│   │   ├── App.tsx                 # Main app with routes
│   │   └── index.css               # Tailwind + gold/black theme
│   └── public/
│       ├── favicon.png             # Lion head favicon
│       └── favicon.ico             # Lion head favicon (ico format)
├── server/
│   ├── routes.ts                   # API routes including /api/send-mail
│   └── storage.ts                  # Storage interface
├── shared/
│   └── schema.ts                   # Contact form schema
└── attached_assets/
    ├── Main_Logo_1770065674512.png     # Main company logo
    ├── favicon_1770065674511.png       # Lion head favicon
    ├── lekkerlogo_1770062686308.png    # Lekker Network logo
    └── Badge_Level_1_1770062694049.png # Lekker Network badge
```

## Key Features
1. **Premium Corporate Design**: Executive-grade UI with gold/black color scheme
2. **Responsive Navigation**: Mobile-friendly header with lion logo
3. **Contact Form**: Professional contact form with ZeptoMail integration
4. **Lekker Network Integration**: 
   - Logo centered in footer linking to https://lekker.network/
   - Verified badge linking to https://lekker.network/the-lekker-network-verified
5. **SEO Optimized**: Per-page meta tags, Open Graph, and semantic HTML
6. **Level 1 B-BBEE**: Referenced in content and differentiators

## Navigation Labels
- Home
- About
- Development Focus (Approach page)
- Projects
- ESG & Impact (Sustainability page)
- Partner With Us (Partnerships page)
- Contact

## Key Brand Messaging
- "Building the Energy Infrastructure Africa Needs"
- "Trusted. Responsible. Enduring."
- "We are not building narratives. We are building assets."
- "ESG is embedded — not marketed"
- "If your capital is patient and your perspective long-term, we welcome the conversation"
- Developer-owner mindset

## Environment Variables
- `ZEPTOMAIL_TOKEN`: ZeptoMail API key for email delivery
- `ADMIN_EMAIL`: Email address for receiving contact form submissions

## Contact Information
- **Email**: info@blacklyonpower.co.za
- **Phone**: +27 66 383 0269
- **Location**: Cape Town, South Africa

## API Endpoints
- `POST /api/send-mail`: Handles contact form submissions
  - Sends admin notification to configured email
  - Sends confirmation to user

## Running the Project
The application runs with `npm run dev` which starts both the Express backend and Vite frontend on port 5000.
