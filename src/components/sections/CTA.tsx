import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Play, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export const CTA = () => {
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
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to make your APIs{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                truly usable?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              One command is all it takes to transform any API into a powerful, AI-ready tool.
            </p>
          </div>

          {/* Install Command */}
          <Card className="mb-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-glow">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Quick Install</h3>

                {/* Command line */}
                <div className="bg-background/50 border border-border rounded-lg p-6 font-mono text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Terminal</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy('linux')}
                      className="h-8 w-8 p-0"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="text-primary">
                    <span className="text-muted-foreground">$ </span>
                    curl -fsSL https://get.mcp.com.ai/hapi.sh | bash
                  </div>
                </div>
                <h3 className="mb-4">Windows Quick Install</h3>

                {/* Command line */}
                <div className="bg-background/50 border border-border rounded-lg p-6 font-mono text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Terminal</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy('windows')}
                      className="h-8 w-8 p-0"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="text-primary">
                    <span className="text-muted-foreground">$ </span>
                    irm https://get.mcp.com.ai/hapi.ps1 | iex
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" className="min-w-[200px]" onClick={() => window.location.href = 'https://github.com/la-rebelion/hapimcp/releases'}>
                    <Download className="w-5 h-5" />
                    Download HAPI CLI Free
                  </Button>
                  <Button variant="outline" size="xl" className="min-w-[200px]" onClick={() => window.location.href = 'https://youtu.be/kl5c67hvNW0?si=36kJriAtLcBseZtO'}>
                    <Play className="w-5 h-5" />
                    Watch Demo Video
                  </Button>
                </div>

                {/* Alternative download */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Or download the latest release from our
                  </p>
                  <Button variant="ghost" className="inline-flex items-center gap-2" onClick={() => window.location.href = 'https://github.com/la-rebelion/hapimcp/releases'}>
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Value proposition */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold">Free to Use</h4>
              <p className="text-sm text-muted-foreground">Free, fast, and transparent</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold">AI-First</h4>
              <p className="text-sm text-muted-foreground">Built for your AI-First future</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold">Universal</h4>
              <p className="text-sm text-muted-foreground">Works with any API specification</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🧩</span>
              </div>
              <h4 className="font-semibold">No Streams of Code</h4>
              <p className="text-sm text-muted-foreground">Zero coding required</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🧑🏽‍💻</span>
              </div>
              <h4 className="font-semibold">Developer Friendly</h4>
              <p className="text-sm text-muted-foreground">Built with developers in mind</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🧑🏽‍💼</span>
              </div>
              <h4 className="font-semibold">Ideal for non-technical users</h4>
              <p className="text-sm text-muted-foreground">Built with simplicity in mind</p>
            </div>
          </div>

          {/* Final tagline */}
          <p className="text-lg text-muted-foreground">
            Join thousands of developers and teams who've simplified their API workflows with HAPI CLI
          </p>
        </div>
      </div>
    </section>
  );
};