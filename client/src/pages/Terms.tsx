import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use"
        description="Terms and conditions for using the Blacklyon Power Holdings website."
        keywords="terms of use, website terms, Blacklyon Power Holdings terms, legal"
      />
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-8">
            Terms of Use
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Blacklyon Power Holdings website ("the Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Use of Website</h2>
            <p>
              The Website is provided for informational purposes only. You may use the Website for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Use the Website in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the Website</li>
              <li>Use the Website to transmit any harmful code or malicious software</li>
              <li>Engage in any activity that interferes with or disrupts the Website</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              The Website and its entire contents, features, and functionality are owned by Blacklyon Power Holdings and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Disclaimer of Warranties</h2>
            <p>
              The Website is provided "as is" and "as available" without any warranties of any kind, either express or implied. Blacklyon Power Holdings does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Blacklyon Power Holdings shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Website.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and accept no responsibility for them.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website following the posting of changes constitutes acceptance of those changes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Email:</strong> info@blacklyonpower.co.za<br />
              <strong className="text-foreground">Phone:</strong> +27 66 383 0269<br />
              <strong className="text-foreground">Location:</strong> Cape Town, South Africa
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
