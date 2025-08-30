import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Key, CheckCircle } from 'lucide-react';

interface BetaKeyModalProps {
  open: boolean;
  onClose: () => void;
}

export const BetaKeyModal = ({ open, onClose }: BetaKeyModalProps) => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setEmail('');
        onClose();
      }, 3000);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setShowConfirmation(false);
      setEmail('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            Get Your Beta Key
          </DialogTitle>
          <DialogDescription>
            Get exclusive early access to the HAPI Stack beta
          </DialogDescription>
        </DialogHeader>
        
        {showConfirmation ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Check Your Email!</h3>
            <p className="text-muted-foreground">
              We've sent a confirmation email to <strong>{email}</strong>. 
              Please confirm your email address to receive your beta key.
            </p>
            <p className="text-sm text-muted-foreground">
              Don't forget to check your spam folder if you don't see it in your inbox.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Enter your email address to receive your exclusive HAPI beta key. You'll need to confirm your email before we can send you the key.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  What happens next?
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Confirmation email sent to your address</li>
                  <li>• Verify your email by clicking the link</li>
                  <li>• Receive your beta key instantly</li>
                  <li>• Start building with HAPI Stack</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  type="submit" 
                  variant="cta" 
                  className="flex-1"
                  disabled={!email}
                >
                  Send Beta Key
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};