# Outlast Media

Marketing site and waitlist for a creative media agency.

React 19 + TypeScript + Vite single-page app in [`frontend/`](frontend).

## Stack
React Router 7, TanStack Query, React Hook Form with Zod validation, Framer Motion, EmailJS (waitlist emails), Axios.

## Structure
```
frontend/src/
  pages/        HomePage, NotFoundPage
  components/   layout, sections, shared, ui
  routes/       router
  services/     API client and waitlist service
  store/        waitlist state
```
Deployment configs for Vercel, Netlify and AWS Amplify are included.

## Run locally
```bash
cd frontend
npm install
cp .env.example .env     # fill in the values
npm run dev
```
