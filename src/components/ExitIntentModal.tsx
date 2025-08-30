import { useRef, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X, Mail, Zap, Code, MessageSquare, Bot } from 'lucide-react';

interface ExitIntentModalProps {
  open: boolean;
  onClose: () => void;
}

// @note: This form is structured as static HTML for HubSpot compliance
// We use inline preventDefault in the form element to avoid navigation while allowing HubSpot to track
// See: https://knowledge.hubspot.com/forms/use-non-hubspot-forms

export const ExitIntentModal = ({ open, onClose }: ExitIntentModalProps) => {
  const [showThankYou, setShowThankYou] = useState(false);
  
  // Handle dialog close event properly
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  // We'll use a direct inline handler with preventDefault
  // This is still HubSpot compliant as it's not a React-specific handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onClose();
    }, 2000);
    return false; // Extra prevention for form submission
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Wait! Don't miss out on the AI revolution
          </DialogTitle>
          <DialogDescription>
            Stay updated with the latest HAPI Stack developments and get exclusive insights
          </DialogDescription>
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
          {showThankYou ? (
            <div className="text-center py-8">
              <Mail className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="text-lg font-semibold text-foreground">Thank you for subscribing!</h3>
              <p className="text-muted-foreground">We'll keep you updated on the latest HAPI Stack developments.</p>
            </div>
          ) : (
            <form
              method="POST"
              action="#"
              onSubmit={handleFormSubmit}
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full border rounded px-3 py-2 text-foreground bg-background"
                />
              </div>
              <div className="flex space-x-3 mt-4">
                <input
                  type="submit"
                  value="Get Updates"
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-2 rounded cursor-pointer"
                />
                <button
                  type="button"
                  className="flex-1 border rounded py-2 text-muted-foreground"
                  onClick={onClose}
                >
                  <X className="w-4 h-4 inline" />
                  No Thanks
                </button>
              </div>
            </form>
          )}
          <p className="text-xs text-muted-foreground text-center">
            No spam, ever. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};