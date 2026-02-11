import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

export default function About() {
    const values = [
        {
            icon: Shield,
            title: 'Integrity',
            description: 'Unwavering commitment to ethical business practices and transparent operations.',
        },
        {
            icon: Target,
            title: 'Excellence',
            description: 'Relentless pursuit of the highest standards in everything we deliver.',
        },
        {
            icon: TrendingUp,
            title: 'Growth',
            description: 'Continuous evolution through innovation and strategic advancement.',
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Collaborative ecosystem where collective success drives individual achievement.',
        },
    ];

    return (
        <>
            <Helmet>
                <title>About Achievers Club - Our Mission & Vision</title>
                <meta name="description" content="Discover the Achievers Club mission: building Forever Achievers through strategic business development, elite networking, and proven methodologies." />
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
                        Building Forever Achievers
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        An elite community dedicated to sustainable business growth, strategic excellence, and long-term success.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <Icon icon={Target} size={40} className="mb-4" />
                        <h2 className="text-2xl font-bold text-accent mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To empower ambitious professionals with strategic frameworks, proven methodologies, and elite networking opportunities that drive sustainable business growth and long-term market leadership.
                        </p>
                    </Card>
                    <Card delay={0.1}>
                        <Icon icon={Lightbulb} size={40} className="mb-4" />
                        <h2 className="text-2xl font-bold text-accent mb-4">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To be the premier global ecosystem for business leaders, recognized for transforming ambitious professionals into industry-leading achievers through strategic excellence and collaborative innovation.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Forever Achievers Philosophy */}
            <section className="section-container bg-dark-lighter">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        subtitle="Our Philosophy"
                        title="The Forever Achiever Mindset"
                    />

                    <Card>
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A <span className="text-accent font-semibold">Forever Achiever</span> isn't defined by temporary wins or fleeting success. They are strategic thinkers who build sustainable systems, cultivate meaningful relationships, and create lasting impact.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We don't chase quick wins. We architect long-term success through proven frameworks, strategic positioning, and continuous evolution. Our members understand that true achievement is measured not in months, but in decades of sustained excellence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                <div className="text-center p-4 bg-dark/50 rounded-lg">
                                    <div className="text-3xl font-black gradient-text mb-2">Strategic</div>
                                    <p className="text-gray-400 text-sm">Long-term thinking</p>
                                </div>
                                <div className="text-center p-4 bg-dark/50 rounded-lg">
                                    <div className="text-3xl font-black gradient-text mb-2">Sustainable</div>
                                    <p className="text-gray-400 text-sm">Proven systems</p>
                                </div>
                                <div className="text-center p-4 bg-dark/50 rounded-lg">
                                    <div className="text-3xl font-black gradient-text mb-2">Successful</div>
                                    <p className="text-gray-400 text-sm">Measurable results</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-container">
                <SectionHeading
                    subtitle="What Drives Us"
                    title="Core Values"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <Card key={index} delay={index * 0.05}>
                            <Icon icon={value.icon} size={32} className="mb-4" />
                            <h3 className="text-xl font-bold text-accent mb-3">{value.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Leadership Approach */}
            <section className="section-container bg-dark-lighter">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Strategic Leadership Development
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Leadership isn't taught—it's cultivated through strategic guidance, real-world application, and continuous refinement.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our mentorship programs pair you with accomplished industry veterans who provide personalized strategic guidance, proven frameworks, and accountability systems that accelerate your growth trajectory.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>One-on-one strategic mentorship</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Proven business frameworks and methodologies</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Accountability systems and performance tracking</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
                            <Icon icon={Heart} size={40} className="mb-4" />
                            <h3 className="text-2xl font-bold gradient-text mb-4">
                                Community-Driven Excellence
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Success is amplified through collaboration. Our community ecosystem connects you with elite professionals who challenge, support, and elevate your business trajectory.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Active Network</span>
                                    <span className="text-accent font-bold">1000+ Leaders</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Global Reach</span>
                                    <span className="text-accent font-bold">3 Locations</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Success Rate</span>
                                    <span className="text-accent font-bold">98%</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                    <Card hover3d={false}>
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Ready to Join the Elite?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Become part of an exclusive community that's redefining business excellence and sustainable success.
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
