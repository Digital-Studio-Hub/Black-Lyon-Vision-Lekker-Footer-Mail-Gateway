import { Link } from "wouter";
import { ArrowRight, Zap, Shield, Target, TrendingUp, Leaf, Building2, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Building the Energy Infrastructure Africa Needs"
        description="Blacklyon Power Holdings is a South African renewable energy and infrastructure development platform focused on originating, developing, and owning bankable clean energy assets across Southern Africa."
        keywords="Blacklyon Power Holdings, renewable energy South Africa, clean energy infrastructure, independent power producer, utility-scale solar, Southern Africa energy"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Building the Energy
              <span className="block text-primary mt-2">Infrastructure</span>
              <span className="block mt-2">Africa Needs</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Blacklyon Power Holdings is a South African based renewable energy and infrastructure development platform focused on originating, developing, and owning bankable clean energy assets across Southern Africa.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed italic">
              We are building the foundations of long-term energy security — deliberately, responsibly, and at scale.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-hero-contact">
                  Engage With Us
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

      {/* Purpose / Vision / Mission Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Purpose
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To strengthen Africa's energy security and enable sustainable industrial growth through the development of resilient, clean power infrastructure.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Energy is not a luxury. It is economic infrastructure.
              </p>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted African independent power producer, recognised for disciplined execution, principled partnerships, and long-term ownership of energy assets.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                We pursue growth that is earned — not rushed.
              </p>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Mission
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Originate and develop utility-scale renewable energy projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Structure bankable, financeable assets aligned with institutional capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Partner with governments, communities, EPCs, and financiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Retain long-term value while delivering measurable ESG outcomes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Developer-Owner Mindset
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Blacklyon Power Holdings develops utility-scale renewable energy projects, with a primary focus on solar and hybrid solutions, designed to support:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "National and regional power grids",
                  "Industrial, commercial, and public-sector power demand",
                  "Long-term job creation and local economic participation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We operate with a developer-owner mindset, managing projects from origination through financial close and into delivery.
              </p>
              <Link href="/approach" className="inline-block mt-8">
                <Button variant="outline" className="gap-2" data-testid="button-learn-approach">
                  Our Development Focus
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

      {/* Why BPH Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Differentiators
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Why Blacklyon Power Holdings
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              BPH combines ambition with realism. We understand where we are starting — and we are uncompromising about where we intend to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Execution-First Discipline", desc: "Fundamentals before scale" },
              { icon: TrendingUp, title: "Bankability Focus", desc: "Projects structured for institutional investment" },
              { icon: Shield, title: "Credible Partnerships", desc: "Collaboration with proven EPC and technology providers" },
              { icon: Zap, title: "Long-Term Alignment", desc: "Patient capital, durable assets" },
              { icon: Building2, title: "South African-Rooted", desc: "Built in South Africa, designed for Southern Africa" },
              { icon: Award, title: "Level 1 B-BBEE", desc: "Supporting inclusive participation and public-sector procurement frameworks" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              What Guides Us
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                "Integrity over expedience",
                "Execution over rhetoric",
                "Partnership over extraction",
                "Long-term value over short-term gain",
                "Purpose grounded in realism",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Trusted. Responsible. Enduring. */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Trusted. Responsible. Enduring.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Built to the standard where institutional investors are reassured, development finance institutions are comfortable, public-sector stakeholders have confidence, and long-term partners remain aligned.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <Button size="lg" className="gap-2" data-testid="button-cta-contact">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
