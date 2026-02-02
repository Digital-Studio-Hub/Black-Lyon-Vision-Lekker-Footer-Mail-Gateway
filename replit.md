# Black Lyon Power Website

## Project Overview
A premium, corporate-grade website for Black Lyon Power, a renewable energy development platform focused on acquiring and developing utility-scale renewable energy projects for municipalities and industrial customers in South Africa.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Backend**: Express.js
- **Email**: ZeptoMail API for contact form submissions
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx      # Navigation header
│   │   │   │   ├── Footer.tsx      # Footer with Lekker Network integration
│   │   │   │   └── Layout.tsx      # Main layout wrapper
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Landing page
│   │   │   ├── About.tsx           # About Black Lyon Power
│   │   │   ├── Approach.tsx        # Development approach
│   │   │   ├── Projects.tsx        # Projects & focus areas
│   │   │   ├── Sustainability.tsx  # Sustainability & impact
│   │   │   ├── Partnerships.tsx    # Partnership opportunities
│   │   │   ├── Contact.tsx         # Contact form
│   │   │   ├── Privacy.tsx         # Privacy policy
│   │   │   └── Terms.tsx           # Terms of use
│   │   ├── App.tsx                 # Main app with routes
│   │   └── index.css               # Tailwind + custom theme
│   └── public/
│       ├── favicon.png             # Site favicon
│       └── favicon.ico             # Site favicon (ico format)
├── server/
│   ├── routes.ts                   # API routes including /api/send-mail
│   └── storage.ts                  # Storage interface
├── shared/
│   └── schema.ts                   # Contact form schema
└── attached_assets/
    ├── lekkerlogo_1770062686308.png    # Lekker Network logo
    └── Badge_Level_1_1770062694049.png  # Lekker Network badge
```

## Key Features
1. **Premium Corporate Design**: Executive-grade UI with clean, authoritative styling
2. **Responsive Navigation**: Mobile-friendly header with hamburger menu
3. **Contact Form**: Professional contact form with ZeptoMail integration
4. **Lekker Network Integration**: 
   - Logo centered in footer linking to https://lekker.network/
   - Verified badge linking to https://lekker.network/the-lekker-network-verified
5. **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## Environment Variables
- `ZEPTOMAIL_TOKEN`: ZeptoMail API key for email delivery
- `ADMIN_EMAIL`: Email address for receiving contact form submissions

## Design System
- **Primary Color**: Muted green (hsl 158 32% 32%) - sustainability/energy
- **Background**: Clean white/off-white
- **Typography**: Manrope (headings) + Inter (body)
- **Border Radius**: Subtle 6px (0.375rem)

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
