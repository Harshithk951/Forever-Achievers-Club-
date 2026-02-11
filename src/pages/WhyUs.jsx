import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, TrendingUp, Heart, Target } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

export default function WhyUs() {
    const differentiators = [
        {
            icon: Shield,
            title: 'Trust & Transparency',
            description: 'Complete operational transparency. No hidden fees, no inflated promises—just honest guidance and realistic expectations.',
        },
        {
            icon: Award,
            title: 'Proven Excellence',
            description: 'Learn from accomplished mentors with documented success and genuine investment in your growth trajectory.',
        },
        {
            icon: TrendingUp,
            title: 'Long-Term Focus',
            description: 'We build sustainable businesses, not temporary income. Our strategies are designed for lasting market leadership.',
        },
        {
            icon: Users,
            title: 'Elite Community',
            description: 'Join a network of high-performing achievers who celebrate wins and provide strategic support.',
        },
        {
            icon: Heart,
            title: 'Comprehensive Support',
            description: '24/7 community access, regular training sessions, and ongoing mentorship ensure continuous growth.',
        },
        {
            icon: Target,
            title: 'Results-Driven',
            description: 'We focus on actionable strategies and measurable outcomes. Your success is our success.',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Why Choose Achievers Club - Strategic Advantages</title>
                <meta name="description" content="Discover why Achievers Club is the premier choice for business excellence—transparency, proven mentorship, elite community, and measurable results." />
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
                        Why Choose Achievers Club?
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We\\'re not just another program. We\\'re an elite community built on transparency, proven excellence, and genuine commitment to your long-term success.
                    </p>
                </motion.div>
            </section>

            {/* Main Differentiators */}
            <section className="section-container">
                <SectionHeading
                    subtitle="Strategic Advantages"
                    title="The Achievers Club Difference"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((item, index) => (
                        <Card key={index} delay={index * 0.05}>
                            <Icon icon={item.icon} size={32} className="mb-4" />
                            <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Trust & Ethics */}
            <section className="section-container bg-dark-lighter">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        subtitle="Our Commitment"
                        title="Built on Integrity"
                    />

                    <Card>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-3 flex items-center">
                                    <span className="mr-3">✓</span> No Inflated Promises
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    We don\\'t promise overnight success or guaranteed income. We promise honest guidance, proven strategies, and unwavering support as you build your business.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-accent mb-3 flex items-center">
                                    <span className="mr-3">✓</span> Complete Transparency
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    You\\'ll know exactly what you\\'re getting, what\\'s expected of you, and what results you can realistically achieve with dedication and strategic effort.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-accent mb-3 flex items-center">
                                    <span className="mr-3">✓</span> Ethical Excellence
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    We operate with the highest ethical standards. Our reputation is built on the success and satisfaction of our members.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Long-Term Partnership */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.02em' }}>
                            A Long-Term Partnership
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            We\\'re not interested in quick wins that fade away. We\\'re building a community of \"Forever Achievers\"—professionals who achieve lasting success and continue to grow year after year.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            When you join Achievers Club, you\\'re not just signing up for a program—you\\'re joining an elite ecosystem that will support you throughout your entire business journey.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Lifetime access to community and resources</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Continuous training and skill development</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Ongoing mentorship and strategic guidance</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <span className="text-accent mr-3 mt-1 font-bold">→</span>
                                <span>Growing network of successful achievers</span>
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
                            <h3 className="text-2xl font-bold gradient-text mb-4">
                                Your Success Is Our Success
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We measure our success by the success of our members. That\\'s why we\\'re committed to providing the best training, support, and opportunities possible.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Member Satisfaction</span>
                                    <span className="text-accent font-bold">98%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Active Community</span>
                                    <span className="text-accent font-bold">1000+</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg">
                                    <span className="text-gray-300">Team Members</span>
                                    <span className="text-accent font-bold">500+</span>
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
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join a community that truly cares about your success. Start your journey to becoming a Forever Achiever today.
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
