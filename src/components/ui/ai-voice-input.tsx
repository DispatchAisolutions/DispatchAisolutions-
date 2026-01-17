"use client";

import { Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function ThinkingDots() {
  return (
    <span className="inline-flex gap-1 ml-1">
      <span className="animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1s' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1s' }}>.</span>
    </span>
  );
}

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  demoMode?: boolean;
  demoInterval?: number;
  className?: string;
  isActive?: boolean;
  onToggle?: () => void;
  isSpeaking?: boolean;
  callStatus?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 48,
  demoMode = false,
  demoInterval = 3000,
  className,
  isActive = false,
  onToggle,
  isSpeaking = false,
  callStatus = ""
}: AIVoiceInputProps) {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDemo, setIsDemo] = useState(demoMode);
  const [barHeights, setBarHeights] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);
    setBarHeights(Array(visualizerBars).fill(0).map(() => Math.random()));
  }, [visualizerBars]);

  useEffect(() => {
    setSubmitted(isActive);
  }, [isActive]);

  useEffect(() => {
    if (!submitted || !isClient) return;

    const animationInterval = setInterval(() => {
      setBarHeights(Array(visualizerBars).fill(0).map(() => Math.random()));
    }, 100);

    return () => clearInterval(animationInterval);
  }, [submitted, visualizerBars, isClient, isSpeaking]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (submitted) {
      onStart?.();
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      onStop?.(time);
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [submitted, time, onStart, onStop]);

  useEffect(() => {
    if (!isDemo) return;

    let timeoutId: NodeJS.Timeout;
    const runAnimation = () => {
      setSubmitted(true);
      timeoutId = setTimeout(() => {
        setSubmitted(false);
        timeoutId = setTimeout(runAnimation, 1000);
      }, demoInterval);
    };

    const initialTimeout = setTimeout(runAnimation, 100);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [isDemo, demoInterval]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClick = () => {
    if (isDemo) {
      setIsDemo(false);
      setSubmitted(false);
    } else {
      onToggle?.();
    }
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 relative",
            submitted
              ? callStatus === "Connecting..."
                ? "bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 animate-pulse-glow"
                : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
              : "bg-none hover:bg-black/10 dark:hover:bg-white/10 active:scale-95"
          )}
          type="button"
          onClick={handleClick}
        >
          {submitted ? (
            <div className="relative">
              <Mic className={cn(
                "w-6 h-6 transition-all duration-300",
                callStatus === "Connecting..."
                  ? "text-yellow-400 animate-vibrate-color"
                  : isSpeaking
                    ? "text-indigo-400 scale-110"
                    : "text-white/70"
              )} />
              {isSpeaking && (
                <div className="absolute inset-0 -m-2">
                  <div className="w-10 h-10 bg-indigo-500/30 rounded-full animate-ping" />
                </div>
              )}
              {callStatus === "Connecting..." && (
                <>
                  <div className="absolute inset-0 -m-3 animate-vibrate-color">
                    <div className="w-12 h-12 border-2 border-yellow-500/50 border-t-yellow-500 rounded-full animate-spin" />
                  </div>
                  <div className="absolute inset-0 -m-2">
                    <div className="w-10 h-10 bg-yellow-500/30 rounded-full animate-ping" style={{ animationDuration: '1s' }} />
                  </div>
                  <div className="absolute inset-0 -m-4">
                    <div className="w-14 h-14 border-2 border-yellow-500/30 rounded-full animate-ping" style={{ animationDuration: '1.2s' }} />
                  </div>
                  <div className="absolute inset-0 -m-5">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full animate-ping" style={{ animationDuration: '1.8s' }} />
                  </div>
                </>
              )}
            </div>
          ) : (
            <Mic className="w-6 h-6 text-white/70 transition-transform duration-150" />
          )}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            submitted
              ? "text-white/70"
              : "text-white/30"
          )}
        >
          {formatTime(time)}
        </span>

        <div className="h-12 w-64 flex items-center justify-center gap-0.5">
          {[...Array(visualizerBars)].map((_, i) => {
            const height = submitted && isClient
              ? callStatus === "Connecting..."
                ? 15 + barHeights[i] * 45
                : isSpeaking
                  ? 20 + barHeights[i] * 60
                  : 10 + barHeights[i] * 30
              : 4;

            return (
              <div
                key={i}
                className={cn(
                  "w-0.5 rounded-full transition-all duration-75",
                  submitted
                    ? callStatus === "Connecting..."
                      ? "bg-gradient-to-t from-yellow-500 via-amber-400 to-yellow-300"
                      : isSpeaking
                        ? "bg-gradient-to-t from-indigo-500 to-purple-500"
                        : "bg-gradient-to-t from-green-500 to-emerald-500"
                    : "bg-white/10"
                )}
                style={{
                  height: `${height}%`,
                  opacity: callStatus === "Connecting..." ? 0.8 + barHeights[i] * 0.2 : 1
                }}
              />
            );
          })}
        </div>

        <p className={cn(
          "h-4 text-xs transition-all duration-300",
          submitted
            ? callStatus === "Connecting..."
              ? "text-yellow-400 font-medium"
              : isSpeaking
                ? "text-indigo-400 font-medium"
                : "text-emerald-400 font-medium"
            : "text-white/70"
        )}>
          {submitted ? (
            callStatus === "Connecting..." ? (
              <span>AI is connecting<ThinkingDots /></span>
            ) : callStatus ? (
              callStatus
            ) : isSpeaking ? (
              "AI is speaking..."
            ) : (
              "Listening..."
            )
          ) : (
            "Click to speak. May take a sec"
          )}
        </p>
      </div>
    </div>
  );
}
