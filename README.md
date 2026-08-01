# GPT Pro - Desktop App

![GPT Pro Banner](assets/banner.png)

A sleek, minimalist desktop application designed for seamless interactions with [uncensored.chat](https://uncensored.chat/). Built with a classy monochrome black theme and custom iOS-style window controls.

---

## ⚡ Key Features

- **Zero Footprint / Instant Data Wipe**: One-click **Clear Site Data** button instantly purges all cookies, local storage, session storage, cache, and service workers, reloading a clean slate.
- **Uncensored AI Access**: Directly locked to `uncensored.chat` with no rate-limit memory leaks or residual tracking across sessions.
- **Classy Monochrome Black UI**: Minimalist obsidian interface with zero distractions and custom iOS traffic light controls:
  - 🔴 **Red (✕)**: Close app
  - 🟡 **Yellow (⤢)**: Maximize / Restore
  - 🟢 **Green (−)**: Minimize
- **Standalone Portable App**: Pre-packaged single `.exe` binary requiring no installation or external DLLs.

---

## 🚀 Installation & How to Use

### Installation Option 1: Installer Setup (.exe)
1. Run **`GPT Pro Setup 1.0.0.exe`** from the `dist/` folder.
2. Follow the setup wizard to install **GPT Pro** with Desktop & Start Menu shortcuts.

### Installation Option 2: Standalone Portable (.exe)
1. Run **`GPT Pro 1.0.0.exe`** directly without installation.

---

### Usage Workflow
1. Chat freely on **uncensored.chat**.
2. **Crucial Step**: After every message or session, click the red **`Clear Site Data`** button at the top right to instantly wipe all site storage and refresh the page with zero history leftover.

---

## 🛠️ Development & Building

### Prerequisites
- Node.js (v18+)
- npm

### Run Locally
```bash
npm start
```

### Build Standalone Portable Executable (.exe)
```bash
npm run build
```
The output binary will be created in `dist/GPT Pro 1.0.0.exe`.

---

## 📄 License

MIT License
