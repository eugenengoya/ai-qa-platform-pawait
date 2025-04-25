"use client"

import Chat from "@/components/chat";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 container mx-auto max-w-7xl p-4">
      <h1 className="font-bold text-xl">AI Q&A Platform</h1>
      <Chat />
    </div>
  );
}
