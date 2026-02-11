import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Briefcase, Network, GraduationCap, TrendingUp, Users, Shield, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

export default function WhatWeDo() {
    const pillars = [
        {
            icon: Briefcase,
            title: 'Strategic Opportunity',
            description: 'Access exclusive business opportunities and strategic partnerships that accelerate growth and market positioning.',
        },
        {
            icon: GraduationCap,
            title: 'Elite Training',
            description: 'Master advanced frameworks, proven methodologies, and cutting-edge strategies from industry veterans.',
        },
        {
            icon: TrendingUp,
            title: 'Sustainable Growth',
            description: 'Build scalable systems and sustainable revenue streams through strategic planning and execution.',
        },
    ];

    const benefits = [
        'Comprehensive business development frameworks',
        'Advanced digital marketing strategies',
        'Elite networking and partnership opportunities',
        'One-on-one strategic mentorship',
        'Proven revenue generation systems',
        'Performance tracking and analytics',
        'Exclusive community access',
        'Continuous skill development programs',
    ];

    return (
        <>
            <Helmet>
                <title>What We Do - Achievers Club</title>
                <meta name="description" content="Discover how Achievers Club delivers strategic business growth through elite training, proven systems, and exclusive networking opportunities." />
            </Helmet>

            {/* Hero */}
            <section className="section-container pt-32 pb-16 bg-gradient-to-b from-dark-lighter to-dark">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.03em' }}>
                        Strategic Business Excellence
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We architect sustainable success through proven frameworks, elite mentorship, and strategic networking.
                    </p>
                </motion.div>
            </section>

            {/* Overview */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <Icon icon={Network} size={40} className="mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                            Digital & Network Marketing Excellence
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            We specialize in strategic business development through advanced digital marketing and elite network building. Our approach combines data-driven methodologies with proven relationship-building frameworks.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Unlike traditional programs, we focus on sustainable, long-term growth. We provide the strategic frameworks, elite connections, and proven systems that transform ambitious professionals into industry leaders.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="section-container bg-dark-lighter">
                <SectionHeading
                    subtitle="Our Approach"
                    title="Three Pillars of Success"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <Card key={index} delay={index * 0.05}>
                            <Icon icon={pillar.icon} size={36} className="mb-4" />
                            <h3 className="text-xl font-bold text-accent mb-3">{pillar.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Member Benefits */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Member Advantages
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Membership provides access to an exclusive ecosystem designed to accelerate your business trajectory and maximize your market impact.
                        </p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start text-gray-300"
                                >
                                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
                            <Icon icon={Shield} size={40} className="mb-4" />
                            <h3 className="text-2xl font-bold gradient-text mb-4">
                                Transparent & Ethical
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We operate with complete transparency. No inflated promises, no hidden agendas—just proven strategies, honest guidance, and measurable results.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-dark/50 rounded-lg">
                                    <h4 className="text-accent font-semibold mb-2">Realistic Expectations</h4>
                                    <p className="text-gray-400 text-sm">
                                        Success requires strategic effort, consistent execution, and time. We provide the frameworks—you provide the commitment.
                                    </p>
                                </div>
                                <div className="p-4 bg-dark/50 rounded-lg">
                                    <h4 className="text-accent font-semibold mb-2">Proven Track Record</h4>
                                    <p className="text-gray-400 text-sm">
                                        Our methodologies are battle-tested with documented success across diverse markets and industries.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-container bg-dark-lighter">
                <div className="max-w-4xl mx-auto text-center">
                    <Card hover3d={false}>
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Ready to Elevate Your Business?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join an elite community that's transforming business trajectories through strategic excellence.
                        </p>
                        <Link to="/join">
                            <Button size="lg">Join Achievers Club</Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </>
    );
}
