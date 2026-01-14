import React, { useState, useOptimistic, useTransition, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import { Send } from 'lucide-react-native';
import { useChannelContext } from 'stream-chat-expo';
import { syncToZep } from '../lib/zep';

export const OptimisticMessageInput = () => {
  const { channel } = useChannelContext();
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();
  const aggregationTimer = useRef<NodeJS.Timeout | null>(null);
  const pendingMessages = useRef<string[]>([]);

  // useOptimistic for immediate local feedback
  // Note: Stream Chat has its own optimistic UI, but here we demonstrate the React 19 pattern
  // as requested in the Spec for the "No Pressure" experience.
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    [] as { text: string; id: string; status: 'pending' | 'sent' }[],
    (state, newMessage: string) => [
      ...state,
      { text: newMessage, id: Math.random().toString(), status: 'pending' as const }
    ]
  );

  const handleSend = () => {
    if (!text.trim()) return;

    const messageContent = text.trim();
    setText('');

    // Trigger optimistic update
    startTransition(() => {
      addOptimisticMessage(messageContent);
    });

    // Aggregation Logic (3-second window)
    pendingMessages.current.push(messageContent);
    
    if (aggregationTimer.current) {
      clearTimeout(aggregationTimer.current);
    }

    aggregationTimer.current = setTimeout(async () => {
      const combinedMessage = pendingMessages.current.join('\n');
      pendingMessages.current = [];
      aggregationTimer.current = null;

      try {
        await channel.sendMessage({
          text: combinedMessage,
        });
        
        // Sync to Zep Sherlock Memory asynchronously
        syncToZep('user-session-1', { 
          role: 'user', 
          content: combinedMessage 
        });
      } catch (error) {
        console.error('Failed to send aggregated message:', error);
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="说出你的想法..."
        placeholderTextColor="#8e8e93"
        multiline
      />
      <TouchableOpacity 
        style={[styles.sendButton, !text.trim() && styles.disabledButton]} 
        onPress={handleSend}
        disabled={!text.trim()}
      >
        <Send color={text.trim() ? "#0a84ff" : "#3a3a3c"} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    backgroundColor: '#1c1c1e',
    borderTopWidth: 1,
    borderTopColor: '#38383a',
  },
  input: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    color: '#fff',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 12,
    marginBottom: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
