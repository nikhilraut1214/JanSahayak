import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, MessageSquare, X, Send, CheckCircle2 } from 'lucide-react';

export const AnonymousFeedbackWidget: React.FC = () => {
  const { addFeedback, addToast, activeTab } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('General');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      addToast('Please enter your feedback message before submitting.', 'warning');
      return;
    }

    // Submit completely anonymously to Firestore & Local state
    addFeedback({
      rating,
      message: message.trim(),
      category,
      state: 'Anonymous Visitor',
      name: 'Anonymous',
      mobile: '',
      email: ''
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setMessage('');
      setRating(5);
    }, 2000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-emerald-700 hover:bg-emerald-800 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 border border-emerald-500/30 transition-all hover:scale-105"
        title="Share Anonymous Feedback"
      >
        <MessageSquare className="w-5 h-5 text-amber-300" />
        <span className="hidden sm:inline text-xs font-black uppercase tracking-wide">Feedback</span>
      </button>

      {/* Feedback Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Citizen Feedback
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    100% Anonymous • No account required
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Thank You!
                </h4>
                <p className="text-xs text-slate-500">
                  Your anonymous feedback has been recorded safely in Firestore.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Rating Prompt */}
                <div className="space-y-2 text-center">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    How was your experience with JanSahayak?
                  </label>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= (hoverRating || rating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Select */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400">
                    Topic / Feature
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="General">General Portal Experience</option>
                    <option value="Eligibility Wizard">Eligibility Wizard Engine</option>
                    <option value="Scheme Search">Scheme Search & Data</option>
                    <option value="Document Checker">Document Checker</option>
                    <option value="Language">Multilingual Translation</option>
                  </select>
                </div>

                {/* Feedback Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400">
                    Tell us what we can improve
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, missing schemes, or suggestions..."
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Anonymous Feedback</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
};
