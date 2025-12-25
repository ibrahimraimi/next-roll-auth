# Next Roll Auth

A comprehensive authentication framework for Next.js applications, built with modern tools and best practices.

## Description

This project demonstrates a full-featured authentication system using Next.js 16, Better Auth, Prisma, and PostgreSQL. It includes user registration, login, social authentication (Google), session management, and a protected dashboard.

## Features

- **Email and Password Authentication**: Secure sign-up and sign-in with email verification.
- **Social Login**: Google OAuth integration for quick authentication.
- **Session Management**: Persistent sessions with secure token handling.
- **Protected Routes**: Dashboard accessible only to authenticated users.
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS for a clean, responsive design.
- **Type Safety**: Full TypeScript support throughout the application.
- **Database Integration**: Prisma ORM with PostgreSQL for robust data management.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Authentication**: Better Auth
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm

## Prerequisites

- Node.js (version 18 or higher)
- pnpm
- PostgreSQL database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ibrahimraimi/next-roll-auth
   cd next-roll-auth
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. Set up the database:
   ```bash
   pnpm run migrate:create init
   pnpm run generate:client
   ```

## Usage

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Sign up or sign in to access the dashboard.

## Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run ESLint for code linting
- `pnpm migrate:create`: Create a new Prisma migration
- `pnpm generate:client`: Generate Prisma client

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── api/auth/          # Auth API routes
│   ├── dashboard/         # Protected dashboard
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── auth/             # Authentication forms
├── lib/                   # Utility libraries
│   ├── actions/          # Server actions
│   ├── client/           # Client-side utilities
│   └── generated/        # Generated Prisma client
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```
