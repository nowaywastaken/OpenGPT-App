import { ZepClient } from '@getzep/zep-js';

const ZEP_API_KEY = process.env.EXPO_PUBLIC_ZEP_API_KEY || '';

if (!ZEP_API_KEY) {
  console.warn('Zep API Key is missing. Temporal memory will not be persisted.');
}

export const zepClient = new ZepClient({
  apiKey: ZEP_API_KEY,
  baseUrl: 'https://api.zep.ai', // Default Zep Cloud URL
});

/**
 * Synchronize a message with Zep for long-term memory extraction.
 */
export const syncToZep = async (sessionId: string, message: { role: string; content: string }) => {
  if (!ZEP_API_KEY) return;

  try {
    await (zepClient as any).memory.addMemory(sessionId, {
      messages: [
        {
          role: message.role,
          content: message.content,
        },
      ],
    });
    console.log('Synced to Zep successfully');
  } catch (error) {
    console.error('Error syncing to Zep:', error);
  }
};
