/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { FileText, Search, Filter, X, Calendar, ExternalLink, Eye } from 'lucide-react';

type PresentationCategory = 'all' | 'proposal' | 'progress' | 'final' | 'conferences' | 'workshops' | 'seminars' | 'internal';

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
  pdfPath?: string;
  isUpcoming?: boolean;
}

const Presentations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<PresentationCategory>('all');
  const [presentations, setPresentations] = useState<Presentation[]>([
    {
      id: '1',
      title: 'Research Proposal Presentation',
      description: 'Initial presentation outlining our research objectives, methodology, and expected outcomes for the project.',
      category: 'proposal',
      date: 'Jan 15, 2023',
      presenter: 'Dr. Emily Johnson',
      venue: 'Research Committee Meeting',
      pdfPath: '/presentation/Proposal.pdf',
      thumbnailUrl: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      title: 'Progress Presentation - Phase 1',
      description: 'First quarterly progress update showcasing initial findings and methodology validation.',
      category: 'progress',
      date: 'Apr 22, 2023',
      presenter: 'Research Team',
      venue: 'Department Review Meeting',
      pdfPath: '/presentation/Progress1.pdf',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      title: 'Progress Presentation - Phase 2',
      description: 'Mid-project progress report detailing experimental results and data analysis progress.',
      category: 'progress',
      date: 'Jul 15, 2023',
      presenter: 'Prof. Michael Chen',
      venue: 'Stakeholder Meeting',
      pdfPath: '/presentation/Progress2.pdf',
      thumbnailUrl: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },

    {
      id: '4',
      title: 'Final Project Presentation',
      description: 'Comprehensive final presentation summarizing all research outcomes, conclusions, and recommendations.',
      category: 'final',
      date: 'Dec 5, 2023',
      presenter: 'Complete Research Team',
      venue: 'Final Defense Committee',
      pdfPath: '/presentation/Final.pdf',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    // Upcoming presentations
    {
      id: '5',
      title: 'SLASSCOM Presentation',
      description: 'Additional progress presentation for extended research phase.',
      category: 'conferences',
      date: 'May 28, 2025',
      presenter: 'Boshitha Gunarathna',
      venue: 'Research Review Board',
      thumbnailUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isUpcoming: true,
    },
        {
      id: '6',
      title: 'Research paper Conference Presentation',
      description: 'Presentation of key findings at the International Research Conference.',
      category: 'conferences',
      date: 'June, 2025',
      presenter: 'Boshitha Gunarathna',
      venue: 'Online',
      pdfPath: '/presentations/conference-presentation.pdf',
      recordingUrl: '#',
      thumbnailUrl: 'https://images.pexels.com/photos/5427669/pexels-photo-5427669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isUpcoming: true,
    },
  ]);

  const handleOpenPDF = (presentation: Presentation) => {
    if (presentation.pdfPath) {
      window.open(presentation.pdfPath, '_blank');
    }
  };

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
    { id: 'proposal', label: 'Proposal Presentations' },
    { id: 'progress', label: 'Progress Presentations' },
    { id: 'final', label: 'Final Presentations' },
    { id: 'conferences', label: 'Conference Presentations' },
    
    
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      proposal: 'bg-blue-100 text-blue-800',
      progress: 'bg-green-100 text-green-800',
      final: 'bg-purple-100 text-purple-800',
      conferences: 'bg-orange-100 text-orange-800',
      
   
     
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Presentations & Slides
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Access all research presentations, from initial proposals to final outcomes
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="relative min-w-[200px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
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
                    ? 'bg-blue-600 text-white'
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
            {filteredPresentations.map((presentation) => (
              <div key={presentation.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={presentation.thumbnailUrl} 
                    alt={presentation.title}
                    className="w-full h-full object-cover"
                  />
                  {presentation.isUpcoming && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Upcoming
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(presentation.category)}`}>
                      {presentation.category.charAt(0).toUpperCase() + presentation.category.slice(1)}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {presentation.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{presentation.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{presentation.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Presenter:</span> {presentation.presenter}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Venue:</span> {presentation.venue}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    {!presentation.isUpcoming && (
                      <>
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {presentation.pdfPath && (
                            <button 
                              onClick={() => handleOpenPDF(presentation)}
                              className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex-1 justify-center"
                            >
                              <Eye size={16} />
                              View Slides
                            </button>
                          )}
                          {presentation.recordingUrl && presentation.recordingUrl !== '#' && (
                            <button 
                              onClick={() => window.open(presentation.recordingUrl, '_blank')}
                              className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex-1 justify-center"
                            >
                              <ExternalLink size={16} />
                              Recording
                            </button>
                          )}
                        </div>
                      </>
                    )}
                    
                    {presentation.isUpcoming && (
                      <button className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 w-full justify-center">
                        <Calendar size={16} />
                        Add to Calendar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No presentations found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Future Presentations Section */}
      <div className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Presentation Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our upcoming presentations and research updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ 'Conference Submission', 'SLASSCOM Ceremony'].map((title, i) => (
              <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">Planning in progress</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need Access to Additional Materials?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              If you need access to specific presentation materials or have questions about our research,
              please don't hesitate to reach out.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Research Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;