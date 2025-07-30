import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/DashboardCard";
import ChatInterface from "@/components/ChatInterface";
import ActionButtons from "@/components/ActionButtons";
import DonorPrediction from "@/components/DonorPrediction";
import { 
  Heart, 
  Droplets, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Activity,
  Calendar,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-care.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"dashboard" | "chat" | "prediction">("dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-primary-foreground max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              ThalassoBridge AI
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Connecting thalassemia patients with blood donors through AI-powered prediction and compassionate support
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="care" 
                className="shadow-lg"
                onClick={() => setActiveSection("dashboard")}
              >
                <Heart className="mr-2 h-5 w-5" />
                Find Blood Donors
              </Button>
              <Button 
                size="lg" 
                variant="gentle" 
                className="shadow-lg"
                onClick={() => setActiveSection("chat")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get AI Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-4">
            {[
              { id: "dashboard", label: "Dashboard", icon: Activity },
              { id: "chat", label: "AI Assistant", icon: MessageCircle },
              { id: "prediction", label: "Donor Prediction", icon: TrendingUp }
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeSection === id ? "care" : "ghost"}
                onClick={() => setActiveSection(id as any)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Dashboard Section */}
        {activeSection === "dashboard" && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                title="Active Donors"
                value="2,547"
                subtitle="+12% from last month"
                icon={<Users className="h-5 w-5" />}
                variant="success"
              />
              <DashboardCard
                title="Successful Matches"
                value="1,829"
                subtitle="This month"
                icon={<Heart className="h-5 w-5" />}
                variant="care"
              />
              <DashboardCard
                title="Blood Units Available"
                value="485"
                subtitle="All types"
                icon={<Droplets className="h-5 w-5" />}
                variant="urgent"
              />
              <DashboardCard
                title="AI Predictions Accuracy"
                value="94.2%"
                subtitle="Donor likelihood model"
                icon={<TrendingUp className="h-5 w-5" />}
                variant="success"
              />
            </div>

            {/* Quick Actions */}
            <ActionButtons />

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "match", message: "Successful match found for Patient #1247 (O+)", time: "2 hours ago", status: "success" },
                    { type: "donation", message: "New donor registered: Rajesh Kumar (B+)", time: "4 hours ago", status: "info" },
                    { type: "prediction", message: "AI predicted 85% donation likelihood for Donor #891", time: "6 hours ago", status: "warning" },
                    { type: "support", message: "Chat session completed for thalassemia guidance", time: "8 hours ago", status: "info" },
                    { type: "emergency", message: "Emergency request fulfilled - O- blood delivered", time: "12 hours ago", status: "success" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === "success" ? "bg-green-500" :
                        activity.status === "warning" ? "bg-amber-500" :
                        activity.status === "info" ? "bg-blue-500" : "bg-primary"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Chat Interface Section */}
        {activeSection === "chat" && (
          <div className="animate-fade-in" data-section="chat">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-foreground">AI Medical Assistant</h2>
              <p className="text-muted-foreground">
                Get instant support for thalassemia questions, blood donation guidance, and medical information based on real datasets
              </p>
            </div>
            <ChatInterface />
          </div>
        )}

        {/* Prediction Section */}
        {activeSection === "prediction" && (
          <div className="animate-fade-in space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Donor Prediction Model</h2>
              <p className="text-muted-foreground">
                AI-powered analysis using Blood Transfusion Dataset to predict donor likelihood and optimize matching
              </p>
            </div>

            <DonorPrediction />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;