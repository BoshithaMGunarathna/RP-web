import { useState } from 'react';
import { FileText, Download, Search, Filter, X, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

type PresentationCategory = 'all' | 'conferences' | 'workshops' | 'seminars' | 'internal';

interface Presentation {
  id: string;
  title: string;
  description: string;
  category: Exclude<PresentationCategory, 'all'>;
  date: string;
  presenter: string;
  venue: string;
  slidesUrl?: string;
  recordingUrl?: string;
  thumbnailUrl: string;
}

const Presentations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<PresentationCategory>('all');

  const presentations: Presentation[] = [
    {
      id: '1',
      title: 'Initial Research Findings',
      description: 'Presentation of our initial research findings at the International Conference on Research Innovation.',
      category: 'conferences',
      date: 'Mar 15, 2023',
      presenter: 'Dr. Emily Johnson',
      venue: 'International Conference on Research Innovation',
      slidesUrl: '#',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      title: 'Methodology Workshop',
      description: 'Interactive workshop exploring our research methodologies and analytical approaches.',
      category: 'workshops',
      date: 'Apr 22, 2023',
      presenter: 'Prof. Michael Chen',
      venue: 'University Research Center',
      slidesUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      title: 'Quarterly Progress Update',
      description: 'Internal presentation to stakeholders detailing progress during Q1 2023.',
      category: 'internal',
      date: 'May 5, 2023',
      presenter: 'Research Team',
      venue: 'Virtual Meeting',
      slidesUrl: '#',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      title: 'Research Seminar Series',
      description: 'Seminar exploring the theoretical underpinnings of our research approach.',
      category: 'seminars',
      date: 'Jun 18, 2023',
      presenter: 'Dr. Sarah Williams',
      venue: 'Department of Research Sciences',
      slidesUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/5427669/pexels-photo-5427669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '5',
      title: 'Experimental Results Analysis',
      description: 'Presentation of experimental data and analysis methods used in our research.',
      category: 'conferences',
      date: 'Jul 30, 2023',
      presenter: 'Dr. James Rodriguez',
      venue: 'Global Research Forum',
      slidesUrl: '#',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '6',
      title: 'Industry Applications Workshop',
      description: 'Workshop focused on potential industry applications of our research findings.',
      category: 'workshops',
      date: 'Aug 12, 2023',
      presenter: 'Prof. Michelle Taylor',
      venue: 'Industry Partner Headquarters',
      slidesUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '7',
      title: 'Theoretical Framework Development',
      description: 'Detailed exploration of the theoretical framework underlying our research project.',
      category: 'seminars',
      date: 'Sep 25, 2023',
      presenter: 'Dr. Daniel Kim',
      venue: 'University Research Symposium',
      slidesUrl: '#',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '8',
      title: 'Year-End Progress Report',
      description: 'Comprehensive overview of research progress and achievements for stakeholders.',
      category: 'internal',
      date: 'Dec 7, 2023',
      presenter: 'Research Team Lead',
      venue: 'Board Room',
      slidesUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredPresentations = presentations
    .filter(presentation => 
      activeCategory === 'all' || presentation.category === activeCategory
    )
    .filter(presentation => 
      presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      presentation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      presentation.presenter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      presentation.venue.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const categories: { id: PresentationCategory; label: string }[] = [
    { id: 'all', label: 'All Presentations' },
    { id: 'conferences', label: 'Conference Presentations' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'seminars', label: 'Seminars' },
    { id: 'internal', label: 'Internal Presentations' },
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
            Presentations & Slides
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Access all research presentations, workshop materials, and seminar recordings
          </motion.p>
        </div>
      </Section>

      {/* Search and Filter */}
      <Section>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search presentations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={18} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 appearance-none"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as PresentationCategory)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Presentations Grid */}
        {filteredPresentations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPresentations.map((presentation, index) => (
              <motion.div
                key={presentation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card variant="elevated" className="h-full overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={presentation.thumbnailUrl} 
                      alt={presentation.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary-100 px-3 py-1 rounded-full text-xs font-medium text-primary-800">
                        {presentation.category}
                      </div>
                      <div className="ml-auto text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {presentation.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{presentation.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{presentation.description}</p>
                    
                    <div className="mt-auto">
                      <div className="text-sm text-gray-600 mb-3">
                        <strong>Presenter:</strong> {presentation.presenter}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Venue:</strong> {presentation.venue}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {presentation.slidesUrl && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            icon={<Download size={16} />}
                          >
                            Slides
                          </Button>
                        )}
                        {presentation.recordingUrl && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            icon={<ExternalLink size={16} />}
                          >
                            Recording
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No presentations found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </Section>

      {/* Featured Presentation */}
      <Section background="light" title="Featured Presentation" centered>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" className="overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Keynote presentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Keynote: Future Directions in Our Research Field</h3>
                <p className="text-gray-600 mb-4">
                  An inspiring keynote presentation by our lead researcher, discussing the future directions
                  and potential impact of our research project.
                </p>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="text-sm text-gray-600 mb-2 md:mb-0">
                    <span className="font-medium">Presenter:</span> Dr. Emily Johnson | 
                    <span className="ml-2 font-medium">Date:</span> October 10, 2023
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<Download size={16} />}
                    >
                      Download Slides
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<ExternalLink size={16} />}
                    >
                      Watch Recording
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Upcoming Presentations */}
      <Section title="Upcoming Presentations" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="bordered" className="h-full p-6">
                <div className="text-sm text-primary-700 mb-2">
                  {new Date(Date.now() + i * 15 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <h3 className="text-xl font-bold mb-3">Upcoming Presentation {i}</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of this upcoming presentation, highlighting the main topics and their significance.
                </p>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="text-sm text-gray-600">
                    <div className="mb-1"><span className="font-medium">Presenter:</span> Researcher Name</div>
                    <div><span className="font-medium">Venue:</span> Presentation Venue</div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  icon={<Calendar size={16} />}
                >
                  Add to Calendar
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Looking for Specific Presentations?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            If you can't find the presentation you're looking for, or if you need access to materials
            from past presentations not listed here, please reach out to us.
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
              className="bg-white text-secondary-700 hover:bg-gray-100"
            >
              Request Materials
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Presentations;