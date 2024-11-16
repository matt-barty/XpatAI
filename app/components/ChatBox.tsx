'use client';

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import InteractiveMessage from './InteractiveMessage';
import { useConversation } from '../contexts/ConversationContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBox() {
  const [input, setInput] = useState('');
  const { messages, addMessage, isLoading, setIsLoading } = useConversation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    addMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/callGroq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok) {
        addMessage({
          role: 'assistant',
          content: data.message
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your message.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Chat</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <InteractiveMessage
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
        {isLoading && (
          <InteractiveMessage
            role="assistant"
            content=""
            isLoading={true}
          />
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
} 