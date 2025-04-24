"use client"

import PromptForm from "@/components/prompt-form";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>AI Q&A Platform</h1>
      <PromptForm />
    </div>
  );
}
