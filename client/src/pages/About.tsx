import { Link } from "wouter";
import { ArrowRight, Target, Users, Lightbulb, MapPin, CheckCircle2, Quote, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Blacklyon Power Holdings is a South African renewable energy and infrastructure development platform focused on originating, developing, and owning bankable clean energy assets across Southern Africa."
        keywords="Blacklyon Power Holdings, renewable energy developer, South Africa energy, independent power producer, clean energy platform"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              About Blacklyon Power Holdings
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A South African based renewable energy and infrastructure development platform focused on originating, developing, and owning bankable clean energy assets across Southern Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose / Vision / Mission Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Our Purpose
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To strengthen Africa's energy security and enable sustainable industrial growth through the development of resilient, clean power infrastructure.
              </p>
              <p className="mt-4 text-muted-foreground italic">
                Energy is not a luxury. It is economic infrastructure.
              </p>

              <h2 className="mt-12 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Our Vision
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To become a trusted African independent power producer, recognised for disciplined execution, principled partnerships, and long-term ownership of energy assets.
              </p>
              <p className="mt-4 text-muted-foreground italic">
                We pursue growth that is earned — not rushed.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Our Mission
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Originate and develop utility-scale renewable energy projects",
                  "Structure bankable, financeable assets aligned with institutional capital",
                  "Partner with governments, communities, EPCs, and financiers",
                  "Retain long-term value while delivering measurable ESG outcomes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Quote className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                A Note from the Founder
              </span>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Blacklyon Power Holdings was established from a clear and practical conviction: Africa's economic growth and industrialisation depend on reliable, affordable, and sustainable energy infrastructure.
              </p>
              <p>
                BPH was not created to pursue short-term opportunities or speculative development. It was established to build durable power assets that strengthen energy security, support economic activity, and deliver long-term value to all stakeholders.
              </p>
              <p>
                We are developing this platform deliberately — with discipline, credible partnerships, and respect for the communities, institutions, and environments in which we operate. In this sector, trust is earned through governance, execution, and consistency over time, not ambition alone. Our goals are significant, but they are grounded in realism and responsibility.
              </p>
              <p>
                Energy infrastructure shapes economies for decades, and we approach this work with the seriousness it demands. Blacklyon Power Holdings is committed to growing into a trusted African independent power producer — aligning capital, technology, and purpose to deliver resilient energy solutions that endure.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-semibold">Founder & Executive Chairman</p>
              <p className="text-muted-foreground">Blacklyon Power Holdings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Integrity", desc: "Over expedience" },
              { title: "Execution", desc: "Over rhetoric" },
              { title: "Partnership", desc: "Over extraction" },
              { title: "Long-term Value", desc: "Over short-term gain" },
              { title: "Purpose", desc: "Grounded in realism" },
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center hover-elevate transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">BPH</div>
                  <div className="text-xl font-medium text-foreground">Blacklyon Power Holdings</div>
                  <div className="text-muted-foreground mt-2">Cape Town, South Africa</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Leadership & Governance
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                BPH is led by entrepreneurial leadership with execution experience across energy and infrastructure development, supported by strong governance principles and advisory oversight.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed italic">
                We are building an institution — not a moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ambition Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Ambition
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              We Are Not Building Narratives. We Are Building Assets.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              To become a meaningful contributor to South Africa's and Africa's energy transition, delivering clean power projects that enhance energy security, attract long-term capital, and support sustainable industrialisation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/approach">
                <Button className="gap-2" data-testid="button-about-approach">
                  Our Development Focus
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-about-contact">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
