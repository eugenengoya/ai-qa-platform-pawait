import ChatMessage from '@/components/chat-message';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <Card className="max-h-[80vh]">
      <CardContent className='overflow-y-auto'>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <ChatMessage key={index} role={msg.role} content={msg.content} />
          ))
        ) : (
          <div className="text-muted-foreground text-sm italic">
            Ask...
          </div>
        )}

      </CardContent>
    </Card>
  );
};
