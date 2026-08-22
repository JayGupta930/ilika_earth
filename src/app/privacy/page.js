import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Learn how Ilika Earth collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-gray-900 dark:bg-white dark:text-gray-900 mt-16">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        This Privacy Policy explains how Ilika Earth collects, uses, and safeguards the
        information you share with us when engaging with our services, website, and
        digital experiences.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-gray-700">
          We may collect personal details such as your name, email address, phone number,
          company affiliation, and any information provided through contact forms or
          service inquiries. Additionally, we gather anonymous usage data to improve our
          website performance and user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-gray-700">
          Your information enables us to respond to inquiries, deliver requested services,
          enhance our offerings, and share updates about new initiatives. We will never
          sell your personal data, and we only share information with trusted partners
          when necessary to fulfill your requests.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
        <p className="text-gray-700">
          We implement technical and organizational safeguards to protect your
          information against unauthorized access, loss, or misuse. While no online
          system is entirely secure, we continuously review and improve our practices to
          keep your data safe.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
        <p className="text-gray-700">
          You can request access to, correction of, or deletion of your personal data by
          contacting us. You may opt out of receiving non-essential communications at any
          time by following the unsubscribe instructions included with our messages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Updates to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy periodically to reflect changes in our
          practices or applicable laws. The revised policy will be posted on this page
          with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy or how we handle your data,
          please reach out at <a href="mailto:info@ilika.earth" className="text-green-600 dark:text-green-400 underline">info@ilika.earth</a>
        </p>
      </section>
    </main>
  );
}
