import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = 'About Us - Benubina | Software Development Agency'
    }, [])

    const values = [
        {
            icon: '🎯',
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and creative thinking to deliver future-ready solutions.',
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work closely with our clients as partners to understand and achieve their goals.',
        },
        {
            icon: '⚡',
            title: 'Excellence',
            description: 'We maintain the highest standards in every project, ensuring quality and reliability.',
        },
        {
            icon: '🌱',
            title: 'Growth',
            description: 'We believe in continuous learning and improvement for both our team and our clients.',
        },
    ]

    const milestones = [
        { year: '2014', title: 'Founded', description: 'Started with a vision to transform businesses through technology' },
        { year: '2016', title: 'First 50 Projects', description: 'Reached a major milestone serving diverse clients' },
        { year: '2018', title: 'Team Expansion', description: 'Grew to a team of 15+ talented professionals' },
        { year: '2020', title: 'International Reach', description: 'Expanded services to clients across 10+ countries' },
        { year: '2023', title: 'Industry Recognition', description: 'Awarded Best Software Agency by TechAwards' },
        { year: '2024', title: 'Continued Growth', description: 'Now serving 50+ active clients with 25+ team members' },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-primary-100/50 via-transparent to-secondary-100/50 dark:from-primary-900/20 dark:via-transparent dark:to-secondary-900/20">
                <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100">
                        About <span className="text-primary-600 dark:text-primary-500">Benubina</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We're a passionate team of software engineers, designers, and strategists dedicated to building exceptional digital experiences.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="card bg-primary-600 dark:bg-primary-700 text-white shadow-xl">
                            <div className="card-body">
                                <div className="text-5xl sm:text-6xl mb-4">🎯</div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-base sm:text-lg opacity-90">
                                    To empower businesses with innovative software solutions that drive growth, efficiency, and digital transformation. We strive to be the trusted technology partner that turns visionary ideas into reality.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-secondary-600 dark:bg-secondary-700 text-white shadow-xl">
                            <div className="card-body">
                                <div className="text-5xl sm:text-6xl mb-4">🚀</div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-base sm:text-lg opacity-90">
                                    To become a global leader in software development, recognized for our exceptional quality, innovation, and client success. We envision a future where technology seamlessly enhances every aspect of business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Story</h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                            A decade of innovation and growth
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="card shadow-xl">
                            <div className="card-body">
                                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Founded in 2014, Benubina began with a simple yet powerful vision: to help businesses harness the power of technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service software development agency.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Over the years, we've had the privilege of working with startups, SMEs, and enterprise clients across various industries. Each project has taught us valuable lessons and reinforced our commitment to excellence, innovation, and client satisfaction.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Today, we're proud to be a trusted partner for businesses looking to innovate and grow through technology. Our team has expanded, our expertise has deepened, but our core values and dedication to our clients remain unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Core Values</h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card card-hover shadow-xl">
                                <div className="card-body items-center text-center">
                                    <div className="text-6xl sm:text-7xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Journey</h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                            Milestones that shaped our story
                        </p>
                    </div>
                    <div className="space-y-6 sm:space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                                <div className="badge badge-primary badge-lg text-lg sm:text-xl font-bold px-4 sm:px-6 py-3 sm:py-4 min-w-[80px] flex-shrink-0">
                                    {milestone.year}
                                </div>
                                <div className="flex-1 card shadow-lg w-full">
                                    <div className="card-body">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{milestone.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Benubina?</h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                            What sets us apart from the rest
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        <div className="card shadow-xl">
                            <div className="card-body">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">🏆 Proven Track Record</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    With over 150 successful projects delivered, we have the experience and expertise to handle projects of any complexity.
                                </p>
                            </div>
                        </div>
                        <div className="card shadow-xl">
                            <div className="card-body">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">👥 Expert Team</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Our team consists of highly skilled professionals who are passionate about technology and committed to your success.
                                </p>
                            </div>
                        </div>
                        <div className="card shadow-xl">
                            <div className="card-body">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">⏱️ On-Time Delivery</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We understand the importance of deadlines and consistently deliver projects on time without compromising quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Ready to Work Together?
                    </h2>
                    <p className="text-lg sm:text-xl opacity-90">
                        Let's discuss how we can help bring your vision to life.
                    </p>
                    <Link to="/contact" className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 inline-flex">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
