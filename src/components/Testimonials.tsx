import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Finn Walker",
    role: "Founder, Heron Africa",
    quote:
      "I'm not tech savvy at all, but Zaid walked me through every step of the deployment process and implemented my website perfectly. I couldn't be happier with the finished result, which looks like it had a team of full-time developers building it. Zaid accomadated all of my requests, and completed the project well ahead of schedule. I couldn't recommend him more.",
  },
  {
    name: "Jacob Porter Smith",
    role: "Digital Creator",
    quote:
      "Zaid was incredible to work with. I came in without a clear design in mind, but he listened closely, helped shape my vision, and turned it into a stunning portfolio site — all in no time. The final product exceeded my expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white/80 text-gray-900 py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <Card className="p-8 shadow-xl border border-gray-200 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We build more than just websites — we build trust, partnerships, and
            exceptional results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="h-full transition-all duration-300 hover:scale-[1.01] hover:shadow-blue-500"
              >
                <CardContent className="p-6 space-y-4 text-left">
                  <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
