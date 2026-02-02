import { Link } from "wouter";
import { ArrowRight, Zap, Shield, Target, TrendingUp, Leaf, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Utility-Scale Renewable Energy Development"
        description="Black Lyon Power Holdings develops utility-scale renewable energy projects for municipalities and industrial customers. Building the energy infrastructure Africa needs."
        keywords="renewable energy development South Africa, utility-scale renewable projects, municipal renewable energy solutions, industrial clean energy partnerships"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Developing Utility-Scale
              <span className="block text-primary mt-2">Renewable Energy</span>
              <span className="block mt-2">for a Sustainable Future</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Partnering with municipalities and industry to deliver reliable, large-scale clean energy infrastructure across South Africa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-hero-contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" data-testid="button-hero-learn-more">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Black Lyon Power Holdings is positioned as a serious renewable energy developer and a long-term infrastructure partner. We serve as a credible counterpart to municipalities and industrial clients, operating as an investment-ready platform focused on sustainable energy development.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Utility-Scale Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in large-scale renewable energy projects that deliver meaningful impact to municipalities and industrial customers.
              </p>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build enduring relationships with stakeholders, ensuring sustainable energy infrastructure for generations to come.
              </p>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Investment-Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform is designed to attract and deploy capital effectively into high-quality renewable energy assets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Overview Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Development Approach
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Strategic Project Development
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our approach encompasses the entire project lifecycle, from identification and feasibility assessment through to development, financing, and long-term asset management.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Project identification and site assessment",
                  "Comprehensive feasibility analysis",
                  "Stakeholder engagement and regulatory compliance",
                  "Financing and capital deployment",
                  "Construction oversight and commissioning",
                  "Long-term asset management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/approach" className="inline-block mt-8">
                <Button variant="outline" className="gap-2" data-testid="button-learn-approach">
                  Learn About Our Approach
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 p-8">
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Growth</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Sustainability</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Infrastructure</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Focus Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Focus Areas
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Project Criteria
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We target utility-scale renewable energy projects that meet our rigorous development standards and deliver long-term value.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Municipal Projects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with municipalities to develop renewable energy infrastructure that supports local energy security and economic development. Our projects help communities achieve their sustainability goals while reducing energy costs.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Industrial Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with industrial off-takers seeking reliable, cost-effective clean energy solutions. Our utility-scale projects provide the capacity and stability that large industrial operations require.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-2" data-testid="button-view-projects">
                View Our Focus Areas
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Sustainability at Our Core
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Environmental responsibility, economic impact, and contribution to national energy security are fundamental to everything we do. We align our projects with both national and global sustainability objectives.
            </p>
            <Link href="/sustainability" className="inline-block mt-8">
              <Button className="gap-2" data-testid="button-sustainability">
                Our Sustainability Approach
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Ready to Discuss Your Energy Future?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you represent a municipality, industrial enterprise, or investment group, we welcome the opportunity to explore how we can work together.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <Button size="lg" className="gap-2" data-testid="button-cta-contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
