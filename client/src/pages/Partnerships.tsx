import { Link } from "wouter";
import { ArrowRight, Building2, Factory, Briefcase, Users, Handshake, CheckCircle2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const partnerTypes = [
  {
    icon: Briefcase,
    title: "Institutional & Development Finance Partners",
    description: "We welcome discussions with institutional investors and development finance institutions seeking exposure to bankable, well-structured renewable energy assets in Southern Africa.",
    benefits: [
      "Projects structured for institutional investment",
      "Strong governance and transparent reporting",
      "Long-term value creation focus",
      "Measurable ESG outcomes",
      "Patient capital alignment",
    ],
    cta: "Investment Opportunities",
  },
  {
    icon: Factory,
    title: "EPC & Technology Providers",
    description: "We collaborate with proven EPC contractors and technology providers who share our commitment to quality execution and long-term asset performance.",
    benefits: [
      "Quality-focused project partnerships",
      "Growing pipeline of utility-scale projects",
      "Long-term collaboration opportunities",
      "Shared commitment to excellence",
      "Southern African regional scope",
    ],
    cta: "Explore Collaboration",
  },
  {
    icon: Landmark,
    title: "Public-Sector Entities & Utilities",
    description: "We partner with municipalities, government entities, and utilities to develop renewable energy infrastructure that supports energy security and public-sector procurement objectives.",
    benefits: [
      "Level 1 B-BBEE service provider",
      "Enhanced energy security and resilience",
      "Support for climate commitments",
      "Local economic development",
      "Inclusive participation frameworks",
    ],
    cta: "Discuss Public-Sector Partnership",
  },
  {
    icon: Building2,
    title: "Large Off-Takers",
    description: "We work with large industrial, commercial, and institutional off-takers seeking reliable, cost-effective clean energy through power purchase agreements.",
    benefits: [
      "Competitive, stable energy pricing",
      "Reduced carbon footprint",
      "Enhanced sustainability credentials",
      "Flexible PPA structures",
      "Long-term energy security",
    ],
    cta: "Explore Energy Solutions",
  },
];

const workingTogether = [
  {
    step: 1,
    title: "Initial Discussion",
    description: "We begin with an exploratory conversation to understand your objectives, constraints, and how a partnership might deliver value.",
  },
  {
    step: 2,
    title: "Opportunity Assessment",
    description: "We assess potential project opportunities, considering technical feasibility, commercial viability, and strategic fit.",
  },
  {
    step: 3,
    title: "Partnership Structuring",
    description: "We work together to develop a partnership structure that aligns interests and allocates risks appropriately.",
  },
  {
    step: 4,
    title: "Project Development",
    description: "We execute on agreed projects, maintaining transparent communication and collaborative decision-making throughout.",
  },
];

export default function Partnerships() {
  return (
    <Layout>
      <SEO
        title="Partner With Us"
        description="Blacklyon Power Holdings engages with institutional and development finance partners, EPC and technology providers, public-sector entities, utilities, and large off-takers."
        keywords="renewable energy partnerships, institutional investment, EPC partnerships, public-sector energy, energy investment South Africa, development finance"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Partner With Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Partner With Us
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              If your capital is patient and your perspective long-term, we welcome the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Who We Engage With
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Blacklyon Power Holdings engages with institutional and development finance partners, EPC and technology providers, public-sector entities, utilities, and large off-takers who share our long-term perspective.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We approach every partnership with discipline, transparency, and a commitment to creating durable value for all stakeholders.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Handshake className="h-12 w-12 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">Long-Term Alignment</div>
                  <div className="text-muted-foreground">Patient capital, durable assets</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent p-8">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-primary mb-2">Partnership</div>
                    <div className="text-muted-foreground">Values That Guide Us</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["Discipline", "Integrity", "Execution", "Endurance"].map((value, index) => (
                      <div key={index} className="bg-background/80 backdrop-blur-sm rounded-md p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                        <span className="text-sm font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Who We Work With
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We engage with partners who share our commitment to disciplined execution and long-term value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {partner.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full gap-2" data-testid={`button-partner-${index}`}>
                      {partner.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Together Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Working Together
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A straightforward approach to developing productive partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingTogether.map((step, index) => (
              <div key={index} className="relative">
                {index < workingTogether.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0" />
                )}
                <Card className="p-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Trusted. Responsible. Enduring.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Built to the standard where institutional investors are reassured, development finance institutions are comfortable, public-sector stakeholders have confidence, and long-term partners remain aligned.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <Button size="lg" className="gap-2" data-testid="button-partnerships-contact">
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
