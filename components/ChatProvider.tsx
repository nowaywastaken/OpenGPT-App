import React, { createContext, useContext, useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';

const STREAM_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY || '';

const ChatContext = createContext<{ client: StreamChat | null }>({ client: null });

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    if (!STREAM_KEY) return;

    const chatClient = StreamChat.getInstance(STREAM_KEY);
    
    // Note: In a real app, you would fetch a token from your backend (Supabase Edge Function)
    // and call client.connectUser here. For the initial setup, we just initialize.
    setClient(chatClient);

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);

  if (!client) return null;

  return (
    <ChatContext.Provider value={{ client }}>
      <OverlayProvider>
        <Chat client={client}>
          {children}
        </Chat>
      </OverlayProvider>
    </ChatContext.Provider>
  );
};
