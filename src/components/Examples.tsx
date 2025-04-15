import { Card } from "./ui/card";

const projects = [
  {
    name: "Heron Africa",
    url: "https://www.heron.africa/",
    img: "/heron-africa.jpg",
    description:
      "A hedge fund portfolio site built with animation and clarity in mind.",
  },
  {
    name: "Jacob Porter Smith",
    url: "https://www.jacobportersmith.com/",
    img: "/jacob-smith.jpg",
    description:
      "A sleek digital creator portfolio site focused on music and aesthetics.",
  },
  // {
  //   name: "Flood Watch",
  //   url: "https://www.floodwatch.io/",
  //   img: "/floodwatch.jpg",
  //   description:
  //     "An environmental tech platform delivering hyper-local flood data.",
  // },
];

export default function Examples() {
  return (
    <section
      id="example"
      className="bg-blue-100/80 text-gray-900 py-24 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Examples</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Real websites. Real performance. These are some of the digital
          experiences we have created.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300"
            >
              <Card className="overflow-hidden border border-gray-200 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-blue-500 h-full">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-left space-y-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
