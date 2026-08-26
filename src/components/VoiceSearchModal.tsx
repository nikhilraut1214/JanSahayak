import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, X, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface VoiceSearchModalProps {
  onQueryRecognized: (query: string) => void;
  onClose: () => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({ onQueryRecognized, onClose }) => {
  const { language } = useApp();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check speech recognition browser support
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMessage("Speech recognition is not supported in this browser. Please type your search query manually.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    // Set speech language code based on selected portal language
    if (language === 'hi') recognition.lang = 'hi-IN';
    else if (language === 'mr') recognition.lang = 'mr-IN';
    else recognition.lang = 'en-IN';

    recognition.onstart = () => {
      setIsListening(true);
      setErrorMessage('');
    };

    recognition.onresult = (event: any) => {
      let currentText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentText += event.results[i][0].transcript;
      }
      setTranscript(currentText);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'no-speech') {
        setErrorMessage("No speech was detected. Please try speaking again.");
      } else {
        setErrorMessage(`Voice input error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (e) {
      console.error(e);
    }

    return () => {
      try {
        recognition.stop();
      } catch (e) {}
    };
  }, [language]);

  const handleConfirm = () => {
    if (transcript.trim()) {
      onQueryRecognized(transcript);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-6 relative animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Voice Search Assistant</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {isListening ? "Listening... Speak Now" : "Voice Input Completed"}
          </h3>
          <p className="text-xs text-slate-500">
            Language: <strong className="uppercase font-mono text-emerald-600">{language}</strong>
          </p>
        </div>

        {/* Animated Microphone Circle */}
        <div className="flex justify-center my-4">
          <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
            isListening 
              ? 'bg-rose-600 text-white ring-8 ring-rose-200 dark:ring-rose-950 animate-pulse' 
              : 'bg-emerald-600 text-white'
          }`}>
            {isListening ? <Mic className="w-10 h-10 animate-bounce" /> : <MicOff className="w-10 h-10" />}
          </div>
        </div>

        {/* Transcript Output Box */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 min-h-[80px] flex items-center justify-center border border-slate-200 dark:border-slate-700">
          {transcript ? (
            <p className="text-base font-semibold text-slate-900 dark:text-white italic">
              "{transcript}"
            </p>
          ) : errorMessage ? (
            <p className="text-xs font-medium text-rose-600 dark:text-rose-400">
              {errorMessage}
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              Say e.g. "Kisan loan" or "Girl scholarship"
            </p>
          )}
        </div>

        {/* Confirm or Retry Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!transcript.trim()}
            className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 disabled:opacity-50 shadow-md"
          >
            Search Scheme
          </button>
        </div>
      </div>
    </div>
  );
};
