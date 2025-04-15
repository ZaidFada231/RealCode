import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-100/80 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border border-gray-200 rounded-2xl">
          <CardContent className="p-10 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Ready to build your next project?
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Whether it’s a sleek portfolio, a landing page, or a full-scale
                site — let’s craft something fast, modern, and built to last.
              </p>
            </div>

            <form
              action="https://formsubmit.co/zaid.fada@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Replace with your email above ↑ */}

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me what you need..."
                required
                className="border border-gray-300 rounded-lg p-3 w-full"
              ></textarea>

              <Button size="lg" className="w-full sm:w-auto" type="submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
