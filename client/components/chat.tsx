"use client"

import ChatWindow from '@/components/chat-window';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function Chat() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState<Message[]>([]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!prompt.trim()) return
        const userMessage = { role: 'user' as const, content: prompt };
        setMessages((prev) => [...prev, userMessage]);
        setPrompt("");
        try {
            const res = await fetch("http://localhost:8000/api/prompt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            })
            if (!res.ok) {
                throw new Error("Failed to submit prompt")
            }
            const data = await res.json()
            const assistantMessage = {
                role: 'assistant' as const,
                content: data.response.response,
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error submitting prompt:", error)
        }
    }

    return (
        <div>
            <ChatWindow messages={messages} />
            <form onSubmit={handleSubmit} className="flex w-full max-w-lg items-center space-x-2">
                <Input type="text" placeholder="Ask..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Button type="submit" className='cursor-pointer' size={"icon"}><Search /></Button>
            </form>
        </div>
    )
}
