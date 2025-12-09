import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'Web Application',
            description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and customer analytics.',
            technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
            image: '🛒',
            stats: { users: '50K+', revenue: '$2M+', rating: '4.8/5' },
            challenge: 'Build a scalable platform to handle high traffic during sales',
            solution: 'Implemented microservices architecture with Redis caching',
        },
        {
            id: 2,
            title: 'HealthCare Management System',
            category: 'Enterprise Software',
            description: 'Complete hospital management system with patient records, appointment scheduling, billing, and telemedicine capabilities.',
            technologies: ['React', 'Python', 'Django', 'AWS'],
            image: '🏥',
            stats: { hospitals: '15', patients: '100K+', uptime: '99.9%' },
            challenge: 'Ensure HIPAA compliance and data security',
            solution: 'End-to-end encryption and comprehensive audit trails',
        },
        {
            id: 3,
            title: 'FinTech Mobile App',
            category: 'Mobile Application',
            description: 'Banking app with features including instant transfers, bill payments, investment tracking, and personal finance management.',
            technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
            image: '💰',
            stats: { downloads: '200K+', transactions: '1M+', rating: '4.7/5' },
            challenge: 'Create intuitive UX for complex financial operations',
            solution: 'Extensive user testing and iterative design improvements',
        },
        {
            id: 4,
            title: 'Learning Management System',
            category: 'EdTech Platform',
            description: 'Comprehensive LMS with video streaming, interactive quizzes, progress tracking, and AI-powered personalized learning paths.',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
            image: '📚',
            stats: { students: '75K+', courses: '500+', completion: '85%' },
            challenge: 'Handle large video content and concurrent users',
            solution: 'CDN integration and adaptive streaming technology',
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            category: 'Web Application',
            description: 'Property listing platform with advanced search filters, virtual tours, mortgage calculators, and agent matching.',
            technologies: ['Next.js', 'Express', 'PostgreSQL', 'Google Maps API'],
            image: '🏠',
            stats: { listings: '10K+', users: '30K+', matches: '5K+' },
            challenge: 'Implement accurate location-based search',
            solution: 'Integration with multiple mapping APIs and geolocation',
        },
        {
            id: 6,
            title: 'Social Media Analytics',
            category: 'SaaS Platform',
            description: 'Analytics dashboard for social media managers to track performance, schedule posts, and generate insights across multiple platforms.',
            technologies: ['React', 'Node.js', 'Redis', 'Chart.js'],
            image: '📊',
            stats: { users: '15K+', posts: '2M+', platforms: '8' },
            challenge: 'Process and visualize large amounts of data in real-time',
            solution: 'Implemented data streaming and efficient aggregation',
        },
        {
            id: 7,
            title: 'IoT Smart Home System',
            category: 'IoT Solution',
            description: 'Complete smart home ecosystem with device control, automation rules, energy monitoring, and voice assistant integration.',
            technologies: ['React Native', 'Python', 'MQTT', 'Raspberry Pi'],
            image: '🏡',
            stats: { homes: '5K+', devices: '50K+', energy: '30% saved' },
            challenge: 'Ensure reliable communication with diverse IoT devices',
            solution: 'Robust protocol implementation and fallback mechanisms',
        },
    ];

    const categories = ['All', 'Web Application', 'Mobile Application', 'Enterprise Software', 'SaaS Platform', 'IoT Solution', 'EdTech Platform'];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center relative pt-32 pb-16 px-6 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
                <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Our <span className="text-primary">Portfolio</span>
                    </h1>
                    <p className="text-2xl text-base-content/70 max-w-3xl mx-auto">
                        Showcasing our best work and the innovative solutions we've built for clients across various industries.
                    </p>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-16 bg-base-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">150+</div>
                            <div className="stat-title">Projects Completed</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">50+</div>
                            <div className="stat-title">Happy Clients</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">15+</div>
                            <div className="stat-title">Industries Served</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">98%</div>
                            <div className="stat-title">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300">
                                        <div className="card-body">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="text-8xl">{project.image}</div>
                                                <div className="badge badge-primary badge-lg">{project.category}</div>
                                            </div>
                                            <h3 className="card-title text-3xl mb-4">{project.title}</h3>
                                            <p className="text-base-content/70 text-lg mb-6">{project.description}</p>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-bold mb-2">🎯 Challenge</h4>
                                                    <p className="text-base-content/70">{project.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-2">💡 Solution</h4>
                                                    <p className="text-base-content/70">{project.solution}</p>
                                                </div>
                                            </div>

                                            <div className="divider"></div>

                                            <div>
                                                <h4 className="font-bold mb-3">Technologies Used</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, i) => (
                                                        <div key={i} className="badge badge-outline badge-lg">
                                                            {tech}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                                        <div className="card-body">
                                            <h4 className="text-2xl font-bold mb-6">Project Impact</h4>
                                            <div className="space-y-6">
                                                {Object.entries(project.stats).map(([key, value], i) => (
                                                    <div key={i} className="flex items-center justify-between">
                                                        <span className="text-lg capitalize text-base-content/70">
                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                        </span>
                                                        <span className="text-2xl font-bold text-primary">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="card-actions justify-end mt-6">
                                                <Link to="/contact" className="btn btn-primary">
                                                    Start Similar Project
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies We Use */}
            <section className="py-24 px-6 bg-base-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technologies We Master</h2>
                        <p className="text-xl text-base-content/70">
                            We stay current with the latest technologies to deliver cutting-edge solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'TypeScript', 'Vue.js', 'React Native', 'Firebase'].map((tech, index) => (
                            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="card-body items-center text-center p-6">
                                    <div className="text-4xl mb-2">💻</div>
                                    <p className="font-semibold">{tech}</p>
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
                        Ready to Build Your Project?
                    </h2>
                    <p className="text-xl opacity-90">
                        Let's discuss your requirements and create something amazing together.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                            Start Your Project
                        </Link>
                        <Link to="/about" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Portfolio
