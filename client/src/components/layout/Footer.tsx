import { Link } from "wouter";
import lekkerLogo from "@assets/lekkerlogo_1770062686308.png";
import verifiedBadge from "@assets/Badge_Level_1_1770062694049.png";
import mainLogo from "@assets/Main_Logo_1770065674512.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <img 
                src={mainLogo} 
                alt="Black Lyon Power Holdings" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the Energy Infrastructure Africa Needs. Developing utility-scale renewable energy projects across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/approach">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-approach">
                    Our Approach
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-projects">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-sustainability">
                    Sustainability
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/partnerships">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-partnerships">
                    Partnerships
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contact">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@blacklyonpower.co.za"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-email"
                >
                  info@blacklyonpower.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27663830269"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-phone"
                >
                  +27 66 383 0269
                </a>
              </li>
            </ul>
          </div>

          {/* Lekker Network Logo - Centered */}
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://lekker.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              data-testid="link-lekker-network"
            >
              <img
                src={lekkerLogo}
                alt="Lekker Network"
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
              />
              <span className="mt-2 text-xs text-muted-foreground">
                Powered by Lekker Network
              </span>
            </a>
          </div>

          {/* Verified Badge */}
          <div className="flex flex-col items-center lg:items-end justify-center">
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider text-center lg:text-right">
              Verified Badge
            </h4>
            <a
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              data-testid="link-verified-badge"
            >
              <img
                src={verifiedBadge}
                alt="Lekker Network Verified Badge"
                className="h-20 w-auto transition-transform group-hover:scale-105"
              />
              <span className="mt-2 text-xs text-muted-foreground">
                Lekker Network Verified
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Black Lyon Power Holdings. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-privacy">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-terms">
                  Terms of Use
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
