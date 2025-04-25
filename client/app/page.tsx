"use client"

import Chat from "@/components/chat";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 container mx-auto max-w-7xl">
      <h1>AI Q&A Platform</h1>
      <Chat />
    </div>
  );
}
