# GPT Pro - Desktop & Mobile App

![GPT Pro Banner](assets/banner.png)

[![Download GPT Pro for Windows](https://img.shields.io/badge/Download-GPT%20Pro%20v1.0.0%20(Windows)-red?style=for-the-badge&logo=windows11&logoColor=white)](https://github.com/rishwebb/Uncensored-GPT-No-Limit/releases/download/v1.0.8/GPT.Pro.Setup.1.0.0.exe)<br>
[![Download GPT Pro for Android](https://img.shields.io/badge/Download-GPT%20Pro%20v1.0.0%20(Android)-green?style=for-the-badge&logo=android&logoColor=3DDC84)](https://github.com/rishwebb/Uncensored-GPT-No-Limit/releases/download/v1.0.8/GPT-Pro.apk)

A sleek, minimalist application designed for seamless interactions with [uncensored.chat](https://uncensored.chat/). Built with a classy monochrome black theme and custom iOS-style window controls on desktop and glass UI on mobile.

---

## ⚡ Key Features

- **Zero Footprint / Instant Data Wipe**: One-click **Clear Site Data** / **Reset** button instantly purges all cookies, local storage, session storage, cache, and service workers, reloading a clean slate in-place.
- **Uncensored AI Access**: Directly locked to `uncensored.chat` with no rate-limit memory leaks or residual tracking across sessions.
- **Classy Monochrome Black UI**: Minimalist obsidian interface with zero distractions and custom iOS traffic light controls on Desktop:
  - 🔴 **Red (✕)**: Close app
  - 🟡 **Yellow (⤢)**: Maximize / Restore
  - 🟢 **Green (−)**: Minimize
- **Android Mobile App**: Native Kotlin app with frosted glass iOS top bar, Reset button, loading spinner, and state preservation.

---

## 🚀 Installation & How to Use

### Desktop (Windows)
- **Installer Setup**: Download and run **`GPT Pro Setup 1.0.0.exe`** from the button above.
- **Standalone Portable**: Run **`GPT Pro 1.0.0.exe`** directly without installation.

### Mobile (Android)
- **APK Installer**: Download and install **`GPT-Pro.apk`** from the button above or [`mobile/dist/GPT-Pro.apk`](mobile/dist/GPT-Pro.apk).

---

### Usage Workflow
1. Chat freely on **uncensored.chat**.
2. **Crucial Step**: After every message or session, click the red **`Clear Site Data`** (Desktop) or **`Reset`** (Mobile) button at the top right to instantly wipe all site storage and refresh the page with zero history leftover.

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
