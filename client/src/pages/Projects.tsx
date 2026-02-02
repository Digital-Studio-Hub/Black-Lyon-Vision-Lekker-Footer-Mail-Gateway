import { Link } from "wouter";
import { ArrowRight, Building2, Factory, Sun, Wind, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const projectTypes = [
  {
    icon: Sun,
    title: "Solar PV",
    description: "Utility-scale solar photovoltaic projects that harness South Africa's exceptional solar resource to generate clean, reliable electricity.",
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description: "Large-scale wind energy projects in suitable locations, contributing to a diversified renewable energy portfolio.",
  },
  {
    icon: Zap,
    title: "Energy Storage",
    description: "Battery energy storage systems that enhance grid stability and enable greater integration of renewable energy sources.",
  },
];

const targetMarkets = [
  {
    icon: Building2,
    title: "Municipal Projects",
    description: "We partner with municipalities to develop renewable energy infrastructure that supports local energy security and economic development. Our municipal projects are designed to:",
    features: [
      "Reduce municipal energy costs",
      "Enhance local energy security",
      "Support sustainability commitments",
      "Create local employment opportunities",
      "Generate revenue for community development",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Off-Takers",
    description: "We work with industrial enterprises seeking reliable, cost-effective clean energy solutions. Our industrial projects deliver:",
    features: [
      "Long-term energy cost stability",
      "Reduced carbon footprint",
      "Enhanced energy security",
      "Support for sustainability reporting",
      "Customized PPA structures",
    ],
  },
];

export default function Projects() {
  return (
    <Layout>
      <SEO
        title="Projects & Focus Areas"
        description="Explore Black Lyon Power's utility-scale renewable energy projects targeting municipalities and industrial off-takers across South Africa."
        keywords="utility-scale solar projects, wind energy South Africa, municipal energy projects, industrial renewable energy"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Focus Areas
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Projects & Focus Areas
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We target utility-scale renewable energy projects that meet our rigorous development standards and deliver long-term value for municipalities, industrial off-takers, and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
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
              Target Markets
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We serve two primary market segments, each with distinct needs and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {targetMarkets.map((market, index) => {
              const Icon = market.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
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
                National Reach, Local Impact
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Based in Cape Town, Black Lyon Power operates across South Africa, focusing on regions with strong renewable energy resources and favorable project economics.
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
                  <div className="text-xl font-medium text-foreground">South Africa</div>
                  <div className="text-muted-foreground mt-2">National Development Focus</div>
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

      {/* Development vs Acquisition Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Development & Acquisition Strategy
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We pursue both greenfield development and strategic acquisition of existing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Greenfield Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We identify and develop new projects from the ground up, leveraging our expertise in site selection, technical design, and project execution.
              </p>
              <ul className="space-y-2">
                {["Full control over project parameters", "Optimized technical design", "Long-term relationship building", "Maximum value creation potential"].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Strategic Acquisition
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We evaluate and acquire existing projects or development-stage assets that meet our investment criteria and strategic objectives.
              </p>
              <ul className="space-y-2">
                {["Accelerated deployment", "Proven resource data", "Established stakeholder relationships", "De-risked development pathway"].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
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
              Whether you're a municipality, industrial enterprise, or investor, we welcome the opportunity to discuss how we can work together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnerships">
                <Button className="gap-2" data-testid="button-projects-partnerships">
                  Partnership Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-projects-contact">
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
