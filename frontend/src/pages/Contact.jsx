import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email Us',
      details: ['hello@luxe.com', 'support@luxe.com'],
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Visit Us',
      details: ['123 Luxury Avenue, NYC', 'New York, NY 10001'],
    },
  ];

  const faqs = [
    { question: 'How long does shipping take?', answer: 'Standard shipping takes 3-5 business days. Express shipping available at checkout.' },
    { question: 'What is your return policy?', answer: '30-day return policy for unused items in original packaging.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide. Shipping costs calculated at checkout.' },
    { question: 'How can I track my order?', answer: 'You\'ll receive a tracking number via email once your order ships.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/15.webp"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-white">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team
          </p>
          <div className="w-24 h-px bg-white/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-black text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-white/50 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-black rounded-2xl border border-white/10 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Send us a Message</h2>
          <p className="text-white/50 text-sm mb-6 text-center">Fill out the form below and we'll get back to you</p>
          
          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-16 px-4 max-w-4xl mx-auto border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Quick answers to common questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-black">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-white/50 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 border-t border-white/10">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
    <p className="text-white/50 mb-8">Subscribe to get exclusive offers and updates</p>
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-white/50"
      />
      <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105">
        Subscribe
      </button>
    </form>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default Contact;