import { Link } from "wouter";
import { ArrowRight, Leaf, Globe, TrendingUp, Users, Sun, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const impactAreas = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "We develop projects that minimize environmental impact while maximizing clean energy production.",
    points: [
      "Comprehensive environmental impact assessments",
      "Biodiversity protection measures",
      "Land use optimization strategies",
      "Water conservation practices",
    ],
  },
  {
    icon: TrendingUp,
    title: "Economic Impact",
    description: "Our projects generate significant economic benefits for local communities and the broader economy.",
    points: [
      "Local job creation during construction and operations",
      "Skills development and training programs",
      "Local procurement and supplier development",
      "Community benefit sharing initiatives",
    ],
  },
  {
    icon: Globe,
    title: "Energy Security",
    description: "We contribute to South Africa's energy security by developing reliable renewable energy capacity.",
    points: [
      "Diversified energy supply sources",
      "Reduced dependence on imported fuels",
      "Enhanced grid stability and resilience",
      "Support for national energy transition",
    ],
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "We believe in meaningful engagement with the communities where we operate.",
    points: [
      "Transparent communication and consultation",
      "Community development initiatives",
      "Education and awareness programs",
      "Long-term community partnerships",
    ],
  },
];

const sdgAlignment = [
  { number: 7, title: "Affordable and Clean Energy", description: "Ensuring access to affordable, reliable, sustainable energy" },
  { number: 8, title: "Decent Work and Economic Growth", description: "Promoting sustained, inclusive economic growth and employment" },
  { number: 9, title: "Industry, Innovation and Infrastructure", description: "Building resilient infrastructure and sustainable industrialization" },
  { number: 13, title: "Climate Action", description: "Taking urgent action to combat climate change and its impacts" },
];

export default function Sustainability() {
  return (
    <Layout>
      <SEO
        title="Sustainability & Impact"
        description="Discover how Black Lyon Power Holdings prioritizes environmental responsibility, economic impact, and energy security in all our renewable energy projects."
        keywords="sustainable energy South Africa, renewable energy impact, environmental responsibility, clean energy development"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Commitment
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Sustainability & Impact
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Environmental responsibility, economic impact, and contribution to energy security are fundamental to everything we do at Black Lyon Power Holdings.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Sustainability at Our Core
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At Black Lyon Power Holdings, sustainability is not an afterthought—it's embedded in our business model. We develop renewable energy projects that deliver positive environmental, social, and economic outcomes.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our approach recognizes that long-term success depends on creating value for all stakeholders: communities, the environment, off-takers, and investors. This holistic perspective guides every decision we make.
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
                    <Recycle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="text-sm font-medium text-foreground">Circularity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Our Impact Areas
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We focus on four key areas where our projects create meaningful, lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
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

      {/* National Context Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Supporting South Africa's Energy Transition
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed">
                South Africa faces significant energy challenges, including supply constraints, aging infrastructure, and the need to reduce carbon emissions. Black Lyon Power Holdings is positioned to contribute meaningfully to addressing these challenges through the development of utility-scale renewable energy projects.
              </p>
              <p className="mt-4 leading-relaxed">
                Our projects align with national policy objectives, including the Integrated Resource Plan (IRP), which calls for significant increases in renewable energy capacity. By developing high-quality solar and wind projects, we support the country's transition to a more sustainable, diversified energy mix.
              </p>
              <p className="mt-4 leading-relaxed">
                We are committed to playing our part in building a cleaner, more resilient energy future for South Africa, creating lasting value for communities, industry, and the nation as a whole.
              </p>
            </div>
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
              Join us in building a sustainable energy future for South Africa.
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
