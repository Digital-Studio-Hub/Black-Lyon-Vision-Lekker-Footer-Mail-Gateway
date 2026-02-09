import { Link } from "wouter";
import { ArrowRight, Search, FileCheck, Users, Scale, HardHat, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const developmentPhases = [
  {
    icon: Search,
    title: "Project Origination",
    description: "We systematically identify and evaluate potential renewable energy projects, considering resource availability, grid connectivity, land suitability, and market demand.",
    details: [
      "Resource assessment and site analysis",
      "Preliminary feasibility screening",
      "Market opportunity evaluation",
      "Strategic fit assessment",
    ],
  },
  {
    icon: FileCheck,
    title: "Development & Structuring",
    description: "Our development process encompasses comprehensive planning — technical design, environmental assessments, regulatory approvals, and financial structuring for bankability.",
    details: [
      "Technical design and engineering",
      "Environmental impact assessments",
      "Permitting and licensing",
      "Financial structuring for institutional capital",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "We believe in proactive and transparent engagement with all stakeholders, building trust and ensuring alignment throughout the project lifecycle.",
    details: [
      "Community consultation and outreach",
      "Government and municipal relations",
      "Off-taker negotiations",
      "Investor and financier communications",
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
    title: "Financial Close & Delivery",
    description: "We manage projects through financial close and into construction delivery, ensuring they are executed on time, on budget, and to the highest quality standards.",
    details: [
      "Financial close coordination",
      "EPC contractor management",
      "Quality assurance and control",
      "Schedule and budget oversight",
    ],
  },
  {
    icon: Settings,
    title: "Long-Term Ownership",
    description: "Our developer-owner mindset extends beyond project completion. We retain long-term value while ensuring optimal performance throughout the asset's lifecycle.",
    details: [
      "Performance monitoring and optimization",
      "Operations and maintenance oversight",
      "Revenue and asset management",
      "Measurable ESG outcome delivery",
    ],
  },
];

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Our Development Focus"
        description="Blacklyon Power Holdings operates with a developer-owner mindset, managing projects from origination through financial close and into delivery. Execution-first discipline, bankability focus."
        keywords="renewable energy development, project origination, bankable assets, developer-owner, energy infrastructure, South Africa renewable projects"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Development Focus
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Our Development Philosophy
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We operate with a developer-owner mindset, managing projects from origination through financial close and into delivery. Execution-first discipline drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              The Development Lifecycle
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              From origination to long-term ownership — a disciplined, end-to-end approach to renewable energy development.
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

      {/* Why BPH Differentiators */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Why BPH
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Ambition Combined with Realism
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                BPH combines ambition with realism. We understand where we are starting — and we are uncompromising about where we intend to go.
              </p>
              <div className="mt-8 p-6 bg-background rounded-md">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Differentiators</h4>
                <ul className="space-y-3">
                  {[
                    "Execution-first discipline — fundamentals before scale",
                    "Bankability focus — projects structured for institutional investment",
                    "Credible partnerships — collaboration with proven EPC and technology providers",
                    "Long-term alignment — patient capital, durable assets",
                    "South African-rooted, regional outlook — built in South Africa, designed for Southern Africa",
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
                    {["Origination", "Development", "Financial Close", "Ownership"].map((phase, index) => (
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
                        <span className="text-sm text-muted-foreground w-28">{phase}</span>
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
              Explore Our Project Focus
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Learn about the types of projects we develop and the markets we serve.
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
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
