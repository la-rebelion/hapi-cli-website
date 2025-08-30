import { Button } from "@/components/ui/button";
import { Terminal, Download, Play, Copy, Check } from "lucide-react";
import { TerminalDemo } from "./TerminalDemo";
import { useState } from "react";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (platform: 'linux' | 'windows') => () => {
    const command = platform === 'linux'
      ? "curl -fsSL https://get.mcp.com.ai/hapi.sh | bash"
      : "irm https://get.mcp.com.ai/hapi.ps1 | iex";
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground text-sm font-medium">
            <Terminal className="w-4 h-4" />
            Part of the HAPI Stack
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn APIs into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              MCP tools
            </span>{" "}
            in seconds
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HAPI CLI simplifies APIs so anyone can use them — from developers to business teams. 
            <span className="text-foreground font-medium"> One command to turn your API into an AI-ready tool.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="cta" size="xl" className="min-w-[200px]" onClick={() => window.location.href = 'https://github.com/la-rebelion/hapimcp/releases'}>
              <Download className="w-5 h-5" />
              Download HAPI CLI
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]" onClick={() => window.location.href = 'https://youtu.be/kl5c67hvNW0?si=36kJriAtLcBseZtO'}>
              <Play className="w-5 h-5" />
              See it in Action
            </Button>
          </div>

          {/* Quick Install */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-3">Quick install:</p>
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
              <code className="font-mono text-primary">curl -fsSL https://get.mcp.com.ai/hapi.sh | bash</code>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0"
                      onClick={handleCopy('linux')}>
                      {copied ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-3 pt-4">Windows install:</p>
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
              <code className="font-mono text-primary">irm https://get.mcp.com.ai/hapi.ps1 | iex</code>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0"
                      onClick={handleCopy('windows')}>
                      {copied ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
              </Button>
            </div>
          </div>
        </div>

        {/* Terminal Demo Section */}
        <div className="mt-20">
          <TerminalDemo />
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};