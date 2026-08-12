import { useEffect, useState, useRef } from "react";
import { X, Mic, MessageCircle } from "lucide-react";
import { Button } from "./button";
import { NavBar } from "./tubelight-navbar";
import { BackgroundPaths } from "./background-paths";
import { StarButton } from "./star-button";
import { AIVoiceInput } from "./ai-voice-input";
import Vapi from "@vapi-ai/web";

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VAPI_API_KEY = "d9e968bc-3810-4b46-af34-e4f7b78aecbb";
const VAPI_ASSISTANT_ID = "469b4b26-e255-4145-a097-ce8c49ab3175";
const BOOKING_URL = "https://cal.com/elhajjai/20min";

type TabType = "voice" | "chat";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

export function LiveDemoModal({ isOpen, onClose }: LiveDemoModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("voice");
  const [chatbotLoaded, setChatbotLoaded] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  const navItems = [
    { name: "Voice", value: "voice", icon: Mic },
    { name: "Chat", value: "chat", icon: MessageCircle },
  ];

  useEffect(() => {
    if (!vapiRef.current) {
      const vapi = new Vapi(VAPI_API_KEY);
      vapiRef.current = vapi;

      vapi.on("call-start", () => {
        setIsCallActive(true);
        setCallStatus("Call connected");
      });

      vapi.on("call-end", () => {
        setIsCallActive(false);
        setIsSpeaking(false);
        setCallStatus("");
      });

      vapi.on("speech-start", () => {
        setIsSpeaking(true);
        setCallStatus("Assistant is speaking...");
      });

      vapi.on("speech-end", () => {
        setIsSpeaking(false);
        setCallStatus("Listening...");
      });

      vapi.on("error", (error: any) => {
        console.error("Vapi error:", error);
        setCallStatus("Error occurred");
        setIsCallActive(false);
        setIsSpeaking(false);
      });
    }

    return () => {
      if (vapiRef.current && isCallActive) {
        vapiRef.current.stop();
      }
    };
  }, [isCallActive]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setChatbotLoaded(false);
      if (vapiRef.current && isCallActive) {
        vapiRef.current.stop();
        setIsCallActive(false);
        setIsSpeaking(false);
        setCallStatus("");
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, isCallActive]);

  if (!isOpen) return null;

  const loadVoiceflowChatbot = () => {
    if (chatbotLoaded) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      setTimeout(() => {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: '69680e1559ce26a0443d46de' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com'
            },
            render: {
              mode: 'embedded',
              target: document.getElementById('voiceflow-chatbot-container')
            }
          });
        }
      }, 100);
    };
    document.body.appendChild(script);
    setChatbotLoaded(true);
  };

  const startVoiceCall = async () => {
    if (!vapiRef.current) return;

    try {
      setIsCallActive(true);
      setCallStatus("Connecting...");
      await vapiRef.current.start(VAPI_ASSISTANT_ID);
    } catch (error) {
      console.error("Failed to start call:", error);
      setCallStatus("Failed to connect");
      setIsCallActive(false);
    }
  };

  const endVoiceCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      setIsCallActive(false);
      setIsSpeaking(false);
      setCallStatus("");
    }
  };

  const handleStartDemo = (type: TabType) => {
    if (type === "voice") {
      startVoiceCall();
    } else {
      loadVoiceflowChatbot();
    }
  };

  const content = {
    voice: {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Agent",
      description: "Talk with our AI agent in real-time. Click the microphone to start.",
    },
    chat: {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Agent",
      description:
        chatbotLoaded
          ? "Chat with our AI agent below. Ask any questions you have."
          : "Click Start chat demo to type to the agent. Ask a quick question to try it.",
      buttonText: "Start chat demo",
    },
  };

  const currentContent = content[activeTab];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative bg-[#0a0a0a] rounded-[24px] shadow-2xl ${activeTab === "chat" && chatbotLoaded ? "max-w-2xl" : "max-w-md"} w-full mx-4 border border-white/10 overflow-hidden transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <BackgroundPaths />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`relative z-10 ${activeTab === "chat" && chatbotLoaded ? "p-6 pb-20" : "p-8 pb-24"}`}>
          {!(activeTab === "chat" && chatbotLoaded) && (
            <>
              <div className="mb-8">
                <h2
                  id="modal-title"
                  className="text-3xl font-bold text-white mb-2"
                >
                  Live AI Demo
                </h2>
                <p className="text-gray-400 text-sm">Pick a mode. No signup.</p>
              </div>

              <NavBar
                items={navItems}
                activeTab={activeTab}
                onTabChange={(value) => setActiveTab(value as TabType)}
                className="mb-8"
              />
            </>
          )}

          {activeTab === "chat" && chatbotLoaded ? (
            <div
              id="voiceflow-chatbot-container"
              className="w-full h-[550px] rounded-lg overflow-hidden"
            />
          ) : activeTab === "voice" ? (
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                  {currentContent.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>
              </div>

              <AIVoiceInput
                isActive={isCallActive}
                isSpeaking={isSpeaking}
                callStatus={callStatus}
                onToggle={() => {
                  if (isCallActive) {
                    endVoiceCall();
                  } else {
                    startVoiceCall();
                  }
                }}
                visualizerBars={48}
              />
            </div>
          ) : (
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                  {currentContent.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>
              </div>

              <StarButton
                onClick={() => handleStartDemo(activeTab)}
                className="w-full font-semibold py-6 text-base"
                lightColor="#FBBF24"
                duration={6}
              >
                {content.chat.buttonText}
              </StarButton>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 rounded-b-[24px] px-8 py-5 flex items-center justify-between z-10">
          <span className="text-gray-400 text-sm">
            Want this for your business?
          </span>
          <Button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            variant="outline"
            className="bg-white/5 hover:bg-white/10 border-white/20 text-white text-sm px-5 py-2 h-auto rounded-full"
          >
            Let's talk
          </Button>
        </div>
      </div>
    </div>
  );
}
