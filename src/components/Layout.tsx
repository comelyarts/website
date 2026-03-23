import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { SiInstagram, SiFacebook, SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS, scrollToId, COMMUNITY_CONSTANTS } from '@/lib/index';

const whatsappUrl = COMMUNITY_CONSTANTS.WHATSAPP_LINK;
import { SubscriptionForm } from '@/components/SubscriptionForm';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && location.pathname === ROUTE_PATHS.HOME) {
      e.preventDefault();
      scrollToId(href.substring(1));
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/comely-arts-logo.png"
              alt="Comely Arts"
              className="h-10 w-10 object-contain rounded-xl group-hover:rotate-6 transition-transform"
            />
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Comely <span className="text-primary">Arts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors"
            >
              <SiWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-primary text-white py-6 text-lg mt-4 flex items-center justify-center gap-2 font-medium"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="/comely-arts-logo.png"
                  alt="Comely Arts"
                  className="h-8 w-8 object-contain rounded-lg"
                />
                <span className="text-xl font-bold">Comely Arts</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Creating spaces for artistic expression, connection, and community through curated workshop experiences since {COMMUNITY_CONSTANTS.FOUNDED_YEAR}.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/comely.arts?igsh=MTYwanpiYjNxdGE0NQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-background border border-border rounded-full text-foreground/60 hover:text-primary hover:border-primary transition-all"
                >
                  <SiInstagram size={20} />
                </a>
                <a href="#" className="p-2 bg-background border border-border rounded-full text-foreground/60 hover:text-primary hover:border-primary transition-all">
                  <SiFacebook size={20} />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full text-foreground/60 hover:text-primary hover:border-primary transition-all" aria-label="WhatsApp">
                  <SiWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Experience</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary transition-colors">Our Workshops</a></li>
                <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-primary transition-colors">Event Gallery</a></li>
                <li><a href="#community" onClick={(e) => handleNavClick(e, '#community')} className="hover:text-primary transition-colors">Community Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Art Supplies</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Connect</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span>{COMMUNITY_CONSTANTS.CONTACT_EMAIL}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-primary" />
                  <span>Chat Support (24/7)</span>
                </li>
                <li>
                  <p className="text-sm italic">Join our {COMMUNITY_CONSTANTS.MEMBER_COUNT} members today.</p>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div id="contact">
              <h4 className="font-bold text-lg mb-6">Stay Creative</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get updates on upcoming workshops, early-bird tickets, and art tips.
              </p>
              <SubscriptionForm />
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {COMMUNITY_CONSTANTS.CURRENT_YEAR} Comely Arts. All rights reserved. Crafting creativity daily.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
