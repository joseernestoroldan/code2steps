'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Smartphone, Globe, PenTool } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

type ServiceItemProps = { 
  title: string
  description: string
  icon:  LucideIcon
}

const services = [
  {
    title: 'Graphic Design',
    description: 'Elevate your brand with stunning visuals. Our expert designers create eye-catching logos, marketing materials, and brand identities that leave a lasting impression.',
    icon: PenTool,
  },
  {
    title: 'Mobile Apps',
    description: 'Transform your ideas into powerful mobile experiences. We develop intuitive, high-performance apps for iOS and Android that engage and delight users.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description: 'Build your digital presence with cutting-edge web solutions. Our team crafts responsive, fast-loading websites and web applications tailored to your needs.',
    icon: Globe,
  },
]

const ServiceItem = ({ title, description, icon: Icon }: ServiceItemProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <button className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  )
}


export default function ServiceSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

