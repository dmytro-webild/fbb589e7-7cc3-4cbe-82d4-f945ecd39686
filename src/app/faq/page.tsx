"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Shop", id: "shop" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
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
          navItems={navItems}
          button={{ text: "Cart", href: "#" }}
        />
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
            {
              id: "4",
              title: "Can I change my email preferences?",
              content: "Yes! You can manage your preferences or unsubscribe at any time through the link in our emails.",
            },
            {
              id: "5",
              title: "What if I don't receive the discount code?",
              content: "Check your spam folder first. If you still don't see it, contact our support team and we'll send it immediately.",
            },
            {
              id: "6",
              title: "Do you share my information?",
              content: "Never. Your information is protected by our privacy policy and never shared with third parties without consent.",
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