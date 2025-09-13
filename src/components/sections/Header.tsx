import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { DemoRequestModal } from "@/components/DemoRequestModal";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const navigation = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Examples", href: "#examples" },
    { name: "Why HAPI", href: "#why-hapi" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "https://docs.mcp.com.ai", external: true }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <div className="font-bold text-lg">
              HAPI CLI
            </div>
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-primary/10 text-xs text-primary font-medium">
              <a href="https://github.com/la-rebelion/hapimcp/releases" target="_blank" rel="noopener noreferrer">
                <span>Releases</span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://github.com/la-rebelion/hapimcp/releases', '_blank')}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="premium" size="sm">
              Download CLI
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => {
                    setIsDemoModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Request a Demo
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => window.open('https://github.com/la-rebelion/hapimcp/releases', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="premium" size="sm">
                  Download CLI
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <DemoRequestModal 
        open={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </header>
  );
};