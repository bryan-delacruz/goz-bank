# Goz Bank — Mobile Banking UI Prototype

An early, mobile-first prototype of a banking app's front end, built in 2023 with React, Vite and Tailwind CSS. It covers the screens, navigation and device features; there is no backend, and the balance shown is sample data.

**Live:** [goz-bank.vercel.app](https://goz-bank.vercel.app) — best viewed at phone width.

## What's in it

- **Login and register** screens with ID number (DNI) sign-in and a "remember me" option (UI only).
- **Products:** an account card with the available balance.
- **My QR:** generates a QR code on the device with the `qrcode` library, for receiving payments.
- **Scan:** opens the camera and decodes QR codes with `@yudiel/react-qr-scanner`.
- **Bottom navigation** with nested routes (React Router 6) under `/home`.

## Stack

React 18 · Vite 4 · Tailwind CSS 3 · React Router 6 · Heroicons

```
src/
  App.jsx               Routes
  layout/MenuLayout.jsx Shell with the bottom navigation
  components/           Login, Products, Qr, Scan, NavigationBar
```

## Run it

```bash
npm install
npm run dev
```

## Status

Unfinished prototype, kept for reference. It stopped at the UI stage: no accounts, transfers or authentication behind the screens.
