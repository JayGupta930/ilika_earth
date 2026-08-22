import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Understand the terms and conditions that govern your use of Ilika Earth's services.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-gray-900 dark:bg-white dark:text-gray-900 mt-16">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="mb-4 text-gray-700">
        These Terms of Service outline the rules and guidelines for using Ilika Earth's
        website, digital platforms, and related offerings. By accessing our services,
        you agree to comply with the terms described below.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Use of Our Services</h2>
        <p className="text-gray-700">
          You agree to use our services only for lawful purposes and in a manner that
          does not infringe upon the rights of others or disrupt availability. Unauthorized
          attempts to access systems, data, or accounts are strictly prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
        <p className="text-gray-700">
          All content, branding, and materials on our platforms are the property of Ilika
          Earth or our partners. You may not reproduce, distribute, or modify any portion
          without prior written consent, except where permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Service Availability</h2>
        <p className="text-gray-700">
          We strive to maintain reliable access to our services, but we cannot guarantee
          uninterrupted or error-free operation. We may update, suspend, or discontinue
          services when necessary for maintenance or improvements.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="text-gray-700">
          Ilika Earth is not liable for indirect, incidental, or consequential damages
          arising from the use or inability to use our services. Your use is at your own
          risk, and remedies are limited to the extent permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to These Terms</h2>
        <p className="text-gray-700">
          We may revise these Terms of Service periodically to reflect updates in our
          offerings or legal requirements. Continued use of our services after changes
          are posted constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          For questions about these terms, please contact us at <a href="mailto:info@ilika.earth" className="text-green-600 dark:text-green-400 underline">info@ilika.earth</a>
        </p>
      </section>
    </main>
  );
}
