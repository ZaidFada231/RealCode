import { Card, CardContent } from "./ui/card";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Fully Custom Websites",
      description:
        "We build from scratch — no templates. You get a site that's as unique as your brand, fully responsive and built with clean HTML/CSS.",
      icon: "🛠️",
    },
    {
      title: "Performance First",
      description:
        "We use tools like Astro and Tailwind to ship fast, static websites that load in quick. Your SEO rankings will thank you.",
      icon: "⚡",
    },
    {
      title: "Backend Ready",
      description:
        "With Supabase and TypeScript, we can hook your website into databases, auth systems, dashboards, and more — no limits.",
      icon: "🔐",
    },
    {
      title: "Ongoing Support",
      description:
        "We're not a one-and-done shop. We offer maintenance, feature updates, and expert-level support whenever you need it.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-blue-100/80 text-gray-900 py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* <Card className="p-8 shadow-xl border border-gray-200 rounded-xl"> */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A full-stack solution for fast, beautiful, and functional websites —
            without the bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="border border-gray-200 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500 group"
            >
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="font-semibold text-xl">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* </Card> */}
      </div>
    </section>
  );
}
