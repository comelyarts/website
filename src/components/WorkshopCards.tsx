import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { PAINTING_CATEGORIES, WORKSHOP_TYPES, WorkshopCategory } from "@/lib/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { EventInquiryDialog } from "@/components/EventInquiryDialog";

/**
 * Mapping images to workshop categories based on user requirements
 */
const IMAGE_MAPPING: Record<WorkshopCategory, string> = {
  'Private Paint Events': '/private-paint-real-1.png',
  'Sip & Paint': IMAGES.SIP_PAINT_2,
  'Customized Paintings': IMAGES.ART_SUPPLIES_1,
  'Artsy Date': IMAGES.ARTSY_DATE_3,
};

/**
 * Animation variants for the card reveal
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

/**
 * WorkshopCards component displaying the core Comely Arts services
 */
export function WorkshopCards() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryEventType, setInquiryEventType] = useState('');

  const openInquiry = (eventType: string) => {
    setInquiryEventType(eventType);
    setInquiryOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Artistic background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Art Experiences for <span className="text-primary">Every Connection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From private celebrations to romantic dates, our guided workshops provide the perfect canvas for your next shared memory.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {PAINTING_CATEGORIES.map((category) => (
              <span
                key={category}
                className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground border border-border"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WORKSHOP_TYPES.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="group h-full border-border/50 bg-card hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                {/* Card Image with Overlay Effect */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={IMAGE_MAPPING[service.name]}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardHeader className="pt-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                </CardHeader>

                <CardContent className="flex-grow pb-8">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                          <Check className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-8">
                  <Button 
                    variant="outline"
                    className="w-full h-12 rounded-xl border-primary/20 hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    onClick={() => openInquiry(service.name)}
                  >
                    <span className="font-semibold">{service.cta}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom request call-to-action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl bg-accent/30 border border-accent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-accent-foreground mb-2">Have a Unique Vision?</h4>
            <p className="text-muted-foreground">We specialize in tailoring workshops for any group size or theme. Let's create something together.</p>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 rounded-2xl shadow-lg"
            onClick={() => openInquiry('Custom request')}
          >
            Get a Custom Quote
          </Button>
        </motion.div>
      </div>

      <EventInquiryDialog
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        eventType={inquiryEventType}
      />
    </section>
  );
}
