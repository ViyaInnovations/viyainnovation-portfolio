import { useEffect, useState } from "react";

export default function Services() {
  // const services = [
  //   {
  //     images: [
  //       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  //       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  //     ],
  //     title: "Advertising",
  //     description:
  //       "Strategic advertising campaigns that capture attention and drive conversions across all platforms",
  //     color: "from-orange-500 to-red-500",
  //   },
  //   {
  //     images: [
  //       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  //       "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  //     ],
  //     title: "Web Development",
  //     description:
  //       "Custom websites and web applications built with cutting-edge technologies for optimal performance",
  //     color: "from-blue-500 to-cyan-500",
  //   },
  //   {
  //     images: [
  //       "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
  //       "https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=800&q=80",
  //     ],
  //     title: "Graphic Designing",
  //     description:
  //       "Creative visual designs that communicate your brand message effectively and beautifully",
  //     color: "from-pink-500 to-purple-500",
  //   },
  // ];

  const services = [
  {
    images: [
      "https://img.freepik.com/premium-psd/digital-marketing-website-template-dark-mode_294843-20.jpg",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Advertising",
    description:
      "Strategic advertising campaigns that capture attention and drive conversions across all platforms",
    color: "from-orange-500 to-red-500",
  },

  {
    images: [
      "https://s3-alpha.figma.com/hub/file/4893892760/4a92437d-3e4e-4d15-9bab-225cfe73fa1a-cover.png",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance",
    color: "from-blue-500 to-cyan-500",
  },

  {
    images: [
      "https://thumbs.dreamstime.com/b/digital-data-flow-glowing-financial-charts-cyber-space-digital-abstract-background-blue-waves-futuristic-elements-405167950.jpg",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Graphic Designing",
    description:
      "Creative visual designs that communicate your brand message effectively and beautifully",
    color: "from-pink-500 to-purple-500",
  },

  {
    images: [
      "https://cdn.dribbble.com/userupload/11218619/file/original-594fc51e6c61861324a429b4901d0189.jpg?resize=400x0",
      "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-futuristic-hologram-city-a-3d-motion-graphic-depicting-digital-urban-design-image_3643533.jpg"
    ],
    title: "Motion Graphics",
    description:
      "Dynamic animated graphics and visual effects that bring your content to life",
    color: "from-green-500 to-teal-500",
  },

  {
    images: [
      "https://cdn.dribbble.com/userupload/14032309/file/original-8d71dd6761121365e9fca7fcc3877388.png?format=webp&resize=400x300&vertical=center",
      "https://t3.ftcdn.net/jpg/06/60/37/58/360_F_660375865_VrtySN7iYz5zogcXF3xIIBtPUy2HnwIR.jpg"
    ],
    title: "Events",
    description:
      "End-to-end event management and execution that creates memorable experiences",
    color: "from-yellow-500 to-orange-500",
  },

  {
    images: [
      "https://as1.ftcdn.net/jpg/02/44/34/16/1000_F_244341639_Yi3XZnQXHkY6V33TQlK3DiebfO7TQ9Ao.jpg",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Social Media Marketing",
    description:
      "Comprehensive social media strategies that build engagement and grow your online presence",
    color: "from-blue-500 to-indigo-500",
  },

  {
    images: [
      "https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-photography-studio-with-professional-lighting-equipment-in-stunning-3d-render-image_3677638.jpg",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Photography",
    description:
      "Professional photography services that capture stunning visuals for your brand",
    color: "from-gray-500 to-slate-500",
  },

  {
    images: [
      "https://thumbs.dreamstime.com/b/branding-dark-digital-background-words-blue-color-36644417.jpg",
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Branding",
    description:
      "Complete brand identity development that makes your business stand out in the market",
    color: "from-red-500 to-pink-500",
  },

  {
    images: [
      "https://png.pngtree.com/thumb_back/fh260/background/20240718/pngtree-video-marketing-advertising-businesss-internet-network-technology-concept-picture-image_16018718.jpg",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Video Advertising",
    description:
      "Compelling video ads that tell your story and drive action across platforms",
    color: "from-purple-500 to-pink-500",
  },

  {
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpLXAcHmuCeaU-6BehjStYwTKfz0i-zoMrw&s",
      "https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    ],
    title: "SEO",
    description:
      "Search engine optimization strategies that improve rankings and increase organic traffic",
    color: "from-green-600 to-emerald-500",
  },

  {
    images: [
      "https://thumbs.dreamstime.com/b/network-business-people-symbolizing-human-connections-digital-environment-background-dark-blue-orange-dots-389869930.jpg",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Campaigns",
    description:
      "Integrated marketing campaigns designed to achieve your business objectives",
    color: "from-cyan-500 to-blue-500",
  },
];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions tailored to elevate your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % service.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [service.images.length]);

  return (
    <div
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative overflow-hidden rounded-xl h-48 mb-6">
        {service.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={service.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === current ? "opacity-100 scale-105" : "opacity-0 scale-95"
            }`}
          />
        ))}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {service.images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">{service.description}</p>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button
          className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:underline`}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}
