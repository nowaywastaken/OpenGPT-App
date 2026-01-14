import { createClient } from '@deepgram/sdk';

const DEEPGRAM_API_KEY = process.env.EXPO_PUBLIC_DEEPGRAM_API_KEY || '';

if (!DEEPGRAM_API_KEY) {
  console.warn('Deepgram API Key is missing. Speaker diarization will be disabled.');
}

export const deepgram = createClient(DEEPGRAM_API_KEY);

/**
 * Transcribe audio with speaker diarization.
 */
export const transcribeWithDiarization = async (audioUrl: string) => {
  if (!DEEPGRAM_API_KEY) return null;

  try {
    const { result, error } = await deepgram.listen.prerecorded.url(
      { url: audioUrl },
      {
        smart_format: true,
        diarize: true,
        model: 'nova-2',
      }
    );

    if (error) throw error;
    return result;
  } catch (err) {
    console.error('Deepgram transcription error:', err);
    return null;
  }
};
