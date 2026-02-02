import { Link } from "wouter";
import { ArrowRight, Search, FileCheck, Users, Scale, HardHat, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const developmentPhases = [
  {
    icon: Search,
    title: "Project Identification",
    description: "We systematically identify and evaluate potential renewable energy projects, considering factors such as resource availability, grid connectivity, land suitability, and market demand.",
    details: [
      "Resource assessment and site analysis",
      "Preliminary feasibility screening",
      "Market opportunity evaluation",
      "Strategic fit assessment",
    ],
  },
  {
    icon: FileCheck,
    title: "Development Planning",
    description: "Our development process encompasses comprehensive planning, including technical design, environmental assessments, and regulatory approvals.",
    details: [
      "Technical design and engineering",
      "Environmental impact assessments",
      "Permitting and licensing",
      "Grid connection planning",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "We believe in proactive and transparent engagement with all stakeholders, building trust and ensuring alignment throughout the project lifecycle.",
    details: [
      "Community consultation and outreach",
      "Municipal and government relations",
      "Off-taker negotiations",
      "Investor communications",
    ],
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "We navigate the complex regulatory landscape with diligence, ensuring full compliance with all applicable laws, regulations, and standards.",
    details: [
      "Regulatory pathway analysis",
      "Licensing and permit acquisition",
      "Environmental compliance",
      "Grid code compliance",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Oversight",
    description: "We manage the construction phase to ensure projects are delivered on time, on budget, and to the highest quality standards.",
    details: [
      "Contractor selection and management",
      "Quality assurance and control",
      "Schedule and budget management",
      "Health and safety oversight",
    ],
  },
  {
    icon: Settings,
    title: "Asset Management",
    description: "Our long-term thinking extends beyond project completion to ensure optimal performance and value creation throughout the asset's lifecycle.",
    details: [
      "Performance monitoring and optimization",
      "Operations and maintenance",
      "Revenue management",
      "Asset lifecycle planning",
    ],
  },
];

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Our Development Approach"
        description="Discover Black Lyon Power's systematic approach to developing utility-scale renewable energy projects from identification through to long-term asset management."
        keywords="renewable energy development approach, project development lifecycle, energy infrastructure, South Africa renewable projects"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Methodology
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Our Development Approach
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A systematic, disciplined approach to developing utility-scale renewable energy projects that deliver long-term value for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              The Development Lifecycle
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our approach encompasses the entire project lifecycle, from identification through to long-term asset management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Phase {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-Term Thinking Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Philosophy
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Long-Term Asset Thinking
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We approach every project with a long-term perspective. Renewable energy infrastructure represents a multi-decade commitment, and our development process reflects this reality.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From site selection to technical design, from stakeholder relationships to operational planning, every decision is made with the full lifecycle of the asset in mind. This discipline ensures that our projects deliver sustainable value for communities, off-takers, and investors alike.
              </p>
              <div className="mt-8 p-6 bg-background rounded-md">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Principles</h4>
                <ul className="space-y-3">
                  {[
                    "Quality over speed in project development",
                    "Sustainable relationships with all stakeholders",
                    "Rigorous technical and financial analysis",
                    "Proactive risk management",
                    "Continuous improvement and optimization",
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-accent p-8 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-primary">25+</div>
                    <div className="text-muted-foreground mt-2">Year Asset Lifecycle</div>
                  </div>
                  <div className="space-y-4">
                    {["Development", "Construction", "Operations", "Optimization"].map((phase, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${100 - index * 15}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-24">{phase}</span>
                      </div>
                    ))}
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
              Explore Our Project Criteria
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Learn about the types of projects we pursue and our target markets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button className="gap-2" data-testid="button-approach-projects">
                  Projects & Focus Areas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button variant="outline" data-testid="button-approach-partnerships">
                  Partnership Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
