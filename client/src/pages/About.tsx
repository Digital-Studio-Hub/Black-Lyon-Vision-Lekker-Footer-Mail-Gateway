import { Link } from "wouter";
import { ArrowRight, MapPin, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about Black Lyon Power Holdings, a renewable energy development platform focused on acquiring and developing utility-scale renewable energy projects for municipalities and industrial customers."
        keywords="Black Lyon Power Holdings, renewable energy developer, South Africa energy, clean energy company"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              About Black Lyon Power
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A renewable energy development platform focused on acquiring and developing utility-scale renewable energy projects for municipalities and industrial customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Black Lyon Power Holdings exists to accelerate South Africa's transition to sustainable energy by developing, financing, and managing utility-scale renewable energy infrastructure.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We are committed to creating lasting partnerships with municipalities, industrial enterprises, and investors who share our vision for a cleaner, more resilient energy future.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Our Vision
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To be a leading renewable energy developer in South Africa, recognized for our commitment to excellence, integrity, and sustainable development.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We envision a future where clean, reliable energy powers the growth and prosperity of communities and industries across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Our Role in the Energy Ecosystem
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We serve as a critical link between capital, communities, and clean energy infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Project Developer
              </h3>
              <p className="text-sm text-muted-foreground">
                Identifying, assessing, and developing high-quality renewable energy projects.
              </p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Strategic Partner
              </h3>
              <p className="text-sm text-muted-foreground">
                Building long-term relationships with municipalities and industrial clients.
              </p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Energy Solutions
              </h3>
              <p className="text-sm text-muted-foreground">
                Delivering reliable, cost-effective clean energy to meet diverse needs.
              </p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Local Presence
              </h3>
              <p className="text-sm text-muted-foreground">
                Based in Cape Town with a national focus across South Africa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">BLP</div>
                  <div className="text-xl font-medium text-foreground">Black Lyon Power Holdings</div>
                  <div className="text-muted-foreground mt-2">Cape Town, South Africa</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Commitment to Responsible Development
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At Black Lyon Power Holdings, responsible development is not just a principle—it's the foundation of our business. We believe that successful renewable energy projects must benefit all stakeholders: communities, the environment, and investors alike.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our projects are designed to create lasting positive impact, from local job creation during construction to long-term economic benefits from clean energy production. We engage proactively with communities and regulatory bodies to ensure our projects meet the highest standards of environmental and social responsibility.
              </p>
              <Link href="/sustainability" className="inline-block mt-8">
                <Button variant="outline" className="gap-2" data-testid="button-about-sustainability">
                  Our Sustainability Approach
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Learn More About Our Approach
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover how we develop and manage utility-scale renewable energy projects from inception to operation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/approach">
                <Button className="gap-2" data-testid="button-about-approach">
                  Our Approach
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-about-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
