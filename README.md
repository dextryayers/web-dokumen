# HackIT Docs

Dokumentasi resmi framework keamanan HackIT — dibangun dengan [Astro](https://astro.build).

## Mulai

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  components/     # Komponen UI (Navbar, AI Assistant, dll)
  i18n/           # Terjemahan 6 bahasa (en/id/it/ru/zh/ja)
  layouts/        # Layout halaman
  pages/          # Halaman dokumentasi
  styles/         # Global CSS
public/           # Aset statis
```

## AI Assistant

Membutuhkan API key Gemini di `.env`:

```
PUBLIC_GEMINI_API_KEY=your_key_here
```

## Bahasa

Didukung 6 bahasa: Inggris, Indonesia, Italia, Rusia, Mandarin, Jepang.
