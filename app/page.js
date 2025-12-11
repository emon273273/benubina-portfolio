'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Globe, Smartphone, Palette, Cloud, Shield, Bot, Sparkles, Zap, Target, Handshake, Rocket } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  useEffect(() => {
    document.title = 'Home - Benubina | Software Development Agency'
  }, [])

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' },
  ]

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate and enhance your business processes.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },

    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Benubina transformed our vision into reality. Their expertise and dedication exceeded our expectations.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCo',
      content: 'Outstanding quality and professionalism. They delivered our project on time and within budget.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartupHub',
      content: 'The team at Benubina is incredibly talented. They turned our complex requirements into elegant solutions.',
      avatar: '👩‍🔬',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 dark:from-primary-900/20 dark:via-transparent dark:to-secondary-900/20 -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="badge badge-primary badge-lg"><Rocket className="inline w-5 h-5 mr-1" /> Leading Software Agency</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your
              <span className="text-primary-600 dark:text-primary-500"> Vision </span>
              Into Reality
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              We build innovative software solutions that drive business growth. From web applications to mobile apps, we turn your ideas into powerful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                <div className="text-9xl animate-float">
                  <img src="/images/hero/hero.jpg" alt="Software Development" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card card-body text-center p-6 sm:p-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Comprehensive software solutions tailored to your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover card-body p-6 sm:p-8 group"
              >
                <service.icon className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose Benubina?</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              We deliver excellence in every project
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 items-start">
                <Sparkles className="text-3xl sm:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We use cutting-edge technologies to build future-ready applications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Zap className="text-3xl sm:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Agile methodology ensures quick turnaround without compromising quality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Target className="text-3xl sm:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Result-Oriented</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We focus on delivering measurable business outcomes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Handshake className="text-3xl sm:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team provides ongoing support and maintenance for your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800/40 dark:to-secondary-800/40 flex items-center justify-center">
                  <img src="/images/hero/11127054.jpg" alt="Why Choose Us" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={35}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card card-body p-6 sm:p-8 h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                  <div className="text-5xl sm:text-6xl mb-4 opacity-80">{testimonial.avatar}</div>
                  <div className="text-4xl text-primary-500 mb-4">"</div>
                  <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="text-4xl text-primary-500 mb-4 self-end">"</div>
                  <div className="mt-auto border-t pt-4">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl opacity-90">
            Let's discuss how we can help transform your business with innovative software solutions.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
