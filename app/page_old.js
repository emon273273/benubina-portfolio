import Link from 'next/link';

export const metadata = {
  title: "Home",
  description: "Transform your business with innovative software solutions. We build custom web applications, mobile apps, and enterprise software.",
};

export default function Home() {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' },
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate and enhance your business processes.',
    },
  ];

  const testimonials = [
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
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="badge badge-primary badge-lg">🚀 Leading Software Agency</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="text-primary"> Vision </span>
              Into Reality
            </h1>
            <p className="text-xl text-base-content/70">
              We build innovative software solutions that drive business growth. From web applications to mobile apps, we turn your ideas into powerful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
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
            <div className="bg-primary/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-9xl text-center animate-float">💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            {stats.map((stat, index) => (
              <div key={index} className="stat place-items-center">
                <div className="stat-value text-primary">{stat.number}</div>
                <div className="stat-title">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-base-content/70">
              Comprehensive software solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="card-title text-2xl">{service.title}</h3>
                  <p className="text-base-content/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Benubina?</h2>
            <p className="text-xl text-base-content/70">
              We deliver excellence in every project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
                  <p className="text-base-content/70">
                    We use cutting-edge technologies to build future-ready applications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-base-content/70">
                    Agile methodology ensures quick turnaround without compromising quality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Result-Oriented</h3>
                  <p className="text-base-content/70">
                    We focus on delivering measurable business outcomes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-base-content/70">
                    Our team provides ongoing support and maintenance for your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-9xl text-center">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-base-content/70">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="text-6xl mb-4">{testimonial.avatar}</div>
                  <p className="text-base-content/70 italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90">
            Let's discuss how we can help transform your business with innovative software solutions.
          </p>
          <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
