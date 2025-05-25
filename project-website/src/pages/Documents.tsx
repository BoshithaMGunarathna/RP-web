import { useState } from 'react';
import { FileText, Download, Search, Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

type DocumentCategory = 'all' | 'papers' | 'reports' | 'presentations' | 'data';

interface Document {
  id: string;
  title: string;
  description: string;
  category: Exclude<DocumentCategory, 'all'>;
  date: string;
  fileType: string;
  fileSize: string;
}

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('all');

  const documents: Document[] = [
    {
      id: '1',
      title: 'Initial Research Findings',
      description: 'This paper presents the initial findings of our research project, outlining key discoveries and their implications.',
      category: 'papers',
      date: 'Jan 15, 2023',
      fileType: 'PDF',
      fileSize: '2.4 MB',
    },
    {
      id: '2',
      title: 'Methodology Overview',
      description: 'A comprehensive overview of the methodologies employed in our research, including analytical approaches and data collection techniques.',
      category: 'papers',
      date: 'Mar 22, 2023',
      fileType: 'PDF',
      fileSize: '3.1 MB',
    },
    {
      id: '3',
      title: 'Quarterly Progress Report Q1 2023',
      description: 'Detailed report of research progress during the first quarter of 2023, including milestones achieved and challenges encountered.',
      category: 'reports',
      date: 'Apr 5, 2023',
      fileType: 'PDF',
      fileSize: '4.7 MB',
    },
    {
      id: '4',
      title: 'Conference Presentation',
      description: 'Slides from our presentation at the International Conference on Research Innovation, highlighting key aspects of our work.',
      category: 'presentations',
      date: 'May 18, 2023',
      fileType: 'PPTX',
      fileSize: '8.2 MB',
    },
    {
      id: '5',
      title: 'Experimental Data Set',
      description: 'Raw data collected during our experimental phase, organized and annotated for analysis and verification.',
      category: 'data',
      date: 'Jun 30, 2023',
      fileType: 'CSV',
      fileSize: '15.6 MB',
    },
    {
      id: '6',
      title: 'Theoretical Framework',
      description: 'An examination of the theoretical underpinnings of our research, contextualizing our work within existing academic literature.',
      category: 'papers',
      date: 'Aug 12, 2023',
      fileType: 'PDF',
      fileSize: '2.9 MB',
    },
    {
      id: '7',
      title: 'Quarterly Progress Report Q2 2023',
      description: 'Summary of research activities and outcomes during the second quarter of 2023.',
      category: 'reports',
      date: 'Jul 7, 2023',
      fileType: 'PDF',
      fileSize: '5.1 MB',
    },
    {
      id: '8',
      title: 'Workshop Materials',
      description: 'Educational materials prepared for the research workshop conducted for stakeholders and collaborators.',
      category: 'presentations',
      date: 'Sep 25, 2023',
      fileType: 'ZIP',
      fileSize: '12.3 MB',
    },
  ];

  const filteredDocuments = documents
    .filter(doc => 
      activeCategory === 'all' || doc.category === activeCategory
    )
    .filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'papers':
        return <FileText size={16} />;
      case 'reports':
        return <FileText size={16} />;
      case 'presentations':
        return <FileText size={16} />;
      case 'data':
        return <FileText size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const categories: { id: DocumentCategory; label: string }[] = [
    { id: 'all', label: 'All Documents' },
    { id: 'papers', label: 'Research Papers' },
    { id: 'reports', label: 'Reports' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'data', label: 'Data Sets' },
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
            Document Repository
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Access all research papers, reports, and presentations
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
                placeholder="Search documents..."
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
                onChange={(e) => setActiveCategory(e.target.value as DocumentCategory)}
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

        {/* Document List */}
        <div className="space-y-6">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card variant="bordered" className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-3 rounded-lg mr-4">
                        {getCategoryIcon(doc.category)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                            <p className="text-gray-600 mb-3">{doc.description}</p>
                          </div>
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {doc.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">Published: {doc.date}</span>
                            <span>{doc.fileType}, {doc.fileSize}</span>
                          </div>
                          <Button 
                            variant="outline" 
                            icon={<Download size={16} />}
                            size="sm"
                          >
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">No documents found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Recent Uploads */}
      <Section background="light" title="Recent Uploads" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.slice(0, 3).map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <div className="p-6">
                  <div className="text-sm text-primary-700 mb-2">{doc.date}</div>
                  <h3 className="text-lg font-bold mb-3">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{doc.description.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{doc.fileType}, {doc.fileSize}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      icon={<Download size={16} />}
                      iconPosition="right"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Document Request */}
      <Section>
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-700 mb-6">
            If you need access to specific research documents that are not listed here,
            please submit a request and our team will get back to you.
          </p>
          <Button 
            to="/contact" 
            variant="primary"
          >
            Request Documents
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Documents;