# WorkLink

A job marketplace connecting requesters (who post jobs) with workers (who apply). Anyone can browse jobs; signing in is required to apply, post, or message.

**Stack:** React (Vite) · Node.js + Express · PostgreSQL · Prisma · JWT + bcrypt

## Setup
```bash
# backend
cd backend
cp .env.example .env   # edit DATABASE_URL and JWT_SECRET
npm install
npx prisma migrate dev --name init
npm run dev

# frontend (new terminal)
cd frontend
npm install
npm run dev
```
