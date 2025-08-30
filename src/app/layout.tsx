import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header"; // Import the Header component

export const metadata = {
  title: "AI Blog",
  description: "AI-powered blog platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-50 text-black">         
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
