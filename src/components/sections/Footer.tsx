import { Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  const links = {
    product: [
      { name: "HAPI CLI", href: "https://hapi.mcp.com.ai" },
      { name: "runMCP", href: "https://run.mcp.com.ai" },
      { name: "chatMCP", href: "https://chat.mcp.com.ai" },
      { name: "HAPI Agents", href: "https://docs.mcp.com.ai/components/agents/" }
    ],
    resources: [
      { name: "Documentation", href: "https://docs.mcp.com.ai" },
      { name: "GitHub", href: "https://github.com/la-rebelion/hapimcp" },
      { name: "Examples", href: "#examples" },
      { name: "API Reference", href: "https://docs.mcp.com.ai/api" }
    ],
    community: [
      { name: "Discord", href: "https://discord.com" },
      { name: "Twitter", href: "https://x.com/LaRebelionLabs" },
      { name: "YouTube", href: "https://youtube.com/@LaRebelion" },
      { name: "Blog", href: "https://rebelion.la" },
      { name: "Changelog", href: "#" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <div className="font-bold text-lg">HAPI CLI</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform any REST API into a secure MCP server with just a few taps. 
              Perfect for complex system integrations, exposing APIs to LLMs.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/orgs/la-rebelion/repositories?q=mcp&sort=updated&direction=desc" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">HAPI Stack</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 HAPI CLI. Built for the AI-first future by <a href="https://rebelion.la" className="hover:text-foreground transition-colors">La Rebelion Labs</a>.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};