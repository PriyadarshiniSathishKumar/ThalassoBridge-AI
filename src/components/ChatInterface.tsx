import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface QuickOption {
  id: string;
  label: string;
  category: string;
  response: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm ThalassoBridge AI, your medical assistant for thalassemia support and blood donation guidance. Choose a topic below or ask me anything:",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [showQuickOptions, setShowQuickOptions] = useState(true);

  const quickOptions: QuickOption[] = [
    {
      id: "thal-basic",
      label: "What is Thalassemia?",
      category: "Education",
      response: "Thalassemia is an inherited blood disorder where the body makes abnormal hemoglobin. There are two main types: Alpha and Beta thalassemia. Alpha thalassemia (which we can analyze) occurs when genes related to alpha globin protein are missing or changed. Symptoms include fatigue, weakness, pale skin, and slow growth in children."
    },
    {
      id: "test-results",
      label: "Interpret My Test Results",
      category: "Diagnosis",
      response: "I can help interpret your blood test results! Please share your values for: HbA2 (normal: 2.5-3.5%), HbF (normal: <1%), MCV (normal: 80-100 fL), MCH (normal: 27-33 pg), and Hemoglobin level. Based on our Alpha Thalassemia dataset, I can provide insights about your condition."
    },
    {
      id: "donation-eligible",
      label: "Am I Eligible to Donate?",
      category: "Donation",
      response: "Based on our blood transfusion dataset, you're typically eligible to donate if: 1) It's been 4+ months since your last donation, 2) You're 18-65 years old, 3) Weight >50kg, 4) Hemoglobin >12.5g/dL (women) or >13g/dL (men). Would you like me to check your specific situation?"
    },
    {
      id: "transfusion-schedule",
      label: "When Do I Need Transfusion?",
      category: "Treatment",
      response: "Transfusion needs depend on your hemoglobin levels and symptoms. Generally: Hb <7g/dL requires immediate transfusion, Hb 7-9g/dL may need transfusion if symptomatic, Hb >9g/dL usually doesn't require transfusion. For thalassemia patients, regular monitoring every 3-4 weeks is recommended."
    },
    {
      id: "diet-care",
      label: "Diet & Lifestyle Tips",
      category: "Care",
      response: "For thalassemia patients: 1) Avoid iron supplements unless prescribed, 2) Eat folate-rich foods (leafy greens, citrus), 3) Stay hydrated, 4) Regular exercise (as tolerated), 5) Avoid alcohol, 6) Take prescribed medications regularly. Iron overload is a concern, so dietary iron should be moderate."
    },
    {
      id: "emergency-signs",
      label: "Emergency Warning Signs",
      category: "Emergency",
      response: "Seek immediate medical attention if you experience: 1) Severe fatigue or weakness, 2) Chest pain or shortness of breath, 3) Irregular heartbeat, 4) Severe headache, 5) Abdominal pain, 6) Signs of infection (fever >100.4°F). These could indicate severe anemia or complications requiring urgent transfusion."
    }
  ];

  const sendMessage = (content?: string) => {
    const messageContent = content || inputMessage;
    if (!messageContent.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageContent,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setShowQuickOptions(false);

    // Find matching quick option or generate response
    setTimeout(() => {
      const matchingOption = quickOptions.find(option => 
        content === option.label || messageContent.toLowerCase().includes(option.id.split('-')[0])
      );

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: matchingOption ? matchingOption.response : generateResponse(messageContent),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("hba2") || lowerInput.includes("hbf")) {
      return "Based on our Alpha Thalassemia dataset: Normal HbA2 is 2.5-3.5%. Values >3.5% suggest beta thalassemia trait. HbF >1% in adults may indicate thalassemia. Please share your specific values for detailed interpretation.";
    }
    
    if (lowerInput.includes("mcv") || lowerInput.includes("mch")) {
      return "From our dataset analysis: Low MCV (<80 fL) and low MCH (<27 pg) are common in thalassemia. MCV 60-80 with MCH 20-27 often indicates thalassemia trait. Very low values (MCV <60) suggest more severe forms.";
    }
    
    if (lowerInput.includes("donate") || lowerInput.includes("blood")) {
      return "Our prediction model shows donors are more likely to donate again if: frequency >2 donations/year, last donation 4-6 months ago, and total volume >1000ml lifetime. We can predict your likelihood to donate with 94.2% accuracy!";
    }
    
    if (lowerInput.includes("hemoglobin") || lowerInput.includes("anemia")) {
      return "Hemoglobin levels in thalassemia: Trait carriers: 10-13 g/dL, Intermedia: 7-10 g/dL, Major: <7 g/dL. Regular monitoring is crucial. Transfusion typically needed when Hb drops below 7 g/dL or patient becomes symptomatic.";
    }
    
    return "I'm here to help with thalassemia questions, blood donation guidance, and medical support. Could you be more specific about your concern? You can also use the quick options above for common questions.";
  };

  const resetChat = () => {
    setMessages([{
      id: "1",
      type: "bot",
      content: "Hello! I'm ThalassoBridge AI, your medical assistant for thalassemia support and blood donation guidance. Choose a topic below or ask me anything:",
      timestamp: new Date()
    }]);
    setShowQuickOptions(true);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            ThalassoBridge AI Assistant
          </CardTitle>
          <Button variant="outline" size="sm" onClick={resetChat}>
            <MessageSquare className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        </div>
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
                      : "bg-muted text-foreground"
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

            {/* Quick Options */}
            {showQuickOptions && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Quick Options:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      size="sm"
                      onClick={() => sendMessage(option.label)}
                      className="justify-start h-auto p-3 text-left whitespace-normal"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {option.category}
                          </Badge>
                        </div>
                        <div className="text-sm">{option.label}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}
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
          <Button onClick={() => sendMessage()} size="icon" variant="care">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;