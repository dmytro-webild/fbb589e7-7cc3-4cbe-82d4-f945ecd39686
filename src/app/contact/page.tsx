"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Shop", id: "shop" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const footerColumns = [
    {
      title: "Shop",
      items: [
        { label: "All Products", href: "/shop" },
        { label: "Trending Now", href: "/shop" },
        { label: "New Arrivals", href: "/shop" },
        { label: "Sale Items", href: "/shop" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Shipping Info", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "TikTok", href: "https://tiktok.com" },
        { label: "YouTube", href: "https://youtube.com" },
        { label: "Twitter", href: "https://twitter.com" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="none"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="NexCart"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Shop", id: "shop" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{ text: "Cart", href: "#" }}
        />
      </div>

      <div id="contact-hero" data-section="contact-hero">
        <div className="mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? We're here to help! Reach out to our customer support team and we'll get back to you as quickly as possible.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="bg-card rounded-lg p-6 border border-accent/20">
                <Phone className="w-8 h-8 text-background-accent mb-3 mx-auto" />
                <p className="text-foreground font-semibold">Phone</p>
                <p className="text-secondary-cta-text">1-800-NEXCART</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-accent/20">
                <Mail className="w-8 h-8 text-background-accent mb-3 mx-auto" />
                <p className="text-foreground font-semibold">Email</p>
                <p className="text-secondary-cta-text">support@nexcart.com</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-accent/20">
                <MessageCircle className="w-8 h-8 text-background-accent mb-3 mx-auto" />
                <p className="text-foreground font-semibold">Chat</p>
                <p className="text-secondary-cta-text">Live support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="newsletter" data-section="newsletter">
        <ContactFaq
          ctaTitle="Join Our Newsletter"
          ctaDescription="Get exclusive deals, early access to new products, and insider tips delivered to your inbox."
          ctaButton={{ text: "Subscribe & Get 15% Off", href: "#" }}
          ctaIcon={Mail}
          useInvertedBackground={true}
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "How often do you send emails?",
              content: "We send emails 1-2 times per week with exclusive deals and product launches. You can unsubscribe anytime.",
            },
            {
              id: "2",
              title: "Is my email secure?",
              content: "Absolutely! We use industry-standard encryption and never share your data with third parties.",
            },
            {
              id: "3",
              title: "When do I get my 15% discount?",
              content: "Your discount code will arrive in your first email within 5 minutes of subscribing.",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2024 NexCart. All rights reserved."
          bottomRightText="Smart Shopping Starts Here"
        />
      </div>
    </ThemeProvider>
  );
}