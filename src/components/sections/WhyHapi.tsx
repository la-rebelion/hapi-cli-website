import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users, Zap, Target, Workflow } from "lucide-react";

export const WhyHapi = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Prototyping",
      description: "Cut development time from days to minutes with instant API tooling",
      metric: "90% faster setup",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      description: "Reduce tool sprawl and licensing costs with one unified solution",
      metric: "60% cost reduction",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Team Empowerment",
      description: "Enable non-technical teams to work with APIs independently",
      metric: "Zero dependencies",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "AI-First Ready",
      description: "Built for the AI era with instant MCP server generation",
      metric: "One command",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Shorter Cycles",
      description: "Accelerate development cycles with rapid API integration",
      metric: "3x faster delivery",
      color: "text-primary"
    },
    {
      icon: Workflow,
      title: "Less Tool Sprawl",
      description: "Replace multiple API tools with one comprehensive solution",
      metric: "Single CLI",
      color: "text-secondary"
    }
  ];

  const audiences = [
    {
      title: "For Development Teams",
      benefits: [
        "Instant API testing without complex setup",
        "Automated MCP server generation",
        "Seamless CI/CD integration", 
        "Universal API compatibility"
      ],
      icon: "💻"
    },
    {
      title: "For Business Teams",
      benefits: [
        "No engineering dependencies for API testing",
        "Plain English API interaction",
        "Rapid prototype validation",
        "AI workflow enablement"
      ],
      icon: "🎯"
    },
    {
      title: "For Organizations",
      benefits: [
        "Reduced tool licensing costs",
        "Faster time-to-market",
        "Improved team collaboration",
        "Future-proof AI integration"
      ],
      icon: "🏢"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose HAPI CLI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your API workflow and empower your entire organization
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {benefit.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Audience-Specific Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{audience.icon}</span>
                  <CardTitle className="text-lg">{audience.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              {/* Background gradient */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-primary opacity-5 rounded-full blur-xl"></div>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Real Impact</h3>
            <p className="text-muted-foreground">See what teams achieve with HAPI CLI</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Faster Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">60%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3x</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Team Independence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};