'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Simulate form submission
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                message: '',
            });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            content: 'hello@benubina.com',
            link: 'mailto:hello@benubina.com',
        },
        {
            icon: '📞',
            title: 'Phone',
            content: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: '📍',
            title: 'Office',
            content: '123 Tech Street, Silicon Valley, CA 94025',
            link: '#',
        },
        {
            icon: '⏰',
            title: 'Business Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
            link: '#',
        },
    ];

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Cloud Solutions',
        'Consulting',
        'Other',
    ];

    const budgets = [
        'Under $10K',
        '$10K - $25K',
        '$25K - $50K',
        '$50K - $100K',
        'Over $100K',
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-primary-100/50 via-transparent to-secondary-100/50 dark:from-primary-900/20 dark:via-transparent dark:to-secondary-900/20">
                <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100">
                        Get In <span className="text-primary-600 dark:text-primary-500">Touch</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                className="card card-hover shadow-xl text-center"
                            >
                                <div className="card-body items-center">
                                    <div className="text-5xl sm:text-6xl mb-3">{info.icon}</div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{info.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{info.content}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="card bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title text-3xl mb-6">Send Us a Message</h2>

                                {status.message && (
                                    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'} mb-6`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{status.message}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name *</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Email *</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Phone</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 123-4567"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Company</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company Name"
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Service Needed *</span>
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="select select-bordered w-full"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Budget Range</span>
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="select select-bordered w-full"
                                            >
                                                <option value="">Select budget</option>
                                                {budgets.map((budget) => (
                                                    <option key={budget} value={budget}>
                                                        {budget}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Project Details *</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="textarea textarea-bordered h-32"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full btn-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="loading loading-spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-8">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-2xl mb-4">Why Contact Us?</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="text-3xl">✨</div>
                                            <div>
                                                <h4 className="font-bold mb-1">Free Consultation</h4>
                                                <p className="text-base-content/70">
                                                    Get expert advice and project estimates at no cost.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-3xl">⚡</div>
                                            <div>
                                                <h4 className="font-bold mb-1">Quick Response</h4>
                                                <p className="text-base-content/70">
                                                    We respond to all inquiries within 24 hours.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-3xl">🤝</div>
                                            <div>
                                                <h4 className="font-bold mb-1">No Obligation</h4>
                                                <p className="text-base-content/70">
                                                    Discuss your project with no commitment required.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-3xl">🎯</div>
                                            <div>
                                                <h4 className="font-bold mb-1">Tailored Solutions</h4>
                                                <p className="text-base-content/70">
                                                    Custom strategies designed for your specific needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-2xl mb-4">Office Location</h3>
                                    <div className="aspect-video bg-base-300 rounded-lg flex items-center justify-center mb-4">
                                        <div className="text-center">
                                            <div className="text-6xl mb-2">🗺️</div>
                                            <p className="text-base-content/70">Map View</p>
                                        </div>
                                    </div>
                                    <p className="text-base-content/70">
                                        <strong>Benubina Headquarters</strong><br />
                                        123 Tech Street<br />
                                        Silicon Valley, CA 94025<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-primary text-primary-content shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-2xl mb-2">Prefer a Call?</h3>
                                    <p className="opacity-90 mb-4">
                                        Schedule a video call to discuss your project in detail.
                                    </p>
                                    <a href="tel:+15551234567" className="btn bg-white text-primary hover:bg-gray-100">
                                        📞 Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-base-content/70">
                            Quick answers to common questions
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="collapse collapse-plus bg-base-100 shadow-lg">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                What is your typical project timeline?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/70">
                                    Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the consultation phase.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-100 shadow-lg">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer ongoing support and maintenance?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/70">
                                    Yes! We offer comprehensive support and maintenance packages to ensure your software continues to run smoothly. This includes bug fixes, updates, security patches, and feature enhancements.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-100 shadow-lg">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                What is your development process?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/70">
                                    We follow an agile methodology with regular sprints and client check-ins. The process includes: Discovery & Planning, Design, Development, Testing, Deployment, and Ongoing Support.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-100 shadow-lg">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-xl font-medium">
                                How much does a typical project cost?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/70">
                                    Costs vary significantly based on project requirements. Simple projects start around $10K, while complex enterprise solutions can exceed $100K. We provide detailed quotes after understanding your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-primary to-secondary text-primary-content">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Let's Build Something Great Together
                    </h2>
                    <p className="text-xl opacity-90">
                        Join 50+ satisfied clients who have transformed their businesses with our solutions.
                    </p>
                    <Link href="/portfolio" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                        View Our Work
                    </Link>
                </div>
            </section>
        </div>
    );
}
