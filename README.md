# WhatsApp Clone

A full-featured WhatsApp clone built with the latest web technologies, featuring real-time messaging, AI chat integration, and video calling capabilities.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Convex](https://img.shields.io/badge/Convex-Backend-orange)
![Clerk](https://img.shields.io/badge/Clerk-Auth-blue)
![ZegoCloud](https://img.shields.io/badge/ZegoCloud-Video_Call-green)
![OpenAI](https://img.shields.io/badge/OpenAI-AI-412991)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🚀 Key Features

*   **Real-time Messaging**: Instant text, image, and video messages powered by **Convex**.
*   **AI Integration**:
    *   **Chatbot**: Interact with a GPT-3.5 powered bot in chats.
    *   **Image Generation**: Generate images using DALL-E 3 directly within the chat.
*   **Video & Voice Calls**: High-quality video and voice calls using **ZegoCloud**.
*   **Authentication**: Secure user authentication via **Clerk**.
*   **Online Status**: Real-time user presence indicators.
*   **Group Chats**: Create and manage group conversations.
*   **Responsive UI**: Modern interface built with **Shadcn UI** and **Tailwind CSS**.
*   **Themes**: Light and dark mode support.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Backend & DB**: [Convex](https://www.convex.dev/)
*   **Auth**: [Clerk](https://clerk.com/)
*   **Video Calls**: [ZegoCloud](https://www.zegocloud.com/)
*   **AI**: [OpenAI API](https://openai.com/) (GPT-3.5 & DALL-E)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## ⚙️ Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   npm, yarn, pnpm, or bun

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/whatsapp-clone.git
cd whatsapp
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and populate it with the following keys:

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

### 4. Start Convex

Run the Convex development server to sync your schema and functions.

```bash
npx convex dev
```

### 5. Run the Application

In a new terminal window, start the Next.js development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to use the app.

## 📂 Project Structure

*   `/src/app`: Next.js App Router pages and layouts.
*   `/src/components`: Reusable UI components.
*   `/convex`: Backend functions (API), schema, and actions (OpenAI).
*   `/src/providers`: Application providers (Theme, ConvexClient).
*   `/src/store`: Global state management with Zustand.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
