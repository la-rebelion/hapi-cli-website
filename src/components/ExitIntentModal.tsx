import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail, Zap, Code, MessageSquare, Bot } from 'lucide-react';

interface ExitIntentModalProps {
  open: boolean;
  onClose: () => void;
}

export const ExitIntentModal = ({ open, onClose }: ExitIntentModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend/newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md text-center">
          <div className="flex flex-col items-center space-y-4 py-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">You're all set!</h3>
              <p className="text-muted-foreground">We'll keep you updated on the latest HAPI Stack developments.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Wait! Don't miss out on the AI revolution
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Stay updated with the latest developments in the HAPI Stack for MCP. Get early access to new features, releases, and exclusive insights.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <Code className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm text-foreground">HAPI CLI</p>
                <p className="text-xs text-muted-foreground">API to AI tools</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm text-foreground">runMCP</p>
                <p className="text-xs text-muted-foreground">Execute & test</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm text-foreground">chatMCP</p>
                <p className="text-xs text-muted-foreground">AI conversations</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <Bot className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm text-foreground">HAPI Agents</p>
                <p className="text-xs text-muted-foreground">Orchestration</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="flex space-x-3">
              <Button type="submit" className="flex-1" variant="cta">
                <Mail className="w-4 h-4" />
                Get Updates
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                <X className="w-4 h-4" />
                No Thanks
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            No spam, ever. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};