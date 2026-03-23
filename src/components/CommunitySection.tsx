import { motion } from 'framer-motion';
import { Users, Palette, Sparkles, Star, Quote } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { COMMUNITY_CONSTANTS } from '@/lib/index';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Sam",
    role: "Sip & Paint Enthusiast",
    content: "I came for the wine, but stayed for the community. I've met three of my now-best friends at Comely Arts workshops.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "A. Kumar",
    role: "Aspiring Artist",
    content: "The Artsy Date night was so thoughtfully organized. It wasn't just a class; it was a curated experience we'll never forget.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

const stats = [
  {
    label: "Creative Members",
    value: COMMUNITY_CONSTANTS.MEMBER_COUNT,
    icon: Users,
    color: "text-primary"
  },
  {
    label: "Workshops Hosted",
    value: COMMUNITY_CONSTANTS.WORKSHOPS_COMPLETED,
    icon: Palette,
    color: "text-secondary-foreground"
  },
  {
    label: "Clients",
    value: COMMUNITY_CONSTANTS.CLIENTS_COUNT,
    icon: Sparkles,
    color: "text-accent-foreground"
  }
];

const springConfig = { type: "spring", stiffness: 300, damping: 30 };

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span>Join our vibrant circle</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Where Art Meets <span className="text-primary">Connection</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Comely Arts isn't just a workshop provider; it's a movement of {COMMUNITY_CONSTANTS.MEMBER_COUNT} creators. 
              From corporate teams to couples on a first date, we provide the space to connect through the language of color.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, ...springConfig }}
                  className="flex flex-col items-start space-y-2"
                >
                  <div className={`p-3 rounded-xl bg-background shadow-sm ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold font-mono">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Visuals Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={springConfig}
                className="space-y-4"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={IMAGES.WORKSHOP_GALLERY_1} 
                    alt="Community Workshop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={IMAGES.WORKSHOP_GALLERY_8} 
                    alt="Art Interaction" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, ...springConfig }}
                className="pt-12"
              >
                <div className="aspect-[3/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={IMAGES.WORKSHOP_GALLERY_9} 
                    alt="Finished Masterpiece" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Member Count Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ...springConfig }}
              className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-2xl border border-border flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-background w-10 h-10">
                    <AvatarImage src={`https://i.pravatar.cc/100?u=member${i}`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background">
                  +99
                </div>
              </div>
              <div>
                <p className="text-sm font-bold">Active Now</p>
                <p className="text-xs text-muted-foreground">Join the conversation</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Voices from our Community</h3>
            <p className="text-muted-foreground">Real experiences from our growing community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, ...springConfig }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <Quote className="w-10 h-10 text-primary/20" />
                      <p className="text-lg italic text-foreground/90">
                        "{t.content}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={t.avatar} alt={t.name} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
