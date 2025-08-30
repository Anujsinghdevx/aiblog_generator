import Header from "@/components/Header";
import Link from "next/link";
import { Edit, Search, Settings } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-indigo-100 to-purple-50 min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
        {/* Hero Section */}
        <div className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-wide text-center">
          Welcome to AI Blog
        </div>
        <div className="text-lg sm:text-xl text-gray-600 opacity-90 text-center max-w-3xl">
          Generate high-quality Markdown posts effortlessly with AI, preview them, and optimize for SEO— all in one place!
        </div>

        {/* Key Features / USPs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Edit className="text-indigo-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Easy Post Creation</h3>
            <p className="text-gray-600 text-center">Create beautiful blog posts with AI-generated content in minutes.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Search className="text-purple-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Instant SEO Optimization</h3>
            <p className="text-gray-600 text-center">Automatically optimize your posts for search engines and enhance visibility.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Settings className="text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Customizable Features</h3>
            <p className="text-gray-600 text-center">Adjust settings and personalize your blog posts for a unique touch.</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <Link
            href="/editor"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
          >
            Start Writing Now
          </Link>
        </div>
      </main>
    </>
  );
}
