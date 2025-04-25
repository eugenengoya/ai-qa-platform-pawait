import ChatMessage from '@/components/chat-message';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="overflow-y-auto max-h-[80vh]">
      {messages.map((msg, index) => (
        <ChatMessage key={index} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
};
