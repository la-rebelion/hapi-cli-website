import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, User, Copy, ExternalLink, PlayCircle } from "lucide-react";

export const Examples = () => {
  const [activeTab, setActiveTab] = useState("developers");

  const developerExamples = [
    {
      title: "MCP Testing Made Simple",
      description: "Instantly test API endpoints as MCP tools without boilerplate code",
      command: "hapi run petstore --headless",
      output: [
        "🚀 HAPI CLI v2.1.0",
        "📄 Loading petstore...",
        "✅ Found 8 endpoints",
        "🔧 Generating test suite...",
        "✨ Ready! HAPI MCP server running on :3000",
        "",
        "Available endpoints:",
        "  GET  /pet/findByStatus",
        "  POST /pet",
        "  GET  /pet/:id"
      ],
      benefits: ["Zero setup time", "Automatic endpoint discovery", "Interactive testing tools UI", "Ideal for brownfield projects integrating with MCP"]
    },
    {
      title: "AI Integration",
      description: "Instantly create APIs as an MCP server, usable by AI agents",
      command: "hapi run my-microservices --mcp",
      output: [
        "🚀 HAPI CLI v2.1.0",
        "📄 Loading my-microservices...",
        "🤖 Creating MCP server...",
        "🔗 Exposing 12 tools to AI agents",
        "✨ MCP server running on :3000",
        "",
        "Available MCP tools:",
        "  - get_user_profile",
        "  - create_user", 
        "  - update_user_settings",
        "",
        "Available endpoints:",
        "  GET  /pet/findByStatus",
        "  POST /pet",
        "  GET  /pet/:id"
      ],
      benefits: ["AI-ready instantly", "MCP Clients compatible", "Zero configuration", "Ideal for greenfield projects from the ground up"]
    }
  ];

  const businessExamples = [
    {
      title: "PM Testing APIs Without Engineers",
      description: "Product managers can test API functionality independently",
      scenario: "Upload API file → Get instant testing interface → Test with real data",
      interface: "Clean web UI with form inputs and JSON responses",
      benefits: ["No engineering dependency", "Real-time validation", "Business-friendly interface"]
    },
    {
      title: "Founder Using AI with No-Code",
      description: "Startup founders can integrate APIs with AI tools effortlessly",
      scenario: "Drag & drop API spec → Auto-generate AI tools → Use in ChatGPT/Claude",
      interface: "Visual workflow builder with AI agent integration",
      benefits: ["No technical knowledge required", "AI-first workflows", "Rapid prototyping"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See HAPI CLI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real examples for developers and business teams
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              For Developers
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              For Business Teams
            </TabsTrigger>
          </TabsList>

          <TabsContent value="developers" className="space-y-8">
            {developerExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {example.title}
                    <Button variant="outline" size="sm">
                      <PlayCircle className="w-4 h-4" />
                      Try Example
                    </Button>
                  </CardTitle>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Terminal */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Command</h4>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="bg-background border border-border rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-muted border-b border-border">
                          <span className="text-sm font-mono text-muted-foreground">Terminal</span>
                        </div>
                        <div className="p-4 font-mono text-sm space-y-1">
                          <div className="text-primary">$ {example.command}</div>
                          <div className="space-y-1 text-muted-foreground">
                            {example.output.map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Benefits</h4>
                      <div className="space-y-3">
                        {example.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = 'https://docs.mcp.com.ai/components/hapi-server/hapi-cli'}>
                        <ExternalLink className="w-4 h-4" />
                        View Full Documentation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="business" className="space-y-8">
            {businessExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {example.title}
                    <Button variant="outline" size="sm">
                      <PlayCircle className="w-4 h-4" />
                      See Demo
                    </Button>
                  </CardTitle>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Workflow */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Workflow</h4>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <div className="space-y-4">
                          {example.scenario.split(' → ').map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-medium">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Interface:</strong> {example.interface}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Business Impact</h4>
                      <div className="space-y-3">
                        {example.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="secondary" className="w-full mt-4" onClick={() => window.location.href = 'https://run.mcp.com.ai'}>
                        <ExternalLink className="w-4 h-4" />
                        Try runMCP Interface
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg font-medium mb-2">
                    "I replaced 200+ tools with one CLI command. Magic."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">
                    Senior Developer at TechCorp
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <blockquote className="text-lg font-medium mb-2">
                    "I can finally test APIs without waiting for engineering."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">
                    CEO at StartupXYZ
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};