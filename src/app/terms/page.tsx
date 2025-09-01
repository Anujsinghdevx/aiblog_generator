import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | AI Blog",
  description: "The rules and conditions for using AI Blog.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-indigo-100 to-purple-50">
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-4xl font-semibold text-gray-900">Terms of Service</h1>
          <p className="mt-3 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of terms</h2>
              <p className="mt-2">
                By using AI Blog, you agree to these Terms of Service. If you do not agree, please
                discontinue use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">2. Use of the service</h2>
              <p className="mt-2">
                You may use AI Blog for lawful purposes only. You retain ownership of your content,
                but grant us permission to process it for generation, editing, and SEO optimization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">3. Accounts</h2>
              <p className="mt-2">
                You are responsible for maintaining the confidentiality of your login credentials
                and any activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">4. Limitations</h2>
              <p className="mt-2">
                We provide AI Blog “as is” without warranties of any kind. We are not liable for
                damages resulting from use, misuse, or inability to use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">5. Termination</h2>
              <p className="mt-2">
                We may suspend or terminate accounts that violate these Terms, abuse the platform,
                or engage in unlawful activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">6. Changes</h2>
              <p className="mt-2">
                These Terms may be updated from time to time. Continued use of AI Blog after changes
                indicates acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">7. Contact</h2>
              <p className="mt-2">
                For questions, reach us at{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-indigo-700 underline underline-offset-2"
                >
                  hello@example.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
