# KAIRO ZYNEX

A multi-device WhatsApp bot built on [Baileys](https://github.com/WhiskeySockets/Baileys), with a web-based pairing page, group management tools, media utilities, downloaders, and more.

## 🔗 Pairing

1. Deploy the project (see below).
2. Open the pairing website (the URL shown in your deploy logs / Railway domain).
3. Enter your WhatsApp number and generate a pairing code.
4. On your phone: **WhatsApp → Linked devices → Link a device → Link with phone number instead**, then enter the code.

## ⚙️ Setup

```bash
npm install
node index.js
```

### Environment variables

| Variable | Description |
|---|---|
| `OWNER_NUM` | Owner's WhatsApp number (digits only, with country code) |
| `PORT` | Port for the pairing website (default `3000`) |
| `GTECH_API_KEY` | Optional, needed for `.video1` |
| `TELEGRAM_BOT_TOKEN` | Optional, needed for `.telegram` sticker packs |

## 📜 Commands

Send `.menu` to the bot to see the full, always up-to-date command list, organized by category (Tools, Config, Group, Media, Search, Download, New, Tags).

Highlights:
- **Group management** — kick, promote, demote, mute, antilink, welcome/goodbye messages, group status broadcasts.
- **Media tools** — stickers, sticker-to-image, view-once reveal, profile picture tools, custom logo generator.
- **Downloaders** — YouTube, TikTok, Instagram, Facebook, APK search.
- **Utilities** — calculator, JID/group info lookups, quote tool.

## 🛠 Project structure

```
commands/    → one file per feature/command
events/      → the message router (messageHandler.js)
utils/       → WhatsApp connection, config persistence
web/         → the pairing website
```

## ⚠️ Disclaimer

This bot automates a personal WhatsApp account through an unofficial library. Use it on a number you're comfortable putting at risk of restriction, and follow WhatsApp's Terms of Service.

---
*Powered by KAIRO ZYNEX*
