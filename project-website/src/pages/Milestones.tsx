import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Timeline, { TimelineItem } from '../components/ui/Timeline';
import Card from '../components/ui/Card';

const Milestones = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: '1',
      date: 'January 2023',
      title: 'Project Inception',
      description: 'Initial research proposal accepted and funding secured for the project.',
      status: 'completed',
    },
    {
      id: '2',
      date: 'March 2023',
      title: 'Team Formation',
      description: 'Assembled a multidisciplinary team of researchers and established collaborations with key partners.',
      status: 'completed',
    },
    {
      id: '3',
      date: 'June 2023',
      title: 'Initial Findings',
      description: 'Completed preliminary research and published first set of findings in conference proceedings.',
      status: 'completed',
    },
    {
      id: '4',
      date: 'September 2023',
      title: 'Methodology Refinement',
      description: 'Refined research methodology based on initial findings and peer feedback.',
      status: 'completed',
    },
    {
      id: '5',
      date: 'January 2024',
      title: 'Major Breakthrough',
      description: 'Achieved significant breakthrough in our primary research area, leading to new avenues of exploration.',
      status: 'completed',
    },
    {
      id: '6',
      date: 'April 2024',
      title: 'Journal Publication',
      description: 'Published comprehensive findings in a leading peer-reviewed journal.',
      status: 'in-progress',
    },
    {
      id: '7',
      date: 'July 2024',
      title: 'Industry Partnership',
      description: 'Established partnership with industry leader to develop practical applications of our research.',
      status: 'in-progress',
    },
    {
      id: '8',
      date: 'December 2024',
      title: 'Final Project Outcomes',
      description: 'Compilation of all research findings and development of future research directions.',
      status: 'upcoming',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Research Grant',
      date: 'January 2023',
      description: '$500,000 grant awarded by National Science Foundation for innovative research.',
    },
    {
      id: 2,
      title: 'Best Paper Award',
      date: 'March 2023',
      description: 'Received Best Paper Award at International Conference on Research Innovations.',
    },
    {
      id: 3,
      title: 'Patent Filing',
      date: 'August 2023',
      description: 'Filed patent for novel technology developed during research project.',
    },
    {
      id: 4,
      title: 'Media Recognition',
      date: 'October 2023',
      description: 'Research featured in leading scientific publications and media outlets.',
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
            Research Milestones
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tracking our progress and achievements
          </motion.p>
        </div>
      </Section>

      {/* Progress Overview */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" className="h-full p-6 text-center">
              <div className="text-5xl font-bold text-primary-700 mb-2">75%</div>
              <h3 className="text-xl mb-3">Project Completion</h3>
              <p className="text-gray-600">
                Overall progress toward our research objectives
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="elevated" className="h-full p-6 text-center">
              <div className="text-5xl font-bold text-secondary-600 mb-2">6</div>
              <h3 className="text-xl mb-3">Publications</h3>
              <p className="text-gray-600">
                Research papers published in peer-reviewed journals
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="elevated" className="h-full p-6 text-center">
              <div className="text-5xl font-bold text-accent-500 mb-2">3</div>
              <h3 className="text-xl mb-3">Patents</h3>
              <p className="text-gray-600">
                Patent applications filed based on our research
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-serif mb-4">Project Timeline</h2>
          <p className="text-gray-700 mb-8">
            Our research project spans multiple phases, with key milestones achieved at each stage.
            Below is a timeline of our progress and upcoming objectives.
          </p>
        </div>

        <Timeline items={timelineItems} className="mb-16" />

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-success-500 mr-2"></div>
            <span className="text-sm">Completed</span>
            <div className="w-3 h-3 rounded-full bg-primary-500 mx-4 mr-2"></div>
            <span className="text-sm">In Progress</span>
            <div className="w-3 h-3 rounded-full bg-gray-300 mx-4 mr-2"></div>
            <span className="text-sm">Upcoming</span>
          </div>
          <p className="text-gray-600 text-sm">
            This timeline is regularly updated as we progress through our research objectives.
            For the most current information, please check back regularly.
          </p>
        </div>
      </Section>

      {/* Key Achievements */}
      <Section title="Key Achievements" background="light" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="bordered" className="h-full p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <Calendar size={20} className="text-primary-700" />
                  </div>
                  <div className="text-sm text-primary-700">{achievement.date}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Upcoming Milestones */}
      <Section title="Upcoming Milestones" subtitle="What to expect in the coming months">
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
                <div className="text-sm text-primary-700 mb-2">Q{i} 2025</div>
                <h3 className="text-xl font-bold mb-3">Upcoming Milestone {i}</h3>
                <p className="text-gray-600 mb-4">
                  Description of this upcoming milestone and its significance to the overall project.
                </p>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <div className="text-sm font-medium">Expected Outcomes:</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Key outcome or deliverable</li>
                    <li>Important achievement</li>
                    <li>Significant progress indicator</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Project Reports */}
      <Section background="light" title="Project Reports" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[2023, 2024].map((year, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="bordered" className="h-full">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold">{year} Annual Report</h3>
                  <p className="text-gray-600 mt-2">
                    Comprehensive overview of research activities and achievements for {year}.
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">PDF, 4.2 MB</span>
                    <button className="text-primary-700 hover:text-primary-800 font-medium transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Milestones;