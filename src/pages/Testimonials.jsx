import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const TeamMemberCard = ({ member, delay }) => (
    <Card delay={delay} className="p-0 overflow-hidden group !border-none !shadow-none !bg-transparent">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + member.name + '&background=random'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
                {member.role && (
                    <p className="text-accent text-sm font-semibold tracking-wider uppercase drop-shadow-md">
                        {member.role}
                    </p>
                )}
            </div>
        </div>
    </Card>
);

export default function Testimonials() {
    const teamMembers = [
        {
            name: 'Durga Sai Krishna',
            role: 'Supervisor',
            image: '/images/dsk.jpg',
        },
        {
            name: 'Kishore',
            image: '/images/kishore.jpg',
        },
        {
            name: 'Dileep',
            image: '/images/dileep.jpg',
        },
        {
            name: 'Shiva',
            image: '/images/shiva.jpg',
        },
        {
            name: 'Srinadh',
            image: '/images/srinadh.jpg',
        },
    ];

    const leader = teamMembers[0];
    const members = teamMembers.slice(1);

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
                        Team Members
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Real professionals. Real results. Meet the leaders driving the Achievers Club mission.
                    </p>
                </motion.div>
            </section>

            {/* Team Grid */}
            <section className="section-container">
                {/* Team Leader Section */}
                <div className="flex justify-center mb-16">
                    <div className="w-full max-w-md relative group">
                        {/* Stable Gold Border/Glow Container */}
                        <div className="relative rounded-2xl border-2 border-accent/40 shadow-[0_0_40px_rgba(255,215,0,0.1)] overflow-hidden">
                            <TeamMemberCard member={leader} delay={0} />
                        </div>

                        <div className="text-center mt-6 relative z-10">
                            <span className="inline-block text-accent text-sm font-bold uppercase tracking-widest bg-dark-lighter px-8 py-2 rounded-full border border-accent/30 shadow-lg">
                                Team Leader
                            </span>
                        </div>
                    </div>
                </div>

                {/* Remaining Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <TeamMemberCard key={index} member={member} delay={(index + 1) * 0.1} />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-container bg-dark-lighter">
                <SectionHeading
                    subtitle="Our Impact"
                    title="Success By The Numbers"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <Card className="text-center" hover3d={false}>
                        <div className="text-4xl md:text-5xl font-black gradient-text mb-2">1000+</div>
                        <p className="text-gray-400 text-sm">Active Members</p>
                    </Card>
                    <Card className="text-center" delay={0.1} hover3d={false}>
                        <div className="text-4xl md:text-5xl font-black gradient-text mb-2">500+</div>
                        <p className="text-gray-400 text-sm">Team Members</p>
                    </Card>
                    <Card className="text-center" delay={0.2} hover3d={false}>
                        <div className="text-4xl md:text-5xl font-black gradient-text mb-2">98%</div>
                        <p className="text-gray-400 text-sm">Satisfaction Rate</p>
                    </Card>
                    <Card className="text-center" delay={0.3} hover3d={false}>
                        <div className="text-4xl md:text-5xl font-black gradient-text mb-2">24/7</div>
                        <p className="text-gray-400 text-sm">Community Support</p>
                    </Card>
                </div>
            </section>

            {/* Placeholder for Future Testimonials */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <Card className="text-center border-2 border-dashed border-accent/30" hover3d={false}>
                        <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            Your Story Could Be Next
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">
                            We're constantly adding new Team Members from our growing community. Will yours be next?
                        </p>
                        <p className="text-gray-400 mb-8">
                            Join Achievers Club today and start writing your own success story. We can't wait to celebrate your achievements!
                        </p>
                        <Link to="/join">
                            <Button size="lg">Start Your Journey</Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </>
    );
}
