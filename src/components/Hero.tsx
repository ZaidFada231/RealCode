import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-blue-100/80 text-gray-900 py-20 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Better Websites, <br />
            with <span className="text-blue-500">RealCode</span>.
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            No bloated page builders. No cookie-cutter templates. Just
            lightning-fast, handcrafted websites using Astro, Tailwind, and
            TypeScript — built for SEO and speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </a>
            <a href="#example">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Examples
              </Button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 relative group flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group-hover:rotate-2 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
            {/* Base Image */}
            <img
              src="/zaid.jpg"
              alt="Zaid Fada"
              className="rounded-full w-full h-full object-cover shadow-xl transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Hover Image */}
            <img
              src="/zaid_sunglasses.png"
              alt="Zaid Fada with sunglasses"
              className="absolute inset-0 rounded-full w-full h-full object-cover shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Hover-text + arrow */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-sm text-gray-700 text-left">
            <div className="font-medium mb-1 whitespace-nowrap">
              Your personal developer, Zaid
            </div>
            <svg
              className="mx-auto lg:mx-0 rotate-[-45deg]"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4b5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
