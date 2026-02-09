import { Link } from "wouter";
import { ArrowRight, Building2, Factory, Sun, Wind, Zap, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const projectTypes = [
  {
    icon: Sun,
    title: "Solar PV",
    description: "Utility-scale solar photovoltaic projects that harness Southern Africa's exceptional solar resource to generate clean, reliable electricity at scale.",
  },
  {
    icon: Zap,
    title: "Hybrid Solutions",
    description: "Integrated solar and storage solutions that enhance grid stability, enable greater renewable energy integration, and provide reliable power supply.",
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description: "Large-scale wind energy projects in suitable locations, contributing to a diversified renewable energy portfolio across Southern Africa.",
  },
];

const targetMarkets = [
  {
    icon: Building2,
    title: "National & Regional Power Grids",
    description: "We develop projects that contribute to national and regional electricity supply, supporting South Africa's energy transition and grid resilience.",
    features: [
      "Utility-scale generation capacity",
      "Grid stability contributions",
      "Support for national IRP objectives",
      "Regional energy security",
    ],
  },
  {
    icon: Factory,
    title: "Industrial, Commercial & Public-Sector",
    description: "We serve industrial, commercial, and public-sector power demand through dedicated renewable energy supply and power purchase agreements.",
    features: [
      "Long-term energy cost stability",
      "Reduced carbon footprint",
      "Enhanced energy security",
      "Customized PPA structures",
    ],
  },
  {
    icon: Briefcase,
    title: "Job Creation & Local Participation",
    description: "Our projects are designed to deliver long-term job creation and meaningful local economic participation in the communities where we operate.",
    features: [
      "Local employment during construction and operations",
      "Skills development and training",
      "Local procurement and supplier development",
      "Community benefit sharing",
    ],
  },
];

export default function Projects() {
  return (
    <Layout>
      <SEO
        title="Projects & Focus Areas"
        description="Blacklyon Power Holdings develops utility-scale renewable energy projects with a primary focus on solar and hybrid solutions for national grids, industrial demand, and public-sector power needs."
        keywords="utility-scale solar projects, hybrid energy solutions, wind energy South Africa, national power grid, industrial renewable energy"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Projects & Focus Areas
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Blacklyon Power Holdings develops utility-scale renewable energy projects, with a primary focus on solar and hybrid solutions, designed to support national grids, industrial demand, and long-term economic participation.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Technology Focus
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We focus on proven renewable energy technologies that deliver reliable, cost-effective clean energy at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="p-8 hover-elevate transition-all duration-300">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Markets Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Who We Serve
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our projects are designed to support diverse energy needs across the economy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetMarkets.map((market, index) => {
              const Icon = market.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {market.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {market.description}
                  </p>
                  <ul className="space-y-3">
                    {market.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Geographic Focus
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                South African-Rooted, Regional Outlook
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Built in South Africa, designed for Southern Africa. We focus on regions with strong renewable energy resources and favourable project economics.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We consider geographic factors including solar irradiance, wind resources, grid infrastructure, and land availability when evaluating project opportunities.
              </p>
              <div className="mt-8 flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Headquartered in Cape Town, South Africa</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">ZA</div>
                  <div className="text-xl font-medium text-foreground">Southern Africa</div>
                  <div className="text-muted-foreground mt-2">Regional Development Focus</div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-background/80 backdrop-blur-sm rounded-md p-3">
                      <div className="font-semibold text-foreground">Solar</div>
                      <div className="text-muted-foreground">Northern Cape, Free State</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-md p-3">
                      <div className="font-semibold text-foreground">Wind</div>
                      <div className="text-muted-foreground">Eastern Cape, Western Cape</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Interested in Partnership?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              If your capital is patient and your perspective long-term, we welcome the conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnerships">
                <Button className="gap-2" data-testid="button-projects-partnerships">
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-projects-contact">
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
