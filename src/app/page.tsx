"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Zap, Flame, CheckCircle, Shield, Star, RotateCcw, Heart, MessageCircle, Mail, Clock, Users, TrendingUp, Award, AlertCircle } from 'lucide-react';

export default function HomePage() {
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
          navItems={navItems}
          button={{ text: "Cart", href: "#" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Trending Products You Can't Miss 🔥"
          description="Discover the hottest gadgets and viral items curated for Gen Z. Fast shipping, secure checkout, unbeatable prices. Smart Shopping Starts Here."
          background="gradient-bars"
          tag="Limited Time Offer"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Shop Now", href: "/shop" },
            { text: "Explore Deals", href: "#" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072174.jpg"
          imageAlt="Trending gadgets with neon glow effects"
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardTwo
          title="Featured Products"
          description="Handpicked trending items that everyone's buying right now. Limited stock available."
          tag="Hot Deals"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            { text: "View All Products", href: "/shop" },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "NexCart Exclusive",
              name: "Premium Wireless Earbuds Pro",
              price: "$49.99",
              rating: 5,
              reviewCount: "2.3K",
              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-stylish-hipster-woman-lying-grass-park-girl-weares-trendy-outfit-smiling-model-making-selfie-female-listening-music-via-headphones-top-view_158538-16132.jpg?_wi=1",
              imageAlt: "Wireless earbuds",
            },
            {
              id: "2",
              brand: "NexCart Exclusive",
              name: "Ultra Fast Power Bank 30W",
              price: "$34.99",
              rating: 5,
              reviewCount: "1.8K",
              imageSrc: "http://img.b2bpic.net/free-photo/desk-with-ssd-laptop-top-view_23-2149328276.jpg?_wi=1",
              imageAlt: "Power bank",
            },
            {
              id: "3",
              brand: "NexCart Exclusive",
              name: "Smart Fitness Watch X1",
              price: "$89.99",
              rating: 4,
              reviewCount: "956",
              imageSrc: "http://img.b2bpic.net/free-photo/glasses-watch-near-laptop-coffee_23-2147777775.jpg?_wi=1",
              imageAlt: "Smart watch",
            },
          ]}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <FeatureBorderGlow
          title="Why Choose NexCart"
          description="We deliver more than products. We deliver experience, quality, and trust."
          tag="Our Promise"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get 10% Off First Order", href: "#" },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Zap,
              title: "Lightning Fast Shipping",
              description: "Get your orders within 3-5 business days. Free shipping on orders over $50.",
            },
            {
              icon: Shield,
              title: "Secure Payment",
              description: "100% secure checkout with SSL encryption. Your data is always protected.",
            },
            {
              icon: Star,
              title: "Premium Quality",
              description: "Curated products from trusted brands. Every item quality-checked before shipping.",
            },
            {
              icon: RotateCcw,
              title: "Easy Returns",
              description: "30-day hassle-free returns. No questions asked, full refund guarantee.",
            },
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Millions"
          description="Join 500K+ happy customers who shop smart with NexCart."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Featured Partners"
          tagIcon={Heart}
          tagAnimation="slide-up"
          names={[
            "Amazon",
            "Best Buy",
            "Spotify",
            "Airbnb",
            "Slack",
            "Figma",
            "Notion",
            "Stripe",
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/buy-nothing-logo-template-design_742173-13670.jpg",
            "http://img.b2bpic.net/free-vector/set-flat-design-e-commerce-logos_23-2148944187.jpg",
            "http://img.b2bpic.net/free-photo/woman-using-modern-headphones-smartphone-sofa-home_23-2148793464.jpg",
            "http://img.b2bpic.net/free-vector/gradient-pp-logo-template_23-2151171196.jpg",
            "http://img.b2bpic.net/free-vector/gradient-holistic-logo-collection_23-2148867915.jpg",
            "http://img.b2bpic.net/free-vector/landing-page-with-liquid-effect_52683-8327.jpg",
            "http://img.b2bpic.net/free-vector/hand-drawn-instagram-highlights-set_23-2148886699.jpg",
            "http://img.b2bpic.net/free-vector/blue-orange-logo_1071-197.jpg",
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real reviews from real customers. See why everyone loves shopping with NexCart."
          tag="Customer Stories"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Read More Reviews", href: "#" },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarah.chen",
              testimonial: "Got my earbuds in 2 days! The quality is insane for this price. Definitely ordering again.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-curly-haired-lady-showing-thumb-up-park_1262-20821.jpg",
              imageAlt: "Sarah Chen",
            },
            {
              id: "2",
              name: "Marcus Johnson",
              handle: "@marcus.j",
              testimonial: "NexCart's customer service is amazing. Had an issue and they fixed it instantly. Recommend 100%!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-arab-pointing-camera_1187-5948.jpg",
              imageAlt: "Marcus Johnson",
            },
            {
              id: "3",
              name: "Alex Rivera",
              handle: "@alexrivera_",
              testimonial: "Best prices I've found online for trending gadgets. Love this store!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg",
              imageAlt: "Alex Rivera",
            },
            {
              id: "4",
              name: "Jordan Lee",
              handle: "@jordan.lee",
              testimonial: "Fast shipping, secure payment, quality products. What else could you ask for?",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
              imageAlt: "Jordan Lee",
            },
            {
              id: "5",
              name: "Taylor Swift",
              handle: "@taylorswift_",
              testimonial: "The pop it fidget toys arrived and my whole friend group loves them. Great deal!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-playing-with-party-accesories_1187-4013.jpg",
              imageAlt: "Taylor Swift",
            },
            {
              id: "6",
              name: "Casey King",
              handle: "@caseyking",
              testimonial: "15% off with newsletter signup? Done! Worth it just for the deals alone.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-african-guy-smiling-student-confident-his-future-career-head-hunter-dream-standing-white-wall_176420-12537.jpg",
              imageAlt: "Casey King",
            },
          ]}
        />
      </div>

      <div id="limited-offer" data-section="limited-offer">
        <MetricCardThree
          title="Flash Sale Alert"
          description="Limited time offer! Use code NEXCART10 for 10% off your first order."
          tag="Ends Soon"
          tagIcon={AlertCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Shop Now", href: "/shop" },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Clock,
              title: "Hours Left",
              value: "48",
            },
            {
              id: "2",
              icon: Users,
              title: "Customers Used",
              value: "2.3K",
            },
            {
              id: "3",
              icon: TrendingUp,
              title: "Discount Value",
              value: "$500K",
            },
            {
              id: "4",
              icon: Award,
              title: "Satisfaction Rate",
              value: "99.8%",
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