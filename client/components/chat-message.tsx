import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-start flex-row-reverse' : ''} mb-4`}>
      <Avatar>
        <AvatarFallback>{isUser ? 'U' : 'G'}</AvatarFallback>
      </Avatar>
      <div
        className={`max-w-xl p-4 rounded-lg
          ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 dark:text-white'}
        `}
      >
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-200 dark:bg-gray-700">
                  {children}
                </code>
              );
            }
          }}
        />
      </div>
    </div>
  );
};
