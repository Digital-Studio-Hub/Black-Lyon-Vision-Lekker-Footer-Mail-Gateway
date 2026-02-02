import { Link } from "wouter";
import { ArrowRight, Building2, Factory, Briefcase, Users, Handshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const partnerTypes = [
  {
    icon: Building2,
    title: "Municipalities",
    description: "We partner with municipalities to develop renewable energy projects that support local energy security, reduce costs, and advance sustainability goals.",
    benefits: [
      "Long-term energy cost savings",
      "Enhanced energy security and resilience",
      "Support for climate commitments",
      "Local economic development",
      "Revenue generation opportunities",
    ],
    cta: "Discuss Municipal Partnership",
  },
  {
    icon: Factory,
    title: "Industrial Off-Takers",
    description: "We work with industrial enterprises seeking reliable, cost-effective clean energy through power purchase agreements and dedicated renewable energy supply.",
    benefits: [
      "Competitive, stable energy pricing",
      "Reduced carbon footprint",
      "Enhanced sustainability credentials",
      "Flexible PPA structures",
      "Long-term energy security",
    ],
    cta: "Explore Industrial Solutions",
  },
  {
    icon: Briefcase,
    title: "Strategic Investors",
    description: "We welcome discussions with infrastructure investors and financial partners seeking exposure to South Africa's renewable energy sector.",
    benefits: [
      "Quality project pipeline",
      "Experienced development team",
      "Strong stakeholder relationships",
      "Long-term value creation focus",
      "Transparent reporting and governance",
    ],
    cta: "Investment Opportunities",
  },
  {
    icon: Users,
    title: "Strategic Partners",
    description: "We collaborate with technical advisors, engineering firms, and other service providers who share our commitment to excellence.",
    benefits: [
      "Long-term collaboration opportunities",
      "Quality-focused partnership",
      "Shared commitment to sustainability",
      "Professional development context",
      "Growing project pipeline",
    ],
    cta: "Explore Partnership",
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
        title="Partnership Opportunities"
        description="Explore partnership opportunities with Black Lyon Power Holdings for municipalities, industrial off-takers, investors, and strategic collaborators."
        keywords="renewable energy partnerships, municipal energy partnerships, industrial off-takers, energy investment South Africa"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Work With Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Partnership Opportunities
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Black Lyon Power Holdings seeks partnerships with municipalities, industrial off-takers, investors, and strategic collaborators who share our vision for sustainable energy development.
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
                How We Partner
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At Black Lyon Power Holdings, we approach every partnership with a long-term perspective. We believe that successful renewable energy development requires alignment of interests, transparent communication, and shared commitment to excellence.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you're a municipality seeking to enhance energy security, an industrial enterprise looking for reliable clean energy, or an investor exploring opportunities in renewable infrastructure, we welcome the opportunity to explore how we might work together.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Handshake className="h-12 w-12 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">Long-Term Focus</div>
                  <div className="text-muted-foreground">Building relationships that last</div>
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
                    {["Transparency", "Integrity", "Excellence", "Sustainability"].map((value, index) => (
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
              We partner with diverse stakeholders who share our commitment to sustainable energy development.
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
              Ready to Discuss a Partnership?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We welcome the opportunity to explore how Black Lyon Power Holdings can support your renewable energy objectives.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <Button size="lg" className="gap-2" data-testid="button-partnerships-contact">
                Discuss a Partnership
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
