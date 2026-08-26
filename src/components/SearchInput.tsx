import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic, MicOff, X, Sparkles, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  onOpenVoiceModal?: () => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
  size?: 'normal' | 'large';
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  onOpenVoiceModal,
  placeholder,
  className = '',
  inputClassName = '',
  autoFocus = false,
  size = 'normal',
}) => {
  const { language, t, logSearchQuery } = useApp();
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const latestTranscriptRef = useRef<string>('');

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      if (language === 'hi') recognition.lang = 'hi-IN';
      else if (language === 'mr') recognition.lang = 'mr-IN';
      else recognition.lang = 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
        latestTranscriptRef.current = '';
      };

      recognition.onresult = (event: any) => {
        let currentText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentText += event.results[i][0].transcript;
        }
        if (currentText) {
          latestTranscriptRef.current = currentText;
          onChange(currentText);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'no-speech') {
          setSpeechError(language === 'hi' ? 'कोई आवाज नहीं सुनी गई' : language === 'mr' ? 'कोणताही आवाज ऐकू आला नाही' : 'No speech detected');
        } else if (event.error === 'not-allowed') {
          setSpeechError(language === 'hi' ? 'माइक एक्सेस अस्वीकृत' : language === 'mr' ? 'मायक्रोफोन प्रवेश नाकारला' : 'Microphone permission denied');
        } else {
          setSpeechError(`Voice error: ${event.error}`);
        }
        setTimeout(() => setSpeechError(null), 3500);
      };

      recognition.onend = () => {
        setIsListening(false);
        const finalQuery = latestTranscriptRef.current.trim();
        if (finalQuery && onSearch) {
          onSearch(finalQuery);
          logSearchQuery(finalQuery, 0, 'Voice Search');
        }
      };

      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Speech recognition setup error:', e);
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    };
  }, [language, onChange, onSearch, logSearchQuery]);

  const toggleListening = () => {
    if (!isSupported) {
      if (onOpenVoiceModal) onOpenVoiceModal();
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current?.stop();
      } catch (e) {}
      setIsListening(false);
    } else {
      try {
        if (language === 'hi') recognitionRef.current.lang = 'hi-IN';
        else if (language === 'mr') recognitionRef.current.lang = 'mr-IN';
        else recognitionRef.current.lang = 'en-IN';

        recognitionRef.current?.start();
      } catch (e) {
        console.error('Failed to start speech recognition:', e);
        if (onOpenVoiceModal) onOpenVoiceModal();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSearch) {
      onSearch(value.trim());
      logSearchQuery(value.trim(), 0, 'All');
    }
  };

  const isLarge = size === 'large';

  return (
    <div className={`relative w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex items-center w-full">
        <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none ${isLarge ? 'w-6 h-6 left-4' : 'w-5 h-5'}`} />
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoFocus={autoFocus}
          placeholder={placeholder || t('searchPlaceholder')}
          className={`w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl ${
            isLarge ? 'pl-12 pr-28 py-3.5 text-base sm:text-lg' : 'pl-11 pr-24 py-3 text-sm'
          } font-medium text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm transition-all ${inputClassName}`}
        />

        {/* Action Controls Inside Right of Search Bar */}
        <div className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1`}>
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Direct Speech Recognition Mic Trigger */}
          <button
            type="button"
            onClick={toggleListening}
            className={`p-2 rounded-xl transition-all flex items-center gap-1 text-xs font-bold ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse ring-2 ring-rose-400'
                : 'bg-slate-100 hover:bg-rose-50 text-rose-700 border border-slate-200/80 dark:bg-slate-800 dark:text-rose-400 dark:border-slate-700 dark:hover:bg-slate-700'
            }`}
            title={isListening ? 'Listening... Click to stop' : 'Voice Search (Web Speech API)'}
          >
            {isListening ? (
              <>
                <Mic className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline text-[11px] font-bold">
                  {language === 'hi' ? 'सुन रहे हैं...' : language === 'mr' ? 'ऐकत आहे...' : 'Listening...'}
                </span>
              </>
            ) : (
              <Mic className="w-4 h-4 text-rose-700 dark:text-rose-400" />
            )}
          </button>

          {/* Guided Voice Assistant Modal Trigger */}
          {onOpenVoiceModal && (
            <button
              type="button"
              onClick={onOpenVoiceModal}
              className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/60 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60 dark:hover:bg-amber-900 transition-colors hidden sm:flex items-center"
              title="Open Voice Assistant Helper"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Speech Status Feedback Banner */}
      {isListening && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2.5 rounded-xl bg-slate-900 text-white dark:bg-emerald-950 border border-emerald-500 shadow-xl z-20 flex items-center justify-between text-xs animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span className="font-semibold text-emerald-300">
              {language === 'hi' ? 'बोलिए... (वेब स्पीच एपीआई सक्रिय है)' : language === 'mr' ? 'बोला... (वेब स्पीच एपीआई सुरू आहे)' : 'Speak now... (Web Speech API active)'}
            </span>
          </div>
          <button
            onClick={toggleListening}
            className="text-slate-300 hover:text-white font-bold underline text-[11px]"
          >
            Stop
          </button>
        </div>
      )}

      {speechError && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 border border-rose-300 text-xs text-center z-20 shadow-md">
          {speechError}
        </div>
      )}
    </div>
  );
};
