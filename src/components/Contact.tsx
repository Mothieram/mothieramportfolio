import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:mothieram9041@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/mothieram" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mothieram" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Drop me a message and let's create something amazing together.
        </p>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-primary/20 hover-glow-primary transition-all">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="w-full min-h-[48px] text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full min-h-[48px] text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="w-full min-h-[48px] text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full resize-none min-h-[120px] text-base"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-accent text-white hover-glow-secondary transition-all min-h-[52px] text-base active:scale-[0.98]"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Or connect with me on
                </p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 sm:p-3 min-w-[52px] min-h-[52px] flex items-center justify-center rounded-full glass border-primary/30 hover:border-secondary hover-glow-secondary transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        aria-label={social.label}
                      >
                        <Icon size={22} className="text-foreground hover:text-secondary" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
