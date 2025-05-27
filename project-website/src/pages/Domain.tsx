import { Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import LiteratureSurvey from './LiteratureSurvey';
import ResearchGap from './ResearchGap';
import ResearchProblemSolution from './ResearchProblemSolution';

const Domain = () => {
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
            Research Domain
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
           Exploring new frontiers in AI-powered recruitment and bias mitigation

          </motion.p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-serif mb-6">Our Research Focus</h2>
              <div className="h-1 w-24 bg-blue-600"></div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our research focuses on developing a robust and scalable AI-driven candidate evaluation system that mitigates human bias in the recruitment process. Traditional hiring methods are often plagued by subjectivity and inconsistency—our solution leverages advanced technologies like natural language processing, computer vision, and code analysis to deliver fair, data-driven assessments.


            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We address the multifaceted nature of hiring decisions by evaluating both technical skills and behavioral attributes through a multimodal assessment framework. This includes automated resume parsing, video-based mock exams, real-time stress and confidence detection, and in-depth code complexity analysis.
Our multidisciplinary approach integrates knowledge from machine learning, psycholinguistics, software engineering, and human-computer interaction to create a transformative platform capable of redefining modern recruitment.
            
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check size={20} className="text-success-500 mr-2 mt-1 shrink-0" />
                <p className="text-gray-700">Pioneering real-time, AI-assisted interview systems</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-success-500 mr-2 mt-1 shrink-0" />
                <p className="text-gray-700">Integrated evaluation of technical and interpersonal skills</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-success-500 mr-2 mt-1 shrink-0" />
                <p className="text-gray-700">Ethical, inclusive, and transparent recruitment technology</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Research visualization" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>
          

      <LiteratureSurvey/>
      <ResearchGap/>
      <ResearchProblemSolution/>

      {/* Research Areas */}
      {/* <Section background="light" title="Key Research Areas" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="elevated" className="h-full p-6">
                <h3 className="text-xl font-bold mb-4">Research Area {i}</h3>
                <p className="text-gray-600 mb-6">
                 We utilize MFCCs, pitch, tempo, silence, and vocal clarity processed by a BiLSTM model to evaluate a candidate's confidence level during non-technical interviews. NLP models like BERT and Whisper are used to transcribe and semantically evaluate the quality of verbal responses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={16} className="text-primary-600 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-700">Key aspect of this research area</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-primary-600 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-700">Important methodology we're developing</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-primary-600 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-700">Potential applications and impact</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="mt-auto"
                  icon={<ExternalLink size={16} />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Methodology */}
      {/* <Section title="Our Methodology" subtitle="A rigorous approach to research and development">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Research methodology" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Rigorous and Innovative</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our research methodology combines rigorous scientific approaches with innovative 
              thinking to tackle complex problems. We follow a systematic process that ensures 
              our results are reliable, reproducible, and impactful.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">1. Problem Definition</h4>
                <p className="text-gray-700">
                  Clearly defining the problem and understanding its scope and impact is the 
                  first step in our research process.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">2. Literature Review</h4>
                <p className="text-gray-700">
                  Comprehensive review of existing research to build upon prior knowledge 
                  and identify gaps.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">3. Hypothesis Formulation</h4>
                <p className="text-gray-700">
                  Developing testable hypotheses based on our understanding of the problem 
                  and existing knowledge.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">4. Experimentation & Analysis</h4>
                <p className="text-gray-700">
                  Rigorous testing and analysis using state-of-the-art tools and methodologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section> */}

      {/* Publications */}
      {/* <Section background="light" title="Related Publications" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="bordered" className="h-full p-6">
                <h3 className="text-xl font-bold mb-2">Publication Title {i}</h3>
                <p className="text-sm text-primary-700 mb-4">Journal of Research, 2024</p>
                <p className="text-gray-600 mb-4">
                  Brief description of this publication, highlighting key findings and their 
                  significance to the field.
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Authors:</span> Author Name, Author Name, Author Name
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  icon={<ExternalLink size={16} />}
                  iconPosition="right"
                >
                  Read Full Paper
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/documents" variant="primary">View All Publications</Button>
        </div>
      </Section> */}

      {/* Call to Action */}
      {/* <Section background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in Our Research?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're always looking for collaborators, partners, and talented individuals to join our team.
            Let's explore how we can work together to advance knowledge in our field.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              to="/contact" 
              variant="primary"
              className="bg-white text-secondary-700 hover:bg-gray-100"
            >
              Contact Us
            </Button>
            <Button 
              to="/about" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Meet Our Team
            </Button>
          </motion.div>
        </div>
      </Section> */}
    </div>
  );
};

export default Domain;