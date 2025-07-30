import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm ThalassoBridge AI. I'm here to help you with thalassemia questions, blood donation guidance, and medical support. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("thalassemia") || lowerInput.includes("hb")) {
      return "Thalassemia is a blood disorder affecting hemoglobin production. Regular monitoring of HbA2 and HbF levels is important. Would you like me to explain your test results or discuss treatment options?";
    }
    
    if (lowerInput.includes("donate") || lowerInput.includes("blood")) {
      return "Blood donation is crucial for thalassemia patients. If you donated 4+ months ago, you're typically eligible again. Your O+ blood type is especially valuable. Would you like help finding nearby patients in need?";
    }
    
    if (lowerInput.includes("mcv") || lowerInput.includes("mch")) {
      return "MCV (Mean Corpuscular Volume) and MCH (Mean Corpuscular Hemoglobin) measure red blood cell size and hemoglobin content. In thalassemia, these values are often low. Would you like me to interpret your specific values?";
    }
    
    return "Thank you for your question. I'm here to provide support and information about thalassemia, blood donation, and medical guidance. Could you share more details so I can better assist you?";
  };

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          ThalassoBridge AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        <ScrollArea className="flex-1 mb-4 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                {message.type === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about thalassemia, blood donation, or medical guidance..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="icon" variant="care">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;