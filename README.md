<div align="center">

<img src="assets/Readme%20Logo.png" alt="GPT Pro" width="450" style="margin-top: 10px; margin-bottom: 12px;">

<p align="center" style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 17px; letter-spacing: 1.5px; color: #E2E8F0; text-transform: uppercase; margin-top: 8px; margin-bottom: 16px;">
   UNLIMITED AI ACCESS &bull; ZERO RATE LIMITS &bull; WINDOWS &amp; ANDROID 
</p>

![GPT Pro Banner](assets/banner.png)

</div>

<div align="left">

[![Download GPT Pro for Windows](https://img.shields.io/badge/Download-GPT%20Pro%20v1.0.0%20(Windows)-red?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNzQgMTQuNWMtMTEuOCAxLjktMjEuOCAzLjQtMjIuMiAzLjQtLjUuMS0uOCA4LS44IDE3LjZWNTNoNDdWMzJjMC0xNi4yLS4zLTIxLTEuMi0yMC45LS43LjEtMTEgMS42LTIyLjggMy40bS00OC4yIDYuOC0xNC44IDJWNTNoMzZWMTlsLTMuMi4xYy0xLjguMS05LjkgMS4xLTE4IDIuMk0xMSA3MS44djE4LjhsMTYuMyAyLjJjOC45IDEuMiAxNyAyLjIgMTggMi4yIDEuNSAwIDEuNy0xLjUgMS43LTE3VjU3SDExem00MCAyLjdjMCA5LjYuMSAxNy41LjMgMTcuNS4xIDAgOS44IDEuNCAyMS42IDMgMTEuNyAxLjcgMjIuMiAzIDIzLjIgMyAxLjggMCAxLjktMS4xIDEuOS0yMC41VjU3SDUxeiIvPjwvc3ZnPg==)](https://github.com/rishwebb/Uncensored-GPT-No-Limit/releases/download/v1.0.8/GPT.Pro.Setup.1.0.0.exe)<br>
[![Download GPT Pro for Android](https://img.shields.io/badge/Download-GPT%20Pro%20v1.0.0%20(Android)-green?style=for-the-badge&logo=android&logoColor=3DDC84)](https://github.com/rishwebb/Uncensored-GPT-No-Limit/releases/download/v1.0.8/GPT-Pro.apk)

</div>

A sleek, dedicated browser client designed to unlock **unlimited, unrestricted AI access** on [uncensored.chat](https://uncensored.chat/).

---

## 💡 How It Works (The 1,000 Token Reset Secret)

> [!IMPORTANT]
> **Why GPT Pro gives you Unlimited AI Access:**
> - **The Problem**: Standard web access to `uncensored.chat` provides **1,000 free tokens**, which get **exhausted in just a single prompt/response**.
> - **The GPT Pro Solution**: Built into the top header of **GPT Pro** (Windows & Android) is a custom **`Clear Site Data`** (Desktop) / **`Reset`** (Mobile) button.
> - **Instant Token Loop**: Clicking **`Reset`** after every message purges all origin cookies, local storage, session storage, and cache **in-place** while keeping your active page open.
> - **The Result**: Your 1,000 free token quota is **instantly restored to 100% on every prompt**, giving you **forever-unlimited, uncensored AI generation**!

---

## ⚡ Key Features

- **🔥 Infinite Token Bypasser**: Integrated one-click **`Clear Site Data`** (Desktop) / **`Reset`** (Mobile) button instantly restores your 1,000 free token limit after every prompt.
- **🔓 Uncensored AI Access**: Locked directly to `uncensored.chat` with zero rate-limit blocks or session tracking.
- **🎨 Classy Monochrome Black UI**: Minimalist obsidian interface with zero distractions and custom iOS traffic light controls on Desktop:
  - 🔴 **Red (✕)**: Close app
  - 🟡 **Yellow (⤢)**: Maximize / Restore
  - 🟢 **Green (−)**: Minimize
- **📱 Native Android Mobile App**: Built in Kotlin with frosted glass iOS top bar, Reset button, loading spinner, and background state preservation (no reload delay on app switch).
- **🔒 Security & Anti-Leak Hardened**: Isolated storage container, no telemetry, no residual tracking.

---

## 🚀 Installation & Downloads

### Desktop (Windows)
- **Installer Setup**: Download and run **`GPT Pro Setup 1.0.0.exe`** from the button above.
- **Standalone Portable**: Run **`GPT Pro 1.0.0.exe`** directly without installation.

### Mobile (Android)
- **APK Installer**: Download and install **`GPT-Pro.apk`** from the button above or [`mobile/dist/GPT-Pro.apk`](mobile/dist/GPT-Pro.apk).

---

## 📖 How to Get Unlimited Usage (Step-by-Step)

1. Open **GPT Pro** on Windows or Android.
2. Type and send your prompt to **uncensored.chat**.
3. Receive your full uncensored AI response.
4. **Click `Clear Site Data` (Desktop) / `Reset` (Mobile)** at the top right header.
5. Your 1,000 free tokens are instantly restored! Repeat infinitely for unlimited chats!

---

## 🛠️ Development & Building

### Desktop (Node.js & Electron)
```bash
npm start
npm run build
```

### Mobile (Android & Kotlin)
The native Android app code is located in the [`mobile/`](mobile/) directory.
- Built with **Kotlin** and native Android `WebView`.
- Includes frosted glass iOS top bar with **Reset** button (`WebStorage.getInstance().deleteAllData()` + `CookieManager.getInstance().removeAllCookies()`).
- Uses `assets/logo.png` as launcher icon.

---

## 📄 License

MIT License
