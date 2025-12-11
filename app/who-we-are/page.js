'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function WhoWeAre() {
    const team = [
        {
            name: 'Alex Thompson',
            role: 'CEO & Founder',
            avatar: '👨‍💼',
            bio: '15+ years of experience in software development and business strategy.',
        },
        {
            name: 'Sarah Martinez',
            role: 'CTO',
            avatar: '👩‍💻',
            bio: 'Expert in cloud architecture and modern development practices.',
        },
        {
            name: 'David Kim',
            role: 'Lead Designer',
            avatar: '👨‍🎨',
            bio: 'Passionate about creating beautiful and intuitive user experiences.',
        },
        {
            name: 'Emily Chen',
            role: 'Project Manager',
            avatar: '👩‍💼',
            bio: 'Ensures projects are delivered on time with exceptional quality.',
        },
        {
            name: 'Michael Brown',
            role: 'Senior Developer',
            avatar: '👨‍💻',
            bio: 'Full-stack expert specializing in scalable web applications.',
        },
        {
            name: 'Lisa Anderson',
            role: 'UX Researcher',
            avatar: '👩‍🔬',
            bio: 'Data-driven approach to understanding and improving user experiences.',
        },
    ];

    const departments = [
        {
            icon: '💻',
            title: 'Development Team',
            description: 'Our developers are experts in modern technologies and best practices, building robust and scalable solutions.',
            members: 12,
        },
        {
            icon: '🎨',
            title: 'Design Team',
            description: 'Creative designers who craft beautiful, intuitive interfaces that users love.',
            members: 5,
        },
        {
            icon: '📊',
            title: 'Project Management',
            description: 'Dedicated project managers ensuring smooth execution and timely delivery.',
            members: 4,
        },
        {
            icon: '🔒',
            title: 'Quality Assurance',
            description: 'Rigorous testing and quality control to ensure flawless products.',
            members: 4,
        },
    ];

    const culture = [
        {
            title: 'Remote-First',
            description: 'We embrace flexible work arrangements, allowing our team to work from anywhere.',
            icon: '🌍',
        },
        {
            title: 'Continuous Learning',
            description: 'We invest in our team\'s growth through training, conferences, and learning resources.',
            icon: '📚',
        },
        {
            title: 'Work-Life Balance',
            description: 'We believe in sustainable productivity and respect personal time.',
            icon: '⚖️',
        },
        {
            title: 'Collaborative Environment',
            description: 'Open communication and teamwork are at the heart of everything we do.',
            icon: '🤝',
        },
        {
            title: 'Innovation Encouraged',
            description: 'We support experimentation and creative problem-solving.',
            icon: '💡',
        },
        {
            title: 'Diversity & Inclusion',
            description: 'We celebrate diverse perspectives and create an inclusive workplace.',
            icon: '🌈',
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center relative pt-32 pb-16 px-6 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
                <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Meet the <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-2xl text-base-content/70 max-w-3xl mx-auto">
                        A diverse group of talented individuals united by a passion for creating exceptional software.
                    </p>
                </div>
            </section>

            {/* Team Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our People</h2>
                        <p className="text-xl text-base-content/70">
                            The driving force behind our success
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="card-body items-center text-center">
                                    <div className="text-8xl mb-4">{member.avatar}</div>
                                    <h3 className="card-title text-2xl">{member.name}</h3>
                                    <p className="text-primary font-semibold">{member.role}</p>
                                    <p className="text-base-content/70 mt-2">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments */}
            <section className="py-24 px-6 bg-base-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Departments</h2>
                        <p className="text-xl text-base-content/70">
                            Specialized teams working together seamlessly
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {departments.map((dept, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className="flex items-start gap-4">
                                        <div className="text-6xl">{dept.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="card-title text-2xl">{dept.title}</h3>
                                                <div className="badge badge-primary">{dept.members} Members</div>
                                            </div>
                                            <p className="text-base-content/70">{dept.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Culture</h2>
                        <p className="text-xl text-base-content/70">
                            What makes Benubina a great place to work
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {culture.map((item, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="card-body">
                                    <div className="text-6xl mb-4">{item.icon}</div>
                                    <h3 className="card-title text-xl mb-2">{item.title}</h3>
                                    <p className="text-base-content/70">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-6 bg-base-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">By the Numbers</h2>
                        <p className="text-xl text-base-content/70">
                            Our team's impact and growth
                        </p>
                    </div>
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                        <div className="stat place-items-center">
                            <div className="stat-title">Team Members</div>
                            <div className="stat-value text-primary">25+</div>
                            <div className="stat-desc">And growing!</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Countries Represented</div>
                            <div className="stat-value text-primary">8</div>
                            <div className="stat-desc">Diverse backgrounds</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Average Experience</div>
                            <div className="stat-value text-primary">7 yrs</div>
                            <div className="stat-desc">Industry expertise</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Employee Satisfaction</div>
                            <div className="stat-value text-primary">98%</div>
                            <div className="stat-desc">Happy team members</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                        <div className="card-body text-center space-y-6">
                            <div className="text-7xl">👋</div>
                            <h2 className="text-4xl font-bold">Want to Join Our Team?</h2>
                            <p className="text-xl text-base-content/70">
                                We're always looking for talented individuals who are passionate about technology and innovation.
                            </p>
                            <div className="card-actions justify-center">
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    View Open Positions
                                </Link>
                                <Link href="/contact" className="btn btn-outline btn-lg">
                                    Send Your CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-primary to-secondary text-primary-content">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Let's Create Something Amazing Together
                    </h2>
                    <p className="text-xl opacity-90">
                        Our team is ready to turn your vision into reality.
                    </p>
                    <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
