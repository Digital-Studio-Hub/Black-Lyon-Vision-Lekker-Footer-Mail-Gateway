import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Black Lyon Power's privacy policy explaining how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, POPIA compliance, Black Lyon Power"
      />
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              Black Lyon Power ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways:
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Data</h3>
            <p>
              When you contact us through our website, we may collect personally identifiable information, such as your name, email address, organisation, and any other information you voluntarily provide.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Usage Data</h3>
            <p>
              We may automatically collect certain information when you visit our website, including your IP address, browser type, operating system, access times, and the pages you have viewed.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We may use the information we collect about you for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To respond to your enquiries and provide customer support</li>
              <li>To send you information about our services and projects</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and interests</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p>
              Under the Protection of Personal Information Act (POPIA), you have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at info@blacklyonpower.co.za.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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
