import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const features = [
        {
            icon: Target,
            title: 'Strategic Growth',
            description: 'Data-driven strategies designed for sustainable business expansion and long-term market positioning.',
        },
        {
            icon: Users,
            title: 'Elite Network',
            description: 'Connect with industry leaders and high-performing professionals in an exclusive community ecosystem.',
        },
        {
            icon: TrendingUp,
            title: 'Proven Systems',
            description: 'Leverage battle-tested frameworks and methodologies that deliver measurable results consistently.',
        },
        {
            icon: Award,
            title: 'Excellence Standard',
            description: 'World-class training programs and mentorship from accomplished industry veterans.',
        },
    ];

    const testimonials = [
        {
            name: 'Siddu Nakkina',
            role: 'Senior Manager',
            image: '/images/siddu-nakkina.jpg',
            quote: 'Building sustainable growth requires a blend of strategic vision and relentless execution. Achievers Club provides the perfect ecosystem for this.',
        },
        {
            name: 'Sai Kumar',
            role: 'Fastest Sourcing Manager',
            image: '/images/saikumar.jpg',
            quote: 'Efficiency in sourcing and operations is key to scaling. The mentorship here has been instrumental in refining our processes.',
        },
    ];

    return (
        <>
            {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark via-dark-lighter to-dark">
                {/* Parallax Background Layers */}
                <motion.div
                    style={{ y: y2, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
                </motion.div>

                <motion.div
                    style={{ y: y1 }}
                    className="relative z-10 section-container text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-accent text-sm font-semibold tracking-wide">ELITE BUSINESS COMMUNITY</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black gradient-text mb-6 leading-tight" style={{ letterSpacing: '-0.03em' }}>
                            Building Forever
                            <br />
                            Achievers
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                            Transform your business trajectory with strategic guidance, proven systems, and an elite network of industry leaders.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Link to="/join">
                                <Button size="lg" className="group">
                                    Join With Us
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button size="lg" variant="outline">Learn More</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
                        <motion.div
                            className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="section-container bg-dark-lighter">
                <SectionHeading
                    subtitle="What We Deliver"
                    title="Strategic Advantages"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} delay={index * 0.1} hover3d={true}>
                            <Icon icon={feature.icon} size={32} className="mb-4" />
                            <h3 className="text-xl font-bold text-accent mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* About Preview */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Elite Business
                            <br />
                            Community
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Achievers Club is an exclusive ecosystem for ambitious business leaders. We provide strategic frameworks, proven methodologies, and elite networking opportunities.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Our mission: empower professionals with the systems, mindset, and connections needed to achieve sustainable, long-term success.
                        </p>
                        <Link to="/about">
                            <Button variant="outline">Discover Our Story</Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <Card className="text-center" hover3d={false}>
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">1000+</div>
                            <p className="text-gray-400 text-sm">Active Members</p>
                        </Card>
                        <Card className="text-center" delay={0.1} hover3d={false}>
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">3</div>
                            <p className="text-gray-400 text-sm">Office Locations</p>
                        </Card>
                        <Card className="text-center" delay={0.2} hover3d={false}>
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">50+</div>
                            <p className="text-gray-400 text-sm">Expert Mentors</p>
                        </Card>
                        <Card className="text-center" delay={0.3} hover3d={false}>
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">24/7</div>
                            <p className="text-gray-400 text-sm">Support</p>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="section-container bg-dark-lighter">
                <SectionHeading

                    title="What Leaders Say"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} delay={index * 0.1} className="p-0 overflow-hidden group !border-none !shadow-none !bg-transparent h-full">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-90"></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <svg className="w-12 h-12 text-accent/20 mb-4 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>

                                    <p className="text-gray-200 text-lg italic leading-relaxed mb-6 drop-shadow-md">
                                        "{testimonial.quote}"
                                    </p>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{testimonial.name}</h3>
                                        <p className="text-accent text-sm font-semibold tracking-wider uppercase drop-shadow-md">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link to="/testimonials">
                        <Button variant="outline">View All Team Members</Button>
                    </Link>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="section-container">
                <Card className="text-center max-w-4xl mx-auto" hover3d={false}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-4" style={{ letterSpacing: '-0.02em' }}>
                        Ready to Elevate Your Business?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Join an elite community of business leaders who are transforming their trajectory through strategic guidance and proven systems.
                    </p>
                    <Link to="/join">
                        <Button size="lg" className="group">
                            Join With Us Today
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </Card>
            </section>
        </>
    );
}
