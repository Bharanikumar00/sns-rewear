
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MessageType = 'user' | 'ai';

interface ChatMessageProps {
  message: string;
  type: MessageType;
  isNew?: boolean;
}

const ChatMessage = ({ message, type, isNew = false }: ChatMessageProps) => {
  const isUser = type === 'user';

  return (
    <motion.div
      className={cn(
        "mb-4 max-w-[80%] w-fit",
        isUser ? "ml-auto" : "mr-auto"
      )}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn(
          "rounded-2xl p-4 shadow-md",
          isUser 
            ? "bg-primary text-primary-foreground rounded-tr-none" 
            : "bg-secondary text-secondary-foreground rounded-tl-none",
          isNew && "animate-pulse-slow"
        )}
      >
        {type === 'ai' ? (
          <div className="prose prose-sm max-w-none">
            {message.split('\n').map((paragraph, index) => {
              // Check if this is a numbered list item (like "1️⃣ Create a Listing")
              const listItemMatch = paragraph.match(/^(\d️⃣|\d\.)\s(.*)/);
              
              if (listItemMatch) {
                return (
                  <div key={index} className="flex items-start mb-2">
                    <span className="mr-2 text-xl">{listItemMatch[1]}</span>
                    <p className="m-0">{listItemMatch[2]}</p>
                  </div>
                );
              }
              
              // Regular paragraph
              return paragraph.trim() === '' ? (
                <br key={index} />
              ) : (
                <p key={index} className="mb-2">{paragraph}</p>
              );
            })}
          </div>
        ) : (
          <p className="m-0">{message}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
