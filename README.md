# Dario Didaj — Interactive CV

> Where imagination meets artificial intelligence.

A cinematic, fantasy-inspired interactive CV / personal portfolio built for **Dario Didaj** — Digital Marketing student, AI Director and cinematic storyteller behind the [Idrako](https://www.youtube.com/@Idrako.official) project.

🌐 **Live site:** _https://idrakoofficial.github.io/Curriculum/_

---

## ✨ Features

- 🎬 **Cinematic dark/fantasy design** with custom video background support in the hero
- 🌍 **Bilingual switch** (Italian / English) with localStorage persistence
- 📺 **YouTube embeds** for music videos and school project spots
- 📊 **Animated skill bars** for AI tools and Graphic Design stack
- ✨ **Particle background** with custom canvas animation
- 🖱️ **Minimal cursor** with hover state (desktop only)
- 📱 **Fully responsive** (desktop, tablet, mobile)
- ⚡ **Zero dependencies** — pure HTML, CSS, JS (only Google Fonts via CDN)

---

## 📁 Project structure

```
.
├── index.html          # Main HTML
├── style.css           # All styles (cinematic dark theme)
├── script.js           # Interactions, i18n, particles, animations
├── assets/
│   ├── idrako-logo.png  # Idrako brand logo (used in nav and footer)
│   ├── dario-profile.jpg # Profile photo
│   └── hero-bg.mp4      # ⚠️ ADD THIS: background video for the hero (see below)
├── .gitignore
└── README.md
```

---

## 🎥 How to add the hero background video

The hero supports an autoplay/muted/looped background video. Just place your file at:

```
assets/hero-bg.mp4
```

**Requirements for best results:**
- Format: **MP4** (H.264 codec)
- Duration: **5-15 seconds** (it will loop seamlessly)
- Resolution: **1920×1080** or **1280×720**
- Size: **under 15 MB** (GitHub free tier limit, and faster page load)
- No audio (it's muted anyway)

If the file is missing, the hero gracefully falls back to an animated CSS glacial nebula effect — so you can deploy without the video and add it later.

**To compress a heavy video** to web-ready size, use [HandBrake](https://handbrake.fr) (free) with preset *"Web → Vimeo YouTube HQ 1080p60"* or [FFmpeg](https://ffmpeg.org):

```bash
ffmpeg -i input.mov -vcodec h264 -an -crf 28 -preset slow -movflags +faststart hero-bg.mp4
```

---

## 🚀 Quick start (local)

```bash
# Python 3
python3 -m http.server 8080
# Then open http://localhost:8080
```

Or just open `index.html` in your browser.

---

## 🌐 Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
4. Click **Save**
5. Visit `https://<your-username>.github.io/<repo-name>/`

---

## 📬 Contact

- 📧 **Idrako:** idrako.official@gmail.com
- 📧 **Personal:** dariodidaj46@gmail.com
- 📱 **Phone:** +39 346 672 5582
- 📍 **Location:** Monza · Milano · Italia
- 🎵 [YouTube · @Idrako.official](https://www.youtube.com/@Idrako.official)
- 🎧 [Spotify · Idrako](https://open.spotify.com/intl-it/artist/6WNUzAlXw4T6A8kM6XRzPc)
- 📷 [Instagram · @idrako.official](https://www.instagram.com/idrako.official/)
- 🎵 [TikTok · @idrako.official](https://www.tiktok.com/@idrako.official)
- 🐦 [X · @IdrakoOfficial](https://x.com/IdrakoOfficial)
- 🧵 [Threads · @idrako.official](https://www.threads.com/@idrako.official)

---

© 2026 Dario Didaj — Designed & built with AI 🐉
