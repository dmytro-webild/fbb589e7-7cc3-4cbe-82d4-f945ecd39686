"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Flame,
  Zap,
  Shield,
  Star,
  RotateCcw,
  Mail,
} from "lucide-react";

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

export default function ShopPage() {
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

      <div id="all-products" data-section="all-products">
        <ProductCardTwo
          title="Complete Product Collection"
          description="Browse our full range of trending gadgets, tech accessories, and viral items. Everything you need for modern living."
          tag="All Items"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[{ text: "Filter Products", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="bento-grid"
          products={[
            {
              id: "1",
              brand: "NexCart Exclusive",
              name: "Premium Wireless Earbuds Pro",
              price: "$49.99",
              rating: 5,
              reviewCount: "2.3K",
              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-stylish-hipster-woman-lying-grass-park-girl-weares-trendy-outfit-smiling-model-making-selfie-female-listening-music-via-headphones-top-view_158538-16132.jpg?_wi=2",
              imageAlt: "Wireless earbuds",
            },
            {
              id: "2",
              brand: "NexCart Exclusive",
              name: "Ultra Fast Power Bank 30W",
              price: "$34.99",
              rating: 5,
              reviewCount: "1.8K",
              imageSrc: "http://img.b2bpic.net/free-photo/desk-with-ssd-laptop-top-view_23-2149328276.jpg?_wi=2",
              imageAlt: "Power bank",
            },
            {
              id: "3",
              brand: "NexCart Exclusive",
              name: "Smart Fitness Watch X1",
              price: "$89.99",
              rating: 4,
              reviewCount: "956",
              imageSrc: "http://img.b2bpic.net/free-photo/glasses-watch-near-laptop-coffee_23-2147777775.jpg?_wi=2",
              imageAlt: "Smart watch",
            },
            {
              id: "4",
              brand: "Creator's Choice",
              name: "Professional Ring Light 10 inch",
              price: "$59.99",
              rating: 5,
              reviewCount: "1.2K",
              imageSrc: "http://img.b2bpic.net/free-photo/girl-films-literature-critique-with-phone-presenting-novel-from-esteemed-author_482257-104526.jpg",
              imageAlt: "Ring light",
            },
            {
              id: "5",
              brand: "Content Creator",
              name: "Mobile Phone Gimbal Stabilizer",
              price: "$79.99",
              rating: 5,
              reviewCount: "890",
              imageSrc: "http://img.b2bpic.net/free-photo/woman-using-smartphone-with-pop-socket_52683-107784.jpg",
              imageAlt: "Phone gimbal",
            },
            {
              id: "6",
              brand: "Stress Relief",
              name: "Rainbow Pop It Fidget Toy",
              price: "$12.99",
              rating: 5,
              reviewCount: "3.1K",
              imageSrc: "http://img.b2bpic.net/free-photo/colorful-pop-it-toy-background-close-up_58702-5601.jpg",
              imageAlt: "Pop it toy",
            },
            {
              id: "7",
              brand: "Gaming Pro",
              name: "RGB Gaming Mouse Wireless",
              price: "$44.99",
              rating: 5,
              reviewCount: "2.0K",
              imageSrc: "http://img.b2bpic.net/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529374.jpg",
              imageAlt: "Gaming mouse",
            },
            {
              id: "8",
              brand: "Gaming Pro",
              name: "Mechanical Gaming Keyboard RGB",
              price: "$99.99",
              rating: 5,
              reviewCount: "1.5K",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-hand-holding-key_23-2149680275.jpg",
              imageAlt: "Gaming keyboard",
            },
            {
              id: "9",
              brand: "Photography",
              name: "Phone Camera Lens Kit Pro",
              price: "$54.99",
              rating: 4,
              reviewCount: "745",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white-mobilephone-belt-bag-hat-camera-necklace-trousers-sunglasses-white-wood-table_1921-111.jpg",
              imageAlt: "Camera lens kit",
            },
            {
              id: "10",
              brand: "Mobile Accessories",
              name: "Adjustable Phone Stand Holder",
              price: "$19.99",
              rating: 5,
              reviewCount: "1.9K",
              imageSrc: "http://img.b2bpic.net/free-photo/round-phone-grip-mobile-with-african-american-woman-talking-phone_53876-97898.jpg",
              imageAlt: "Phone stand",
            },
          ]}
        />
      </div>

      <div id="shop-features" data-section="shop-features">
        <FeatureBorderGlow
          title="Why Shop at NexCart"
          description="Experience the best in online shopping with our commitment to quality, speed, and customer satisfaction."
          tag="Shop Benefits"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Start Shopping", href: "/shop" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Zap,
              title: "Fast Delivery",
              description: "3-5 business day shipping on all orders. Free shipping on purchases over $50.",
            },
            {
              icon: Shield,
              title: "Protected Transactions",
              description: "SSL encryption and secure payment processing for every order.",
            },
            {
              icon: Star,
              title: "Quality Assurance",
              description: "Every product verified and tested before shipment to you.",
            },
            {
              icon: RotateCcw,
              title: "Simple Returns",
              description: "30-day returns policy with no questions asked. Full refund guarantee.",
            },
          ]}
        />
      </div>

      <div id="shop-newsletter" data-section="shop-newsletter">
        <ContactFaq
          ctaTitle="Subscribe for Exclusive Deals"
          ctaDescription="Get special offers, early access to new products, and insider shopping tips delivered weekly."
          ctaButton={{ text: "Subscribe Now & Save 15%", href: "#" }}
          ctaIcon={Mail}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and buy now pay later options.",
            },
            {
              id: "2",
              title: "How can I track my order?",
              content: "Once shipped, you'll receive a tracking number via email. You can monitor delivery status in real-time.",
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content: "Currently shipping to select countries. Check your location at checkout for available shipping options.",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2024 NexCart. All rights reserved."
          bottomRightText="Shop Smart, Save More"
        />
      </div>
    </ThemeProvider>
  );
}