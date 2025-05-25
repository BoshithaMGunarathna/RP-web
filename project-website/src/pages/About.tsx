import { motion } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, Award, Lightbulb, Globe, BookOpen } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  email: string;
  linkedin?: string;
  publications?: number;
  expertise: string[];
}

const About = () => {
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'B. M. Gunarathna',
    role: 'Developer – Voice-Based Confidence Detection & Non-Technical Interview Module',
    bio: 'B. M. Gunarathna coordinates the research team and has led the development of the voice-based confidence detection system and non-technical interview module. His expertise lies in AI integration and multimodal system design.',
    photoUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'boshithag@gmail.com',
    linkedin: 'linkedin.com/in/bmgunarathna',
    expertise: ['System Architecture', 'AI Integration', 'Team Leadership'],
  },
  {
    id: '2',
    name: 'I. C. Thennakoon',
    role: 'Developer – Stress Detection & Semantic Evaluation Module',
    bio: 'I. C. Thennakoon contributed to the design and implementation of the stress detection component using facial emotion recognition and semantic evaluation of candidate responses using NLP techniques.',
    photoUrl: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'thennakoon@research.edu',
    linkedin: 'linkedin.com/in/icthennakoon',
    expertise: ['Speech Analysis', 'NLP', 'BiLSTM Modeling'],
  },
  {
    id: '3',
    name: 'S. Anjalie',
    role: 'Developer – Code Complexity Scoring System',
    bio: 'S. Anjalie developed the code evaluation module based on Cyclomatic Complexity, Cognitive Function Complexity, and Weighted Code Complexity to assess maintainability and scalability of candidate code.',
    photoUrl: 'https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'anjalie@research.edu',
    linkedin: 'linkedin.com/in/sanjalie',
    expertise: ['Software Metrics', 'Frontend Development', 'UX Design'],
  },
  {
    id: '4',
    name: 'D. Pinsara',
    role: 'Developer – Video-Based Mock Exam System',
    bio: 'D. Pinsara implemented the video-based mock examination module, enabling real-time assessment of candidate professionalism and behavior using computer vision and facial analysis.',
    photoUrl: 'https://images.pexels.com/photos/5905559/pexels-photo-5905559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'pinsara@research.edu',
    linkedin: 'linkedin.com/in/dpinsara',
    expertise: ['Computer Vision', 'Facial Emotion Recognition', 'OpenCV'],
  },
  {
    id: '5',
    name: 'D. I. De Silva',
    role: 'Supervisor',
    bio: 'D. I. De Silva supervises the research project and guides system design, data processing, and evaluation strategy. He brings valuable expertise in backend engineering and real-time system operations.',
    photoUrl: 'https://images.pexels.com/photos/5493273/pexels-photo-5493273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'desilva@research.edu',
    linkedin: 'linkedin.com/in/didesilva',
    expertise: ['Backend Systems', 'Database Management', 'Real-time Processing'],
  },
  {
    id: '6',
    name: 'M. P. Gunathilake',
    role: 'Co-Supervisor',
    bio: 'M. P. Gunathilake co-supervises the project and contributed to the implementation of the code complexity scoring mechanism. His mentorship supports the technical depth and software engineering standards of the system.',
    photoUrl: 'https://images.pexels.com/photos/5792628/pexels-photo-5792628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'gunathilake@research.edu',
    linkedin: 'linkedin.com/in/mpgunathilake',
    expertise: ['Code Analysis', 'Software Metrics', 'Python'],
  },
];



  const partners = [
    { name: 'University Research Center', logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'National Science Foundation', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Industry Partner Inc.', logo: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Global Research Alliance', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  const values = [
    { 
      icon: <Lightbulb size={24} className="text-primary-700" />,
      title: 'Mock Exam and Resume Analysis',
      description: 'Candidates are assessed early using NLP-powered resume parsing and mock tests to evaluate cognitive skills and behavioral traits.'
    },
    { 
      icon: <Award size={24} className="text-primary-700" />,
      title: 'Voice-Based Confidence Scoring',
      description: 'Using BiLSTM and semantic models like BERT and Whisper, vocal features such as tone, pitch, tempo, and silence are analyzed to determine communication clarity and psychological confidence.'
    },
    { 
      icon: <Globe size={24} className="text-primary-700" />,
      title: 'Gamified Technical Interviews',
      description: 'Facial expression analysis in real-time, integrated into coding tasks, allows the system to detect emotional stress and evaluate problem-solving under pressure.'
    },
    { 
      icon: <BookOpen size={24} className="text-primary-700" />,
      title: 'Code Maintainability Assessment',
      description: 'Metrics like Cyclomatic Complexity (CC), Cognitive Function Complexity (CFC), and Weighted Code Complexity (WCC) provide a technical deep-dive into the sustainability and quality of candidate-submitted code.'
    },
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
            About Our Research Project
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet our team and learn about our mission
          </motion.p>
        </div>
      </Section>

      {/* Project Overview */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our research project is dedicated to transforming the traditional candidate evaluation
              process by developing a scalable, AI-driven, multimodal assessment system that actively mitigates 
              human bias and enhances decision-making accuracy. At its core, this initiative addresses the well-documented 
              limitations of conventional interviews—subjectivity, inconsistency, and unconscious bias—by integrating 
              cutting-edge technologies in natural language processing, computer vision, speech analysis, and code quality 
              evaluation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Launched in 2024, this project brings together a multidisciplinary team ofstudents
               with a shared vision: to create a comprehensive, fair, and objective recruitment platform. 
               By combining real-time voice-based confidence detection, stress level monitoring during technical tasks, 
               and deep code analysis, our system offers an unprecedented level of insight into a candidate’s technical skills,
                communication abilities, psychological resilience, and professionalism.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
          We continue to refine our system and expand its capabilities. With plans to incorporate VR-based 
          simulations and physiological sensors in future phases, our vision extends toward a fully immersive 
          and adaptive recruitment solution that not only measures capability but also reflects empathy, adaptability,
          and potential.


            </p>
            <Button 
              to="/domain" 
              variant="primary"
              icon={<ExternalLink size={16} />}
              iconPosition="right"
            >
              Explore Our Research Domain
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Research team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="light" title="Our Core Functions" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full p-6 text-center">
                <div className="bg-primary-50 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Research Team" subtitle="Meet the experts behind our research project" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {member.publications && (
                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Publications:</span> {member.publications}
                    </div>
                  )}
                  
                  <div className="flex space-x-3 mt-4">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-gray-500 hover:text-primary-700 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    {member.linkedin && (
                      <a 
                        href={`https://${member.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-700 transition-colors"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section background="light" title="Our Partners & Collaborators" centered>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm w-full h-32 flex items-center justify-center mb-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <p className="text-center text-gray-700 font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Recognition */}
      <Section title="Awards & Recognition">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card variant="bordered" className="p-6 h-full">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Award size={24} className="text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Award Title {i}</h3>
                      <p className="text-sm text-primary-700 mb-3">Awarded in 2023</p>
                      <p className="text-gray-600">
                        Description of this award and its significance to our research project. This recognition
                        highlights the impact and quality of our work.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Join Us */}
      <Section background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Research Team
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're always looking for talented researchers, collaborators, and partners who share our
            passion for advancing knowledge and creating positive impact through research.
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
              href="#" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Opportunities
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};


export default About;