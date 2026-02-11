import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';

export default function Contact() {
    const offices = [
        {
            city: 'Guntur',
            address: 'Achievers Club, Guntur Office, Andhra Pradesh',
            phone: '+91 XXXX XXXXXX',
            email: 'guntur@achieversclub.com',
            hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
        },
        {
            city: 'Hyderabad',
            address: 'Achievers Club, Hyderabad Office, Telangana',
            phone: '+91 XXXX XXXXXX',
            email: 'hyderabad@achieversclub.com',
            hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
        },
        {
            city: 'Mumbai',
            address: 'Achievers Club, Mumbai Office, Maharashtra',
            phone: '+91 XXXX XXXXXX',
            email: 'mumbai@achieversclub.com',
            hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
        },
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
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Visit our offices or reach out to us. We're here to answer your questions and help you begin your journey to becoming a Forever Achiever.
                    </p>
                </motion.div>
            </section>

            {/* Office Locations */}
            <section className="section-container">
                <SectionHeading
                    subtitle="Our Locations"
                    title="Visit Us"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offices.map((office, index) => (
                        <Card key={index} delay={index * 0.1}>
                            <h3 className="text-2xl font-bold gradient-text mb-6">{office.city}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Icon icon={MapPin} size={20} className="mr-3 mt-1 flex-shrink-0" animate={false} />
                                    <p className="text-gray-300 text-sm">{office.address}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-container bg-dark-lighter">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        subtitle="Have Questions?"
                        title="We're Here to Help"
                    />

                    <Card>
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Whether you're curious about our programs, want to learn more about the Achievers Club community, or are ready to start your journey, our team is ready to answer all your questions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-dark/50 rounded-lg">
                                    <h4 className="text-accent font-semibold mb-2 flex items-center">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-2">
                                        Speak directly with our team
                                    </p>
                                    <a href="tel:+917207455747" className="text-gray-300 hover:text-accent transition-colors">
                                        +91 7207455747
                                    </a>
                                </div>

                                <div className="p-6 bg-dark/50 rounded-lg">
                                    <h4 className="text-accent font-semibold mb-2 flex items-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email Us
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-2">
                                        Get a response within 24 hours
                                    </p>
                                    <a href="mailto:eedupugantidurgasaikrishna@gmail.com" className="text-gray-300 hover:text-accent transition-colors break-all">
                                        eedupugantidurgasaikrishna@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Google Map */}
            <section className="section-container">
                <Card className="!p-0 overflow-hidden h-[450px] border-2 border-accent/20 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4567204423067!2d78.47273397516604!3d17.444510783451996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a365555555%3A0x6b4f74616259f939!2sForever%20Living%20Products%20Hyderabad!5e0!3m2!1sen!2sin!4v1707639000000!5m2!1sen!2sin"
                        className="w-full h-full object-cover grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-300 min-h-[450px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Forever Living Products Hyderabad Location"
                    ></iframe>
                </Card>
            </section>
        </>
    );
}
