import { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactPoints = [
  {
    icon: MapPin,
    label: 'Head Office',
    value: '27B Abu Alfred Street, Abolaji Bus Stop, Off College Road via Haruna, Ogba, Lagos, Nigeria',
    sub: 'Nationwide operations across all six geo-political zones',
  },
  {
    icon: Mail,
    label: 'General Enquiries',
    value: 'info@akilinanigeria.com',
    sub: 'For general questions and partnerships',
    href: 'mailto:info@akilinanigeria.com',
  },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  fullName: string;
  companyName: string;
  jobTitle: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  preferredContact: string;
}

export default function Contact() {
  const { ref, inView } = useInView(0.05);
  const [form, setForm] = useState<FormData>({
    fullName: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredContact: 'email',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mojznvdo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': form.fullName,
          'Email Address': form.email,
          'Company Name': form.companyName,
          'Job Title': form.jobTitle,
          'Phone Number': form.phone,
          'Service Required': form.service,
          'Preferred Contact Method': form.preferredContact,
          Message: form.message,
          _subject: `New enquiry from ${form.fullName}${form.companyName ? ` (${form.companyName})` : ''}`,
          _replyto: form.email,
        }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm({ fullName: '', companyName: '', jobTitle: '', phone: '', email: '', service: '', message: '', preferredContact: 'email' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white dark:bg-brand-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="red-accent-line" />
            <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
              Contact Us
            </span>
            <div className="red-accent-line" />
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            We Are Ready{' '}
            <span className="text-gradient-red">When You Are.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your logistics enquiry does not need to wait. Akilina's operations team is available during business hours for immediate consultation and for time-critical requests, we respond outside of them.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="space-y-5">
              {contactPoints.map(({ icon: Icon, label, value, sub, href }, i) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-brand-dark-2 rounded-sm border border-gray-100 dark:border-gray-800 hover:border-brand-red/30 card-hover group"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `opacity 0.5s ease ${i * 100 + 200}ms, transform 0.5s ease ${i * 100 + 200}ms`,
                  }}
                >
                  <div className="w-11 h-11 bg-brand-red/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-300 icon-pro">
                    <Icon size={18} className="text-brand-red group-hover:text-white transition-colors duration-300 animate-icon-float" style={{ animationDelay: `${i * 200}ms` }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-red dark:text-brand-red-light mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-gray-900 dark:text-white hover:text-brand-red dark:hover:text-brand-red-light transition-colors duration-200 text-sm break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-gray-50 dark:bg-brand-dark-2 rounded-sm border border-gray-100 dark:border-gray-800 p-8 img-corner-borders">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={form.jobTitle}
                        onChange={handleChange}
                        placeholder="Operations Manager"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 (0) 123 456 7890"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="procurement">Procurement Services</option>
                        <option value="freight-forwarding">Freight Forwarding</option>
                        <option value="customs-clearance">Customs Clearance</option>
                        <option value="haulage">Haulage Services</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="outsourcing">Outsourcing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your logistics and procurement needs..."
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-red dark:focus:border-brand-red focus:shadow-red-glow-sm transition-all duration-200 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'phone', label: 'Phone' },
                        { value: 'email', label: 'Email' },
                        { value: 'whatsapp', label: 'WhatsApp' },
                      ].map(option => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={option.value}
                            checked={form.preferredContact === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand-red cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
