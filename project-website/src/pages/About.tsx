import React from 'react'

const teamMembers = [
  {
    name: 'Deneth Pinsara',
    role: 'Researcher',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Indudini Thennakoon',
    role: 'Researcher',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Shehela Anjalee',
    role: 'Researcher',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Boshitha Gunarathna',
    role: 'Researcher',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
]

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-white mb-4 transition-colors duration-300">
          About Our Team
        </h1>
        <p className="text-indigo-700 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
          We are a team of four students working together on an innovative automated interview system.
        </p>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {teamMembers.map((member) => (
          <div 
            key={member.name} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700/50 overflow-hidden flex flex-col items-center transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mt-6 ring-4 ring-white dark:ring-gray-700 transition-all duration-300"
              loading="lazy"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-indigo-900 dark:text-white transition-colors duration-300">
                {member.name}
              </h2>
              <p className="text-indigo-700 dark:text-blue-400 transition-colors duration-300">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default About