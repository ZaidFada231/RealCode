import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export default function WhyUs() {
  return (
    <section className="bg-white/80 text-gray-900 py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 shadow-xl border border-gray-200 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Why Use{" "}
              <span className="text-blue-500 font-extrabold">RealCode</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Modern website builders like Squarespace and Wix might seem
              convenient — but they come with hidden costs: slow performance,
              poor SEO, and limited customization. We take a radically different
              approach using real code, modern tools, and lightning-fast
              infrastructure.
            </p>
          </div>

          <Tabs defaultValue="builders" className="w-full">
            <TabsList className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-center mb-8">
              <TabsTrigger value="builders" className="flex-1 text-base">
                Traditional Site Builders
              </TabsTrigger>
              <TabsTrigger value="implementary" className="flex-1 text-base">
                <span className="text-blue-500 font-bold">RealCode's</span>{" "}
                Approach
              </TabsTrigger>
            </TabsList>

            <TabsContent value="builders">
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <Card className="transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">
                      Slower Performance
                    </h3>
                    <p className="text-gray-600">
                      Wix and Squarespace websites are on average{" "}
                      <strong>2x slower</strong> than hand-coded static sites.
                    </p>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">SEO Limitations</h3>
                    <p className="text-gray-600">
                      Google's Core Web Vitals penalize bloated JS — a common
                      problem with no-code builders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="implementary">
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <Card className="transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Code-Based & Fast</h3>
                    <p className="text-gray-600">
                      We build sites using <strong>Astro</strong>, a static site
                      generator optimized for speed.
                    </p>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-500">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Superior SEO</h3>
                    <p className="text-gray-600">
                      Google rewards clean, fast HTML — exactly what we build
                      using real tools and lean architecture.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Tech Logos */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            {[
              {
                alt: "Astro",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
              },
              {
                alt: "TypeScript",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                alt: "Supabase",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
              },
              {
                alt: "HTML5",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                alt: "CSS3",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              },
              {
                alt: "Tailwind CSS",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
              },
            ].map((tech, i) => (
              <img
                key={i}
                src={tech.src}
                alt={tech.alt}
                className="h-12 w-auto transition-transform duration-300 hover:rotate-3 hover:scale-110"
              />
            ))}
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Every tool we use is optimized for performance, scalability, and SEO
            success.
          </p>
        </Card>
      </div>
    </section>
  );
}
