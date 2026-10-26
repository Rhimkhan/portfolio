# Rhim Khan — Portfolio Website

A modern, responsive personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Getting Started Locally

1. **Clone or navigate into the repository**:
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Web3Forms access key (free, no backend needed from [web3forms.com](https://web3forms.com)):
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Data Management

All data files are modular and easy to edit:
- **Projects**: `lib/data/projects.ts` (Set `liveUrl` to show "Live Demo ↗" or `null` to hide it)
- **Certificates**: `lib/data/certificates.ts` (Links to `/docs/*.pdf` with category filtering)
- **Offer Letters & Experience**: `lib/data/offerLetters.ts` (Links to `/docs/*.pdf`)
- **Profile & Bio**: `lib/data/portfolioData.ts`
- **Static Assets**:
  - Resume PDF: `public/resume.pdf`
  - Document / Certificate PDFs: `public/docs/`

## 🌐 Deploying to Vercel

1. Push your repository to GitHub (`.env.local` is already ignored by `.gitignore`).
2. Import the project into [Vercel](https://vercel.com).
3. In the Vercel project settings under **Environment Variables**, add:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`: your Web3Forms access key.
4. Click **Deploy**.
