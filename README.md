# Expensio-Frontend

## Introduction

This project manages the client-side logic and communicates with the backend to provide a seamless user experience for managing expenses.

---

## Prerequisites

Before starting, ensure your environment meets the following requirements:

- Node.js: v20.15.1  
- pnpm: Package manager (will be installed during setup)

---

## Installation

Follow these steps to set up the project:

1. Clone the Repository:
   git clone 'repository url'
   cd expensio-frontend


2. Verify Node Version: Ensure you are using Node.js version 20.15.1:
node -v

Install pnpm:
npm install pnpm -g

Install Dependencies:
pnpm install

To start the app in development mode:
pnpm run dev
Build for Production

To create a production-ready build:
pnpm run build

To serve the production build locally:
pnpm run start

Here’s the folder structure for a Next.js 15 app using the src directory:

expensio-frontend/
├── src/                
│   ├── app/            # Application routing and pages (Next.js App Router)
│   │   ├── layout.tsx  # Root layout component
│   │   ├── page.tsx    # Main page component
│   │   └── api/        # API routes for server-side logic
│   │       └── hello/  # Example API endpoint
│   │           └── route.ts
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helper libraries
│   ├── styles/         # Global and module-specific styles
│   │   └── globals.css # Global styles
│   ├── middleware.ts   # Middleware for request handling
│   └── pages/          # Custom pages like _app.tsx and _document.tsx (optional)
├── public/             # Static assets (images, fonts, etc.)
├── next.config.js      # Next.js configuration file
├── package.json        # Project metadata and scripts
├── pnpm-lock.yaml      # pnpm lock file
└── README.md           # Project documentation


Notes
Ensure your Node.js version matches v20.15.1 to avoid compatibility issues.
Use pnpm for dependency management to ensure consistent performance.

