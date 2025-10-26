"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Calendar, ChefHat, Dumbbell, MessageCircle, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Heritage Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Where timeless elegance meets modern comfort in the heart of the city. Discover exceptional hospitality and unforgettable moments."
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxurious hotel lobby with elegant decor"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="For over three decades, Grand Heritage Hotel has been the epitome of luxury hospitality, creating extraordinary experiences that celebrate the art of refined living and impeccable service."
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Awards & Recognition",
              href: "https://example.com"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our carefully curated amenities designed to elevate your stay"
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring premium treatments and therapies",
              icon: Waves
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with personal training services available",
              icon: Dumbbell
            },
            {
              title: "Fine Dining Excellence",
              description: "Experience culinary artistry at our signature restaurants crafted by world-renowned chefs",
              icon: ChefHat
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax by our stunning rooftop infinity pool with breathtaking city skyline views",
              icon: Waves
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Exquisite Accommodations"
          description="Discover our collection of elegantly appointed rooms and suites"
          tag="Guest Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "From $350/night",
              imageSrc: "https://images.pexels.com/photos/6466285/pexels-photo-6466285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe room with king bed"
            },
            {
              id: "junior-suite",
              name: "Junior Suite",
              price: "From $550/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious junior suite living area"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "From $1,200/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite bedroom"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their memorable stays"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Richardson",
              role: "Executive Director",
              testimonial: "The level of service and attention to detail at Grand Heritage Hotel is simply unmatched. Every moment of our stay felt like a luxurious dream.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Richardson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Consultant",
              testimonial: "From the elegant rooms to the exceptional dining, this hotel redefined my expectations of luxury hospitality. An absolutely remarkable experience.",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Martinez",
              role: "Art Gallery Owner",
              testimonial: "The perfect blend of classic sophistication and modern amenities. The spa treatments were divine and the staff made us feel like royalty.",
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Martinez"
            },
            {
              id: "4",
              name: "James Thompson",
              role: "Investment Banker",
              testimonial: "Outstanding service, breathtaking views, and impeccable attention to every detail. This hotel has become our preferred destination for luxury travel.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Thompson"
            },
            {
              id: "5",
              name: "Victoria Chen",
              role: "Fashion Designer",
              testimonial: "The elegant ambiance and personalized service created an unforgettable experience. Every aspect exceeded our highest expectations.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Victoria Chen"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the prestigious network of world-class hotels and resorts"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about your luxury stay"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What amenities are included in my stay?",
              content: "All rooms include complimentary high-speed WiFi, 24-hour room service, access to our fitness center and spa, daily housekeeping, and concierge services. Premium rooms also include access to our executive lounge."
            },
            {
              id: "2",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. We offer early check-in and late check-out upon request, subject to availability. Express check-in/out is available for our loyalty program members."
            },
            {
              id: "3",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service in our fleet of premium vehicles. This service can be arranged through our concierge team and is complimentary for suite guests."
            },
            {
              id: "4",
              title: "Can I make restaurant reservations?",
              content: "Absolutely! Our concierge team can make reservations at our signature restaurants as well as the finest establishments throughout the city. We recommend booking in advance for our award-winning rooftop restaurant."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Stay"
          tagIcon={Calendar}
          title="Ready for an Unforgettable Experience?"
          description="Contact our reservations team to book your luxury accommodation and begin planning your perfect stay with us."
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel concierge desk"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Availability"
          termsText="By submitting, you agree to receive booking information and special offers from Grand Heritage Hotel."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Heritage Hotel"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "dining"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "https://example.com"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Special Offers",
                  href: "https://example.com"
                },
                {
                  label: "Gift Cards",
                  href: "https://example.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}