import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
    ShoppingCart,
    Heart,
    Smartphone,
    BookOpen,
    Home,
    BarChart3,
    Wifi,
    Code,
    Database,
    Cloud,
    Smartphone as Mobile,
    Globe,
    Server,
    Zap,
    Users,
    TrendingUp,
    Star,
    Target,
    Lightbulb,
    ArrowRight,
    CheckCircle
} from 'lucide-react'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'Web Application',
            description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and customer analytics.',
            technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
            icon: ShoppingCart,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-blue-500 to-purple-600',
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
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-emerald-500 to-teal-600',
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
            icon: Smartphone,
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-orange-500 to-red-600',
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
            icon: BookOpen,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-indigo-500 to-blue-600',
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
            icon: Home,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-green-500 to-emerald-600',
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
            icon: BarChart3,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-purple-500 to-pink-600',
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
            icon: Wifi,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            color: 'from-cyan-500 to-blue-600',
            stats: { homes: '5K+', devices: '50K+', energy: '30% saved' },
            challenge: 'Ensure reliable communication with diverse IoT devices',
            solution: 'Robust protocol implementation and fallback mechanisms',
        },
    ];

    const categories = ['All', 'Web Application', 'Mobile Application', 'Enterprise Software', 'SaaS Platform', 'IoT Solution', 'EdTech Platform'];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Geometric Shapes */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-2000"></div>
                    <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse delay-500"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>

                    {/* Radial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-transparent"></div>
                </div>

                <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
                    {/* Icon with Animation */}
                    <div className="flex items-center justify-center mb-4 sm:mb-8 animate-fade-in">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 animate-pulse"></div>
                            <div className="relative p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-full backdrop-blur-sm shadow-2xl">
                                <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Main Title with Enhanced Typography */}
                    <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-lg font-semibold text-primary/80 uppercase tracking-wider animate-fade-in-up delay-100">
                            Showcasing Excellence
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight animate-fade-in-up delay-200">
                            <span className="block text-white">Our</span>
                            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </h1>
                    </div>

                    {/* Enhanced Description */}
                    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up delay-300 px-4 sm:px-0">
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                            Discover our most impactful projects and innovative solutions that have transformed businesses across various industries.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                            From cutting-edge web applications to enterprise software solutions, each project represents our commitment to excellence.
                        </p>
                    </div>

                    {/* Enhanced Stats with Better Design */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12 animate-fade-in-up delay-400 px-4 sm:px-0">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2">
                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl sm:text-3xl font-bold text-white">150+</span>
                            </div>
                            <p className="text-gray-300 font-medium text-sm sm:text-base">Projects Delivered</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2">
                                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl sm:text-3xl font-bold text-white">15+</span>
                            </div>
                            <p className="text-gray-300 font-medium text-sm sm:text-base">Industries Served</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group sm:col-span-1 col-span-1 sm:mx-0 mx-auto max-w-xs sm:max-w-none">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2">
                                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:scale-110 transition-transform" />
                                <span className="text-2xl sm:text-3xl font-bold text-white">98%</span>
                            </div>
                            <p className="text-gray-300 font-medium text-sm sm:text-base">Client Satisfaction</p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="pt-4 sm:pt-6 lg:pt-8 animate-fade-in-up delay-500">
                        <button className="group relative px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium text-xs sm:text-sm lg:text-base shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                                <span className="hidden sm:inline">Explore</span> Projects
                                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-20 bg-gradient-to-r from-base-200 to-base-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="card-body items-center text-center">
                                <div className="p-3 bg-primary/20 rounded-full mb-4">
                                    <CheckCircle className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                                <div className="text-base-content/70">Projects Completed</div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="card-body items-center text-center">
                                <div className="p-3 bg-secondary/20 rounded-full mb-4">
                                    <Users className="w-8 h-8 text-secondary" />
                                </div>
                                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                                <div className="text-base-content/70">Happy Clients</div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="card-body items-center text-center">
                                <div className="p-3 bg-accent/20 rounded-full mb-4">
                                    <Globe className="w-8 h-8 text-accent" />
                                </div>
                                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                                <div className="text-base-content/70">Industries Served</div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="card-body items-center text-center">
                                <div className="p-3 bg-success/20 rounded-full mb-4">
                                    <Star className="w-8 h-8 text-success" />
                                </div>
                                <div className="text-4xl font-bold text-success mb-2">98%</div>
                                <div className="text-base-content/70">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Explore our most impactful projects and see how we've helped businesses transform their digital presence
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden lg:block"></div>

                        <div className="space-y-20">
                            {projects.map((project, index) => {
                                const IconComponent = project.icon;
                                return (
                                    <div key={project.id} className="relative">
                                        {/* Timeline Node */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden lg:block">
                                            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            {/* Pulse Animation */}
                                            <div className="absolute inset-0 w-16 h-16 bg-primary rounded-full animate-ping opacity-20"></div>
                                        </div>

                                        <div
                                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}
                                        >
                                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                                <div className="group relative">
                                                    {/* Project Image */}
                                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                                        {/* Floating Icon */}
                                                        <div className="absolute top-6 left-6">
                                                            <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                                <IconComponent className="w-8 h-8 text-gray-800" />
                                                            </div>
                                                        </div>

                                                        {/* Category Badge */}
                                                        <div className="absolute top-6 right-6">
                                                            <div className="badge badge-primary badge-lg shadow-lg">
                                                                {project.category}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h3>
                                                        <p className="text-lg text-base-content/70 leading-relaxed">{project.description}</p>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-2 text-primary">
                                                                <Target className="w-5 h-5" />
                                                                <h4 className="font-bold">Challenge</h4>
                                                            </div>
                                                            <p className="text-base-content/70 text-sm leading-relaxed">{project.challenge}</p>
                                                        </div>
                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-2 text-secondary">
                                                                <Lightbulb className="w-5 h-5" />
                                                                <h4 className="font-bold">Solution</h4>
                                                            </div>
                                                            <p className="text-base-content/70 text-sm leading-relaxed">{project.solution}</p>
                                                        </div>
                                                    </div>

                                                    {/* Stats */}
                                                    <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-lg">
                                                        <div className="card-body p-6">
                                                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                                <TrendingUp className="w-5 h-5 text-primary" />
                                                                Project Impact
                                                            </h4>
                                                            <div className="grid grid-cols-3 gap-4">
                                                                {Object.entries(project.stats).map(([key, value], i) => (
                                                                    <div key={i} className="text-center">
                                                                        <div className="text-2xl font-bold text-primary">{value}</div>
                                                                        <div className="text-sm text-base-content/60 capitalize">
                                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                                            <Code className="w-5 h-5" />
                                                            Technologies Used
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.map((tech, i) => (
                                                                <div key={i} className="badge badge-outline badge-lg hover:badge-primary transition-colors">
                                                                    {tech}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="pt-4">
                                                        <Link to="/contact" className="btn btn-primary btn-sm md:btn-lg   pb-2 mb-2 group  ">
                                                            Start Similar Project
                                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies We Use */}
            <section className="py-24 px-6 bg-gradient-to-br from-base-200 via-base-300 to-base-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm">
                                <Zap className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technologies We Master</h2>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            We stay current with the latest technologies to deliver cutting-edge solutions that scale and perform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                        <Globe className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'Vue.js', 'TypeScript'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                                        <Server className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Python', 'Laravel', 'Django'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                        <Database className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Database</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                                        <Cloud className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Cloud & DevOps</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['AWS', 'Docker', 'Kubernetes', 'Azure'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                        <Mobile className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Mobile</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React Native', 'Flutter', 'Swift', 'Kotlin'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                                        <Zap className="w-6 h-6 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Tools & Services</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Firebase', 'Stripe', 'GraphQL', 'Socket.io'].map((tech, i) => (
                                        <span key={i} className="badge badge-outline hover:badge-primary transition-colors">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-primary via-secondary to-accent text-primary-content relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                            <Zap className="w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold">
                        Ready to Build Your Project?
                    </h2>
                    <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Let's discuss your requirements and create something amazing together. Your vision, our expertise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Link to="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl group min-w-[200px]">
                            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Start Your Project
                        </Link>
                        <Link to="/about" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 group min-w-[200px]">
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Learn More About Us
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-8 text-sm opacity-80">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Money Back Guarantee</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Portfolio
