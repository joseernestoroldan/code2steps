import { Smartphone, Globe, PenTool } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type ServiceItemProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services = [
  {
    title: "Diseño Grafico",
    description:
      "Eleve su marca con imágenes impactantes. Nuestros diseñadores expertos crean logotipos, materiales de marketing e identidades de marca llamativos que dejan una impresión duradera.",
    icon: PenTool,
  },
  {
    title: "Aplicaciones móviles",
    description:
      "Transforme sus ideas en experiencias móviles potentes. Desarrollamos aplicaciones intuitivas y de alto rendimiento para iOS y Android que cautivan y deleitan a los usuarios.",
    icon: Smartphone,
  },
  {
    title: "Desarrollo Web",
    description:
      "Cree su presencia digital con soluciones web de vanguardia. Nuestro equipo crea sitios web y aplicaciones web responsivos y de carga rápida adaptados a sus necesidades.",
    icon: Globe,
  },
];

const ServiceItem = ({ title, description, icon: Icon }: ServiceItemProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
      <div className="bg-gradient-to-r from-sky-900 to-emerald-400 text-primary-foreground rounded-full p-3 mb-4 ">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400">{title}</h3>
      <p className="text-sky-900 mb-4">{description}</p>
    </div>
  );
};

export default function ServiceSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-emerald-400 h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center pb-40 text-sky-900 tracking-widest animation-fadeIn">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animation-fadeIn">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
