import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import ContactForm from '../components/ContactForm';

export default function Join() {
    const steps = [
        {
            number: '01',
            title: 'Connect With Us',
            description: 'Reach out via phone, email, or visit one of our offices to schedule an initial consultation.',
        },
        {
            number: '02',
            title: 'Discovery Session',
            description: 'Meet with our team to discuss your goals, learn about our programs, and determine if we\'re the right fit.',
        },
        {
            number: '03',
            title: 'Begin Your Journey',
            description: 'Complete enrollment and gain immediate access to our community, training programs, and mentorship.',
        },
    ];

    const benefits = [
        'Comprehensive business development training',
        'One-on-one strategic mentorship',
        'Access to elite professional network',
        'Proven frameworks and methodologies',
        'Regular skill development workshops',
        '24/7 community support',
        'Performance tracking and analytics',
        'Lifetime access to resources',
    ];

    return (
        <>
            {/* Hero */}
            <section className="section-container pt-32 pb-16 bg-gradient-to-b from-dark-lighter to-dark">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.03em' }}>
                        Start Your Journey
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Join an elite community of business leaders committed to sustainable growth, strategic excellence, and long-term success.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="group">
                            Get Started Today
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* Why Join */}
            <section className="section-container">
                <SectionHeading
                    subtitle="Why Join Us"
                    title="Transform Your Business Trajectory"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <Icon icon={Shield} size={32} className="mb-4" />
                        <h3 className="text-xl font-bold text-accent mb-3">Proven Excellence</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Battle-tested frameworks and methodologies with documented success across diverse markets.
                        </p>
                    </Card>
                    <Card delay={0.1}>
                        <Icon icon={Users} size={32} className="mb-4" />
                        <h3 className="text-xl font-bold text-accent mb-3">Elite Network</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connect with 1000+ high-performing professionals and industry leaders.
                        </p>
                    </Card>
                    <Card delay={0.2}>
                        <Icon icon={TrendingUp} size={32} className="mb-4" />
                        <h3 className="text-xl font-bold text-accent mb-3">Sustainable Growth</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Build long-term success through strategic planning and continuous evolution.
                        </p>
                    </Card>
                </div>

                <Card className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold gradient-text mb-6">What You'll Gain</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start"
                            >
                                <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-300">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* How to Join */}
            <section className="section-container bg-dark-lighter">
                <SectionHeading
                    subtitle="How It Works"
                    title="Three Simple Steps"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <Card key={index} delay={index * 0.1}>
                            <div className="text-5xl font-black text-accent/20 mb-4">{step.number}</div>
                            <h3 className="text-xl font-bold text-accent mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <Card className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Apply for Membership
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Fill out the form below to express your interest. Our team will review your application and contact you to schedule a discovery session.
                        </p>

                        <div className="text-left">
                            <ContactForm />
                        </div>
                    </Card>
                </div>
            </section>

            {/* Commitment */}
            <section className="section-container bg-dark-lighter">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                            Our Commitment to You
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            When you join Achievers Club, you're not just enrolling in a program you're becoming part of a community dedicated to your long-term success.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We're committed to providing transparent guidance, proven strategies, and unwavering support as you build your business and achieve your goals. Your success is our success.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
