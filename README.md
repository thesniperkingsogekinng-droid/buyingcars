# NeonCars — React + Tailwind Dark Neon Theme

This is a starter prototype of a car marketplace with a dark, neon-styled UI. It includes sample data, a listing page, offer modal, and a product detail page. It's intentionally a frontend-only scaffold so you can plug APIs or payment integrations later.

Quick start (Windows PowerShell):

```powershell
cd path\to\neon-cars
npm install
npm run dev
```

Notes:
- This uses Vite + React + TailwindCSS. Tailwind is already configured (`tailwind.config.cjs`).
- Components: `src/components` — `Navbar`, `CarCard`, `OffersModal`.
- Pages: `src/pages` — `Home` and `Product`.
- Sample data: `src/data/cars.js` (replace with your API).
- To enable production build: `npm run build` then `npm run preview`.

Next improvements I can help with:
- Connect a backend API for real car inventory and offers.
- Add authentication and real checkout integration (Stripe/Paytm).
- Polish animations and add infinite scroll or filtering.
