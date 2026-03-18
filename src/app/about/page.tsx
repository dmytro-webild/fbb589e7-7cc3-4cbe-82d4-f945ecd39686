"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';
import { Zap, Shield, Star, RotateCcw, Award, TrendingUp, Users, Clock } from 'lucide-react';

export default function AboutPage() {
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

      <div id="about-hero" data-section="about-hero">
        <div className="mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About NexCart
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're revolutionizing online shopping by bringing the hottest, trendiest products to Gen Z at unbeatable prices. With a focus on quality, speed, and customer satisfaction, NexCart is where smart shopping begins.
            </p>
          </div>
        </div>
      </div>

      <div id="why-choose" data-section="why-choose">
        <FeatureBorderGlow
          title="Our Core Values"
          description="What drives us to deliver excellence every single day."
          tag="Our Mission"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Join Our Community", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Star,
              title: "Customer First",
              description: "Every decision we make is centered around your satisfaction and experience.",
            },
            {
              icon: Zap,
              title: "Speed & Efficiency",
              description: "Fast shipping, quick customer service, and instant solutions to your problems.",
            },
            {
              icon: Shield,
              title: "Trust & Security",
              description: "Your data and payments are protected with military-grade encryption.",
            },
            {
              icon: RotateCcw,
              title: "Sustainability",
              description: "Eco-friendly packaging and responsible sourcing of all our products.",
            },
          ]}
        />
      </div>

      <div id="company-stats" data-section="company-stats">
        <MetricCardThree
          title="By The Numbers"
          description="NexCart's impact since launch."
          tag="Our Growth"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          buttons={[{ text: "Start Shopping", href: "/shop" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Customers",
              value: "500K+",
            },
            {
              id: "2",
              icon: Award,
              title: "Products Shipped",
              value: "2.1M",
            },
            {
              id: "3",
              icon: Star,
              title: "Avg Rating",
              value: "4.9/5",
            },
            {
              id: "4",
              icon: Clock,
              title: "Avg Delivery",
              value: "3-5 Days",
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