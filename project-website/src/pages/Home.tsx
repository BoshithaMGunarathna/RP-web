import { ArrowRight, BookOpen, ChevronDown, Lightbulb, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
              Advancing Research in 
              <span className="text-accent-400"> Our Domain</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our AI-driven recruitment platform provides a fair, scalable, and data-driven alternative to traditional interviews.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/domain" 
                variant="primary" 
                size="lg"
                className="bg-accent-500 hover:bg-accent-600"
                icon={<BookOpen size={20} />}
              >
                Explore Our Research
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => scrollToSection('overview')}
            className="text-white flex flex-col items-center animate-bounce"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <Section 
        id="overview"
        title="Project Overview"
        subtitle="A system combining NLP, computer vision, and code analysis to reduce human bias in recruitment."
        background="light"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" className="h-full p-6" hoverEffect>
              <div className="flex flex-col h-full">
                <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="text-primary-700" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600 flex-grow">
                  Real-time multimodal assessments: voice-based confidence scoring, gamified stress detection, and code complexity evaluation.
                </p>
                <Button 
                  to="/domain" 
                  variant="ghost" 
                  className="mt-4 justify-start px-0"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="elevated" className="h-full p-6" hoverEffect>
              <div className="flex flex-col h-full">
                <div className="bg-secondary-100 p-3 rounded-full w-fit mb-4">
                  <Award className="text-secondary-700" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Recognition</h3>
                <p className="text-gray-600 flex-grow">
                  Our work has been acknowledged for addressing fairness and objectivity in automated hiring systems.
                </p>
                <Button 
                  to="/about" 
                  variant="ghost" 
                  className="mt-4 justify-start px-0"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  About Our Team
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="elevated" className="h-full p-6" hoverEffect>
              <div className="flex flex-col h-full">
                <div className="bg-accent-100 p-3 rounded-full w-fit mb-4">
                  <FileText className="text-accent-700" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Publications</h3>
                <p className="text-gray-600 flex-grow">
                 Our research has led to published papers in top-tier conferences and journals.
                </p>
                <Button 
                  to="/documents" 
                  variant="ghost" 
                  className="mt-4 justify-start px-0"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  View Publications
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Latest Updates */}
      <Section
        title="Latest Updates"
        subtitle="Stay informed about our recent progress and achievements."
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="bordered" className="h-full">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-700 mb-2">October 15, 2024</div>
                <h3 className="text-xl font-bold mb-3">New Research Collaboration</h3>
                <p className="text-gray-600 mb-4">
                  We're excited to announce a new partnership with Industry Leaders Inc.
                  to further expand our research capabilities.
                </p>
                <Button 
                  variant="outline" 
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Read More
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="bordered" className="h-full">
              <img 
                src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Research presentation" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-700 mb-2">September 28, 2024</div>
                <h3 className="text-xl font-bold mb-3">Award-Winning Research</h3>
                <p className="text-gray-600 mb-4">
                  Our team's innovative approach has been recognized with the
                  prestigious Industry Innovation Award for 2024.
                </p>
                <Button 
                  variant="outline" 
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Read More
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Button to="/milestones" variant="primary">View All Updates</Button>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in Collaborating?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're always looking for new partners and collaborators to help advance our research.
            Get in touch to learn more about how we can work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              to="/contact" 
              variant="primary"
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;