# Nexus | Connect Freely

![Nexus Badge](https://img.shields.io/badge/Status-Online-cyan)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Convex](https://img.shields.io/badge/Convex-Backend-orange)
![Clerk](https://img.shields.io/badge/Clerk-Auth-blue)
![ZegoCloud](https://img.shields.io/badge/ZegoCloud-Video_Call-green)

**Nexus** is a next-generation messaging platform designed for speed, security, and seamless connectivity. Built with a modern, futuristic aesthetic, it serves as the central hub for all your conversations.

## 🌌 Features

*   **⚡ Instant Messaging**: Powered by **Convex** for real-time, low-latency performance.
*   **🤖 Nexus AI**: Integrated smart assistant for chat summaries, translations, and image generation (DALL-E 3).
*   **🎥 Crystal Clear Calls**: High-definition video and voice calling via **ZegoCloud**.
*   **🔐 Secure Access**: Enterprise-grade authentication with **Clerk**.
*   **🎨 Deep Space Theme**: A stunning "Deep Space & Cyan" dark mode designed for focus and clarity.
*   **📱 Responsive Design**: Fully responsive UI built with **Shadcn UI** and **Tailwind CSS**.

## 🚀 Tech Stack

*   **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
*   **Backend**: Convex (Real-time DB & Functions)
*   **Auth**: Clerk
*   **Media**: ZegoCloud (WebRTC)
*   **AI**: OpenAI API

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/your-username/nexus.git
cd nexus
npm install
```

### 2. Environment Setup
Create a `.env.local` file:
```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# ZegoCloud
ZEGO_APP_ID=
ZEGO_SERVER_SECRET=
```

### 3. Launch Nexus
```bash
# Start backend
npx convex dev

# Start frontend
npm run dev
```

Visit `http://localhost:3000` to enter the Nexus.

## 📄 License
MIT License.
