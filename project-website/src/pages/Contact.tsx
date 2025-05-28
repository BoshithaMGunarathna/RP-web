import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

type FormData = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Simulate successful submission (90% of the time)
      if (Math.random() > 0.1) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitError(true);
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary-700" />,
      title: 'Email',
      content: 'boshithag@gmail.com',
      link: 'mailto:boshithag@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-primary-700" />,
      title: 'Phone',
      content: '+94 (78) 776-2803',
      link: 'tel:+94787762803',
    },
    {
      icon: <MapPin size={24} className="text-primary-700" />,
      title: 'Address',
      content: 'New Kandy Rd, Malabe, SLIIT Campus',
      link: 'https://maps.google.com',
    },
    {
      icon: <Clock size={24} className="text-primary-700" />,
      title: 'Office Hours',
      content: 'Monday - Friday: 9AM - 5PM',
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'collaboration', label: 'Research Collaboration' },
    { value: 'press', label: 'Press & Media' },
    { value: 'access', label: 'Access to Research Materials' },
    { value: 'careers', label: 'Career Opportunities' },
  ];

  const faqs = [
    {
      question: "How can I access your research publications and datasets?",
      answer: "Our research publications are available through academic databases and our institutional repository. Datasets may be available upon request for academic research purposes. Please contact us with details about your research project and intended use of the data."
    },
    {
      question: "Do you offer internship or research collaboration opportunities?",
      answer: "Yes, we welcome qualified students and researchers for internships and collaborative projects. We typically offer positions for undergraduate and graduate students, as well as opportunities for visiting researchers. Please submit your CV and research interests through our contact form."
    },
    {
      question: "Can I visit your research facility for a tour or demonstration?",
      answer: "We offer guided tours of our research facilities for academic partners, industry collaborators, and educational groups. Tours must be scheduled in advance and are subject to availability. Please contact us at least two weeks before your preferred visit date."
    },
    {
      question: "How can I cite your research in my academic work?",
      answer: "Please use standard academic citation formats when referencing our work. Full citation information is provided with each publication. If you're using our datasets or methodologies, please ensure proper attribution and consider reaching out to discuss potential collaboration opportunities."
    },
    {
      question: "What types of industry partnerships do you engage in?",
      answer: "We collaborate with industry partners on applied research projects, technology transfer initiatives, and consulting services. Our partnerships range from short-term consulting to multi-year research programs. Contact us to discuss how we can support your organization's research and development needs."
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in touch with our research team
          </motion.p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-serif mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="bg-primary-50 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-primary-700 transition-colors"
                        target={item.title === 'Address' ? '_blank' : undefined}
                        rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold font-serif mb-6">Connect With Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Follow our research progress and connect with us on social media for the latest updates.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary-100 text-primary-700 hover:bg-primary-200 p-2 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary-100 text-primary-700 hover:bg-primary-200 p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary-100 text-primary-700 hover:bg-primary-200 p-2 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" className="overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold font-serif mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="bg-success-50 text-success-700 p-4 rounded-lg mb-6 flex items-start">
                    <div className="mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                      <p>Thank you for reaching out. Our team will get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="bg-error-50 text-error-700 p-4 rounded-lg mb-6 flex items-start">
                    <AlertCircle size={20} className="mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Message Could Not Be Sent</h3>
                      <p>There was an error sending your message. Please try again or contact us directly.</p>
                      <button
                        className="text-error-700 font-medium underline mt-2"
                        onClick={() => setSubmitError(false)}
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name
                            ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
                            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-error-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email
                            ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
                            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-error-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        placeholder="Company or institution name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject <span className="text-error-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 appearance-none bg-white ${errors.subject
                            ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
                            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                      >
                        <option value="">Select Inquiry Type</option>
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-error-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message
                          ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
                        }`}
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-error-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send size={18} />}
                      disabled={isSubmitting}
                      className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="light" title="Visit Our Research Facility" centered>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-6">
              {/* Placeholder for map - in a real site, this would be an embedded Google Map or similar */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto text-gray-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">SLIIT Campus Location</h3>
                  <p className="text-gray-600">
                    New Kandy Rd, Malabe, SLIIT Campus
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="bordered" className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Don't see the answer to your question? Feel free to reach out directly.
            </p>
            <Button
              variant="outline"
              icon={<Mail size={18} />}
              href="mailto:boshithag@gmail.com"
            >
              Email Us Your Question
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stay Updated on Our Research
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to our newsletter to receive updates on our latest research, publications, and events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="primary"
              className="bg-white text-primary-700 hover:bg-gray-100 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-white/70 mt-4"
          >
            We respect your privacy. You can unsubscribe at any time.
          </motion.p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;