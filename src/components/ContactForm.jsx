import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        reason: '',
        income: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const { data, error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        state: formData.state,
                        reason: formData.reason,
                        income: formData.income,
                        created_at: new Date().toISOString(),
                    },
                ]);

            if (error) throw error;

            setStatus({
                type: 'success',
                message: 'Thank you! We\'ll get back to you within 24 hours.',
            });
            setFormData({ name: '', email: '', phone: '', state: '', reason: '', income: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact us directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-accent mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your full name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-accent mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                        placeholder="your.email@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-accent mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                    />
                </div>

                {/* State */}
                <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-accent mb-2">
                        State *
                    </label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                    >
                        <option value="">Select your state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                    </select>
                </div>

                {/* Reason for choosing opportunity */}
                <div className="md:col-span-2">
                    <label htmlFor="reason" className="block text-sm font-semibold text-accent mb-2">
                        What is the reason behind choosing this opportunity? *
                    </label>
                    <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                    >
                        <option value="">Select an option</option>
                        <option value="Financial Freedom">Financial Freedom</option>
                        <option value="Part time Earning">Part time Earning</option>
                        <option value="Personal Growth">Personal Growth</option>
                    </select>
                </div>

                {/* Income Expectation */}
                <div className="md:col-span-2">
                    <label htmlFor="income" className="block text-sm font-semibold text-accent mb-2">
                        Income Expectation *
                    </label>
                    <select
                        id="income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/30 rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                    >
                        <option value="">Select income range</option>
                        <option value="15K to 20K">15K to 20K</option>
                        <option value="20K to 30K">20K to 30K</option>
                        <option value="30K to 40K">30K to 40K</option>
                        <option value="40K to 50K">40K to 50K</option>
                    </select>
                </div>
            </div>

            {/* Status Message */}
            {status.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center p-4 rounded-lg ${status.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                        }`}
                >
                    {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    ) : (
                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    )}
                    <p className="text-sm">{status.message}</p>
                </motion.div>
            )}

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
            >
                {isSubmitting ? (
                    'Submitting...'
                ) : (
                    <>
                        Submit Application
                        <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>

            {/* Register Here / QR Code Button */}
            <div className="relative text-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-dark-lighter text-gray-400">Or</span>
                </div>
            </div>

            <a
                href="/images/qr-code.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
            >
                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full group border-accent text-accent hover:bg-accent hover:text-dark"
                >
                    Register Here (Scan QR)
                    <CheckCircle size={20} className="inline-block ml-2 group-hover:scale-110 transition-transform" />
                </Button>
            </a>

            <p className="text-gray-400 text-sm text-center">
                By submitting this form, you agree to be contacted by our team regarding Achievers Club membership.
            </p>
        </motion.form>
    );
}
