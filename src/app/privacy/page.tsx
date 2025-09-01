import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | AI Blog",
  description: "Our commitment to your privacy and data protection at AI Blog.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-indigo-100 to-purple-50">
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-4xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="mt-3 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">1. Information we collect</h2>
              <p className="mt-2">
                We collect minimal information needed to provide our service, such as your account
                details, usage logs, and content you create in the editor. We do not sell your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">2. How we use your data</h2>
              <p className="mt-2">
                Data is used strictly to operate and improve AI Blog, deliver AI-generated drafts,
                optimize SEO suggestions, and support you as a user.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">3. Data storage & security</h2>
              <p className="mt-2">
                Your content is stored securely in our database. We employ encryption and access
                controls to protect your information. However, no system is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">4. Third-party services</h2>
              <p className="mt-2">
                We may use analytics or AI providers to deliver functionality. These services only
                receive the data necessary for their operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">5. Your rights</h2>
              <p className="mt-2">
                You can request deletion of your data or export a copy by contacting us at{" "}
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
