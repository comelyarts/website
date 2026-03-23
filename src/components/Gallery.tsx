import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, PlayCircle, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { 
  WorkshopCategory, 
  WORKSHOP_TYPES 
} from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { EventInquiryDialog } from '@/components/EventInquiryDialog';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  category: WorkshopCategory;
  title: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: IMAGES.WORKSHOP_GALLERY_2,
    category: 'Sip & Paint',
    title: 'Summer Twilight Session',
    description: 'A vibrant evening where community members explored abstract expressionism with local wines.'
  },
  {
    id: '2',
    type: 'image',
    src: '/private-paint-real-1.png',
    category: 'Private Paint Events',
    title: 'Birthday Canvas Party',
    description: 'An intimate gathering celebrating a 30th birthday with customized botanical sketches.'
  },
  {
    id: '3',
    type: 'image',
    src: IMAGES.STUDIO_SPACE_1,
    category: 'Artsy Date',
    title: 'Store Coffe House',
    description: 'Couples creating shared memories in our candlelit studio space during the Artsy Date night.'
  },
  {
    id: '4',
    type: 'image',
    src: '/private-paint-real-2.png',
    category: 'Private Paint Events',
    title: 'Private Session',
    description: 'An intimate painting session tailored for a special celebration.'
  },
  {
    id: '5',
    type: 'image',
    src: IMAGES.STUDIO_SPACE_4,
    category: 'Customized Paintings',
    title: 'The Artisanal Loft',
    description: 'A look inside our creation process for commissioned residential artworks.'
  },
  {
    id: '6',
    type: 'image',
    src: IMAGES.WORKSHOP_GALLERY_4,
    category: 'Sip & Paint',
    title: 'Floral Masterclass',
    description: 'Learning the delicate art of watercolor florals in a relaxed weekend workshop.'
  },
  {
    id: '7',
    type: 'image',
    src: '/sip-paint-real-1.png',
    category: 'Sip & Paint',
    title: 'Sip & Paint Community Session',
    description: 'A real Comely Arts Sip & Paint session with participants proudly showcasing their finished canvases.'
  },
  {
    id: '8',
    type: 'image',
    src: '/sip-paint-real-2.png',
    category: 'Sip & Paint',
    title: 'Guided Studio Experience',
    description: 'Hands-on guided painting experience during a Sip & Paint workshop at the studio.'
  },
  {
    id: '9',
    type: 'image',
    src: '/private-party-1.png',
    category: 'Private Paint Events',
    title: 'Private Party Highlight',
    description: 'Guests enjoying a private paint party and showcasing their artwork.'
  },
  {
    id: '10',
    type: 'image',
    src: '/private-party-2.png',
    category: 'Private Paint Events',
    title: 'Tote & Craft Inspiration',
    description: 'Creative private party ideas with customized tote and accessory painting.'
  },
  {
    id: '11',
    type: 'image',
    src: '/private-party-3.png',
    category: 'Private Paint Events',
    title: 'Canvas Theme Session',
    description: 'A themed private paint event featuring colorful canvas designs.'
  },
  {
    id: '12',
    type: 'image',
    src: '/private-party-4.png',
    category: 'Private Paint Events',
    title: 'Friends Night Art Party',
    description: 'A fun private gathering where friends paint together and celebrate creativity.'
  },
  {
    id: '13',
    type: 'image',
    src: '/private-party-5.png',
    category: 'Private Paint Events',
    title: 'Group Canvas Celebration',
    description: 'A private group session with participants proudly presenting their finished paintings.'
  },
  {
    id: '14',
    type: 'image',
    src: '/private-party-6.png',
    category: 'Private Paint Events',
    title: 'Kids Private Paint Party',
    description: 'A joyful private painting event designed for kids and young creators.'
  },
  {
    id: '15',
    type: 'image',
    src: '/customized-painting-1.png',
    category: 'Customized Paintings',
    title: 'Portrait Commission',
    description: 'A detailed customized portrait artwork created on request.'
  },
  {
    id: '16',
    type: 'image',
    src: '/customized-painting-2.png',
    category: 'Customized Paintings',
    title: 'Hand-Painted Bag Design',
    description: 'A customized hand-painted floral design on a lifestyle accessory.'
  },
  {
    id: '17',
    type: 'image',
    src: '/customized-painting-3.png',
    category: 'Customized Paintings',
    title: 'Nature-Inspired Artwork',
    description: 'A custom painting inspired by natural scenery and travel moments.'
  }
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<WorkshopCategory | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryEventType, setInquiryEventType] = useState('');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleBookSimilarEvent = () => {
    if (!selectedItem) return;
    setInquiryEventType(selectedItem.category);
    setSelectedItem(null);
    setInquiryOpen(true);
  };

  const categories = ['All', ...WORKSHOP_TYPES.map(t => t.name)];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground">
            Moments of <span className="text-primary italic">Creation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our past workshops through the lenses of our community. From private sessions to intimate date nights.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? 'default' : 'outline'}
              onClick={() => setActiveFilter(cat as WorkshopCategory | 'All')}
              className={`rounded-full transition-all duration-300 ${ 
                activeFilter === cat 
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                : 'hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-auto">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/70 text-sm font-medium mb-1">{item.category}</p>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center text-primary text-sm font-semibold">
                        View Detail <Maximize2 className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                      <PlayCircle className="text-white w-6 h-6" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-border p-0 overflow-hidden">
            {selectedItem && (
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                <div className="lg:col-span-3 bg-muted relative flex items-center justify-center min-h-[300px]">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <Badge className="bg-primary/10 text-primary border-none mb-4">
                        {selectedItem.category}
                      </Badge>
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-sans font-bold">
                          {selectedItem.title}
                        </DialogTitle>
                      </DialogHeader>
                    </div>
                    
                    <DialogDescription className="text-muted-foreground text-lg leading-relaxed">
                      {selectedItem.description}
                    </DialogDescription>

                    <div className="pt-6 border-t border-border">
                      <h4 className="font-semibold mb-3">Event Highlights</h4>
                      <ul className="space-y-2">
                        {['Expert Artist Guidance', 'Premium Supplies', 'Community Connection'].map((feat, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary mr-2" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={handleBookSimilarEvent}
                    >
                      Book Similar Event
                    </Button>
                    <DialogClose asChild>
                      <Button variant="outline" className="px-3">
                        <X className="w-4 h-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <EventInquiryDialog
          open={inquiryOpen}
          onOpenChange={setInquiryOpen}
          eventType={inquiryEventType}
        />
      </div>
    </section>
  );
}
