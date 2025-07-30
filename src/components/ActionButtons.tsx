import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplets, Calendar, Zap, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonorFormData {
  name: string;
  age: string;
  bloodType: string;
  phone: string;
  city: string;
  lastDonation: string;
  weight: string;
  hemoglobin: string;
}

interface PatientFormData {
  name: string;
  age: string;
  bloodType: string;
  phone: string;
  city: string;
  urgency: string;
  hospital: string;
  condition: string;
}

const ActionButtons = () => {
  const { toast } = useToast();
  const [donorForm, setDonorForm] = useState<DonorFormData>({
    name: "", age: "", bloodType: "", phone: "", city: "", 
    lastDonation: "", weight: "", hemoglobin: ""
  });
  const [patientForm, setPatientForm] = useState<PatientFormData>({
    name: "", age: "", bloodType: "", phone: "", city: "", 
    urgency: "", hospital: "", condition: ""
  });

  // Mock donor prediction based on blood transfusion dataset logic
  const calculateDonorLikelihood = (data: DonorFormData) => {
    const monthsSinceLastDonation = data.lastDonation ? 
      Math.floor((Date.now() - new Date(data.lastDonation).getTime()) / (1000 * 60 * 60 * 24 * 30)) : 0;
    
    let score = 0;
    if (monthsSinceLastDonation >= 4 && monthsSinceLastDonation <= 6) score += 30;
    if (parseInt(data.age) >= 18 && parseInt(data.age) <= 55) score += 25;
    if (parseFloat(data.hemoglobin) >= 12.5) score += 25;
    if (parseInt(data.weight) >= 50) score += 20;
    
    return Math.min(score, 95);
  };

  const findBloodDonors = () => {
    toast({
      title: "Finding Blood Donors",
      description: "Searching our database of 2,547 active donors...",
    });
    
    setTimeout(() => {
      toast({
        title: "Donors Found!",
        description: "Found 12 compatible donors within 10km. Sending notifications...",
      });
    }, 2000);
  };

  const handleDonorRegistration = () => {
    if (!donorForm.name || !donorForm.bloodType || !donorForm.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const likelihood = calculateDonorLikelihood(donorForm);
    
    toast({
      title: "Registration Successful!",
      description: `Welcome ${donorForm.name}! Donation likelihood: ${likelihood}%`,
    });

    // Reset form
    setDonorForm({
      name: "", age: "", bloodType: "", phone: "", city: "", 
      lastDonation: "", weight: "", hemoglobin: ""
    });
  };

  const scheduleTransfusion = () => {
    if (!patientForm.name || !patientForm.bloodType || !patientForm.urgency) {
      toast({
        title: "Missing Information", 
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Transfusion Scheduled",
      description: `Appointment booked for ${patientForm.name}. You'll receive confirmation shortly.`,
    });

    setPatientForm({
      name: "", age: "", bloodType: "", phone: "", city: "", 
      urgency: "", hospital: "", condition: ""
    });
  };

  const emergencyRequest = () => {
    toast({
      title: "🚨 Emergency Alert Sent",
      description: "Notifying all compatible donors within 25km radius. Emergency services contacted.",
      variant: "destructive"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Find Blood Donors */}
          <Button 
            variant="care" 
            className="h-24 flex-col gap-2"
            onClick={findBloodDonors}
          >
            <Droplets className="h-6 w-6" />
            <span className="text-center">Find Blood Donors</span>
          </Button>

          {/* Register as Donor - Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="success" className="h-24 flex-col gap-2">
                <UserPlus className="h-6 w-6" />
                <span className="text-center">Register as Donor</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Register as Blood Donor</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={donorForm.name}
                      onChange={(e) => setDonorForm({...donorForm, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input 
                      id="age"
                      type="number"
                      value={donorForm.age}
                      onChange={(e) => setDonorForm({...donorForm, age: e.target.value})}
                      placeholder="25"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Blood Type *</Label>
                    <Select value={donorForm.bloodType} onValueChange={(value) => setDonorForm({...donorForm, bloodType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone"
                      value={donorForm.phone}
                      onChange={(e) => setDonorForm({...donorForm, phone: e.target.value})}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input 
                      id="weight"
                      type="number"
                      value={donorForm.weight}
                      onChange={(e) => setDonorForm({...donorForm, weight: e.target.value})}
                      placeholder="60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hemoglobin">Hemoglobin (g/dL)</Label>
                    <Input 
                      id="hemoglobin"
                      type="number"
                      step="0.1"
                      value={donorForm.hemoglobin}
                      onChange={(e) => setDonorForm({...donorForm, hemoglobin: e.target.value})}
                      placeholder="13.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="lastDonation">Last Donation Date</Label>
                  <Input 
                    id="lastDonation"
                    type="date"
                    value={donorForm.lastDonation}
                    onChange={(e) => setDonorForm({...donorForm, lastDonation: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city"
                    value={donorForm.city}
                    onChange={(e) => setDonorForm({...donorForm, city: e.target.value})}
                    placeholder="Mumbai"
                  />
                </div>

                <Button onClick={handleDonorRegistration} className="w-full" variant="care">
                  Register as Donor
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Schedule Transfusion - Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="urgent" className="h-24 flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span className="text-center">Schedule Transfusion</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule Blood Transfusion</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="patientName">Patient Name *</Label>
                    <Input 
                      id="patientName"
                      value={patientForm.name}
                      onChange={(e) => setPatientForm({...patientForm, name: e.target.value})}
                      placeholder="Patient name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="patientAge">Age</Label>
                    <Input 
                      id="patientAge"
                      type="number"
                      value={patientForm.age}
                      onChange={(e) => setPatientForm({...patientForm, age: e.target.value})}
                      placeholder="25"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Blood Type *</Label>
                    <Select value={patientForm.bloodType} onValueChange={(value) => setPatientForm({...patientForm, bloodType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Urgency *</Label>
                    <Select value={patientForm.urgency} onValueChange={(value) => setPatientForm({...patientForm, urgency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">Routine (1-2 weeks)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-3 days)</SelectItem>
                        <SelectItem value="emergency">Emergency (24 hours)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="hospital">Hospital/Clinic</Label>
                  <Input 
                    id="hospital"
                    value={patientForm.hospital}
                    onChange={(e) => setPatientForm({...patientForm, hospital: e.target.value})}
                    placeholder="Apollo Hospital"
                  />
                </div>

                <div>
                  <Label htmlFor="condition">Medical Condition</Label>
                  <Select value={patientForm.condition} onValueChange={(value) => setPatientForm({...patientForm, condition: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thalassemia-major">Thalassemia Major</SelectItem>
                      <SelectItem value="thalassemia-intermedia">Thalassemia Intermedia</SelectItem>
                      <SelectItem value="sickle-cell">Sickle Cell Disease</SelectItem>
                      <SelectItem value="other-anemia">Other Anemia</SelectItem>
                      <SelectItem value="surgery">Surgery Related</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={scheduleTransfusion} className="w-full" variant="urgent">
                  Schedule Transfusion
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Emergency Request */}
          <Button 
            variant="destructive" 
            className="h-24 flex-col gap-2"
            onClick={emergencyRequest}
          >
            <Zap className="h-6 w-6" />
            <span className="text-center">Emergency Request</span>
          </Button>

          {/* Get AI Support - Links to chat */}
          <Button 
            variant="gentle" 
            className="h-24 flex-col gap-2"
            onClick={() => {
              // Scroll to chat section or open chat
              document.querySelector('[data-section="chat"]')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Heart className="h-6 w-6" />
            <span className="text-center">Get AI Support</span>
          </Button>
        </div>

        {/* Status Indicators */}
        <div className="mt-6 flex gap-2 flex-wrap">
          <Badge variant="outline">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            2,547 Active Donors
          </Badge>
          <Badge variant="outline">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            485 Units Available
          </Badge>
          <Badge variant="outline">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            94.2% AI Accuracy
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionButtons;