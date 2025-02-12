"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import GlobeDemo from "@/components/globe-demo"

export default function InteractiveDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant for exploring countries. Which country would you like to learn about?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Simulate AI response (in a real app, this would call an API)
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: `Here's some information about ${input}...` }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <section id="demo" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Try XpatAI</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <GlobeDemo />
          </div>
          <div className="w-full md:w-1/2 bg-gray-700 rounded-lg p-4">
            <ScrollArea className="h-[400px] mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-600" : "bg-gray-600"}`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a country..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

