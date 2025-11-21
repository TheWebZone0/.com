import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}! Your message has been sent (simulation).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's discuss how we can work together to build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Let's Chat</h3>
            <p className="text-slate-600 dark:text-slate-400">
              I'm available for freelance work and full-time opportunities. Drop me a line!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@adhamahmed.dev" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors group">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">contact@adhamahmed.dev</p>
                </div>
              </a>

              <a href="https://wa.me/201091569465" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors group">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">WhatsApp (Direct)</p>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">+20 109 156 9465</p>
                </div>
              </a>

               <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">01091569465</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;