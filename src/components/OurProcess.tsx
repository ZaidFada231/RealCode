import { Card, CardContent } from "./ui/card";

export default function OurProcess() {
  const steps = [
    {
      step: "1",
      title: "Discovery Call",
      description:
        "We meet for 15–30 minutes to understand your vision, goals, and target audience. No tech jargon, just clarity.",
    },
    {
      step: "2",
      title: "Design & Build",
      description:
        "We build a modern, fast, mobile-first site using Astro, TypeScript, and Tailwind. We’ll show you progress as we go.",
    },
    {
      step: "3",
      title: "Launch Day",
      description:
        "Once you're happy, we launch your site and handle whatever you need.",
    },
    {
      step: "4",
      title: "Ongoing Care",
      description:
        "We’re here to support you after launch — for edits, updates, bug fixes, or even feature expansions.",
    },
  ];

  return (
    <section className="bg-white/80 text-gray-900 py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <Card className="p-8 shadow-xl border border-gray-200 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We keep things simple, transparent, and collaborative — here’s how
            it works:
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {steps.map((step, idx) => (
              <Card
                key={idx}
                className="border border-gray-200 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500"
              >
                <CardContent className="p-6 space-y-2 text-left">
                  <div className="text-primary text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
