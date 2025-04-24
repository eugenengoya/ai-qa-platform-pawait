"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function PromptForm() {
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!prompt.trim()) return
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
            setResponse(data.response)
        } catch (error) {
            console.error("Error submitting prompt:", error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-lg items-center space-x-2">
                <Input type="text" placeholder="Ask..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Button type="submit" className='cursor-pointer' size={"icon"}><Search /></Button>
            </form>
            <p>{response}</p>
        </div>
    )
}
