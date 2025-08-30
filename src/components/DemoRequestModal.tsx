import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const DemoRequestModal = ({ open, onClose }: DemoRequestModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    phone: "",
    company: "",
    painPoints: "",
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in email and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Demo request submitted!",
        description: "We'll be in touch soon to schedule your demo.",
      });
      setIsSubmitting(false);
      onClose();
      setFormData({
        fullName: "",
        email: "",
        role: "",
        phone: "",
        company: "",
        painPoints: "",
        newsletter: false
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Tell us about your needs and we'll schedule a personalized demo
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@company.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              placeholder="e.g., Developer, CTO, Product Manager"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="painPoints">Main pain points with MCP</Label>
            <Textarea
              id="painPoints"
              value={formData.painPoints}
              onChange={(e) => handleInputChange("painPoints", e.target.value)}
              placeholder="Tell us about your current challenges with MCP..."
              className="min-h-[80px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to newsletter for updates on HAPI Stack
            </Label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="premium"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};