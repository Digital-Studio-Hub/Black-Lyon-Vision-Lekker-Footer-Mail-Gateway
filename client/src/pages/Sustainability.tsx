import { Link } from "wouter";
import { ArrowRight, Leaf, Globe, TrendingUp, Users, Sun, Recycle, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const esgPillars = [
  {
    icon: Leaf,
    title: "Decarbonisation",
    description: "Support decarbonisation while strengthening energy reliability through the development of clean power infrastructure.",
    points: [
      "Comprehensive environmental impact assessments",
      "Carbon emission reduction through clean energy generation",
      "Biodiversity protection measures",
      "Land use optimization strategies",
    ],
  },
  {
    icon: Users,
    title: "Inclusive Participation",
    description: "Enable inclusive local economic participation, creating lasting value in the communities where we operate.",
    points: [
      "Local job creation during construction and operations",
      "Skills development and training programmes",
      "Local procurement and supplier development",
      "Community benefit sharing initiatives",
    ],
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Meet international environmental, social, and governance standards in every project we develop.",
    points: [
      "Alignment with UN Sustainable Development Goals",
      "POPIA and data protection compliance",
      "Transparent reporting and governance",
      "Independent environmental oversight",
    ],
  },
  {
    icon: Shield,
    title: "Community Trust",
    description: "Build lasting trust with host communities and stakeholders through meaningful engagement and transparent communication.",
    points: [
      "Proactive community consultation",
      "Transparent project communication",
      "Long-term community partnerships",
      "Education and awareness programmes",
    ],
  },
];

const sdgAlignment = [
  { number: 7, title: "Affordable and Clean Energy", description: "Ensuring access to affordable, reliable, sustainable energy" },
  { number: 8, title: "Decent Work and Economic Growth", description: "Promoting sustained, inclusive economic growth and employment" },
  { number: 9, title: "Industry, Innovation and Infrastructure", description: "Building resilient infrastructure and sustainable industrialisation" },
  { number: 13, title: "Climate Action", description: "Taking urgent action to combat climate change and its impacts" },
];

export default function Sustainability() {
  return (
    <Layout>
      <SEO
        title="ESG & Impact"
        description="At Blacklyon Power Holdings, ESG is embedded — not marketed. Our projects support decarbonisation, inclusive participation, international standards, and lasting community trust."
        keywords="ESG renewable energy, sustainable energy South Africa, environmental social governance, clean energy impact, responsible infrastructure"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our ESG Commitment
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              ESG & Impact
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              At Blacklyon Power Holdings, ESG is embedded — not marketed. Responsible infrastructure is the only infrastructure that endures.
            </p>
          </div>
        </div>
      </section>

      {/* ESG Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Embedded, Not Marketed
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our projects are developed to support decarbonisation while strengthening energy reliability, enable inclusive local economic participation, meet international environmental, social, and governance standards, and build lasting trust with host communities and stakeholders.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed italic">
                Responsible infrastructure is the only infrastructure that endures.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Environment</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Community</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Sun className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Clean Energy</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-md p-6 text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Pillars Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Our ESG Pillars
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Four pillars guide our approach to responsible infrastructure development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {esgPillars.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-3">
                    {area.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Global Alignment
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              UN Sustainable Development Goals
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our work contributes directly to multiple United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgAlignment.map((sdg, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{sdg.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {sdg.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sdg.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Partner With Us
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Join us in building responsible, enduring energy infrastructure for Southern Africa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnerships">
                <Button className="gap-2" data-testid="button-sustainability-partnerships">
                  Partnership Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-sustainability-contact">
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
