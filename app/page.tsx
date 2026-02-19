import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-surface text-charcoal">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary">
            Jayabaya Rent
          </h1>
          <p className="text-xl text-muted font-body">
            Phase 1: Project Setup & Foundation Complete
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-card text-left space-y-4">
          <h2 className="text-2xl font-bold">System Status</h2>
          <ul className="space-y-2 font-body text-muted">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Next.js 14 App Router
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Tailwind CSS v3 + Design System
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Google Fonts (Plus Jakarta Sans + Inter)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              20 Car Data Models
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              WhatsApp & Utility Handlers
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            View Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
