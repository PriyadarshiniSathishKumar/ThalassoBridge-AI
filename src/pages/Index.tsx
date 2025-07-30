import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/DashboardCard";
import ChatInterface from "@/components/ChatInterface";
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
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-medical-teal overflow-hidden">
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
              <Button size="lg" variant="care" className="shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                Find Blood Donors
              </Button>
              <Button size="lg" variant="gentle" className="shadow-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get AI Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b bg-card">
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
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="care" className="h-20 flex-col">
                    <Droplets className="h-6 w-6 mb-2" />
                    Register as Donor
                  </Button>
                  <Button variant="urgent" className="h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Schedule Transfusion
                  </Button>
                  <Button variant="success" className="h-20 flex-col">
                    <Zap className="h-6 w-6 mb-2" />
                    Emergency Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "match", message: "Successful match found for Patient #1247 (O+)", time: "2 hours ago" },
                    { type: "donation", message: "New donor registered: Rajesh Kumar (B+)", time: "4 hours ago" },
                    { type: "prediction", message: "AI predicted 85% donation likelihood for Donor #891", time: "6 hours ago" },
                    { type: "support", message: "Chat session completed for thalassemia guidance", time: "8 hours ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
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
          <div className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">AI Medical Assistant</h2>
              <p className="text-muted-foreground">
                Get instant support for thalassemia questions, blood donation guidance, and medical information
              </p>
            </div>
            <ChatInterface />
          </div>
        )}

        {/* Prediction Section */}
        {activeSection === "prediction" && (
          <div className="animate-fade-in space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Donor Prediction Model</h2>
              <p className="text-muted-foreground">
                AI-powered analysis to predict donor likelihood and optimize matching
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prediction Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-medical-green/10 rounded-lg border border-medical-green/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">High Likelihood Donors</span>
                        <span className="text-medical-green font-bold">847</span>
                      </div>
                      <div className="w-full bg-medical-green/20 rounded-full h-2">
                        <div className="bg-medical-green h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-medical-amber/10 rounded-lg border border-medical-amber/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Medium Likelihood</span>
                        <span className="text-medical-amber font-bold">392</span>
                      </div>
                      <div className="w-full bg-medical-amber/20 rounded-full h-2">
                        <div className="bg-medical-amber h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Low Likelihood</span>
                        <span className="text-destructive font-bold">156</span>
                      </div>
                      <div className="w-full bg-destructive/20 rounded-full h-2">
                        <div className="bg-destructive h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Model Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Accuracy</span>
                      <span className="font-bold text-medical-green">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Precision</span>
                      <span className="font-bold text-medical-green">91.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Recall</span>
                      <span className="font-bold text-medical-green">89.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>F1 Score</span>
                      <span className="font-bold text-medical-green">90.6%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Key Factors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Donation frequency (35%)</li>
                      <li>• Time since last donation (28%)</li>
                      <li>• Total volume donated (22%)</li>
                      <li>• Donor age and location (15%)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;