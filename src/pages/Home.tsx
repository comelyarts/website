import { motion } from "framer-motion";
import { ChevronDown, Paintbrush, Users, Sparkles, MessageSquare } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { WorkshopCards } from "@/components/WorkshopCards";
import { Gallery } from "@/components/Gallery";
import { CommunitySection } from "@/components/CommunitySection";
import { WhatsAppGroupCta } from "@/components/WhatsAppGroupCta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.STUDIO_SPACE_2}
            alt="Comely Arts Studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <Paintbrush className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Where Creativity Finds a Home</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-6 leading-[1.1]">
              Crafting Memories Through <span className="text-primary italic">Artistic Expression</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join a vibrant community of 500+ creators. From corporate retreats to intimate artsy dates, 
              we host workshops that transform canvases and connections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
              >
                Explore Workshops
              </a>
              <a
                href="#community"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-accent transition-all border border-border"
              >
                Join the Community
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                Curated Artistic Experiences
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're looking to bond with your team, celebrate a milestone, or find a unique date idea, 
                our workshops are designed for all skill levels.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="flex items-center gap-2 text-sm font-mono text-primary bg-primary/5 px-3 py-1 rounded-md border border-primary/10">
                <Sparkles className="w-4 h-4" />
                PROFESSIONAL KITS
              </div>
              <div className="flex items-center gap-2 text-sm font-mono text-secondary-foreground bg-secondary px-3 py-1 rounded-md border border-border">
                <Users className="w-4 h-4" />
                EXPERT GUIDANCE
              </div>
            </div>
          </div>
          <WorkshopCards />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              A Glimpse into Our Studio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through the masterpieces created in our previous workshops. 
              Every brushstroke tells a story of discovery and joy.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24">
        <div className="container mx-auto px-4">
          <CommunitySection />
        </div>
      </section>

      {/* Contact & Subscription Section */}
      <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
                  Stay in the Creative Loop
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our WhatsApp channel for early access to workshops, art tips, and special community
                  moments. Be part of the 500+ and counting.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-border">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Connect & Chat</h4>
                      <p className="text-sm text-muted-foreground">Chat with fellow creators and get updates right in WhatsApp.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-border">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Exclusive Invites</h4>
                      <p className="text-sm text-muted-foreground">Hear about Sip &amp; Paint and private events before they fill up.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl shadow-foreground/5 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-center">Join Our WhatsApp Channel</h3>
                <WhatsAppGroupCta />
                <p className="text-xs text-center text-muted-foreground mt-6">
                  WhatsApp is provided by Meta. You can leave the group anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 w-full" />
    </div>
  );
}
