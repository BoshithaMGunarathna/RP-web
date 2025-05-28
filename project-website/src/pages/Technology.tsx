import React from 'react';
import TechnologyCard from '../components/ui/TechnologyCard';

const technologies = [
  { name: 'React', imageSrc: '/react.png' },
  { name: 'Node.js', imageSrc: '/node.png' },
  { name: 'Python', imageSrc: '/python.png' },
  { name: 'Tensorflow', imageSrc: '/tensorflow.png' },
  { name: 'Open CV', imageSrc: '/opencv.png' },
  { name: 'Mongo DB', imageSrc: '/mongo.png' },
  { name: 'Keras', imageSrc: '/Keras.png' },
  { name: 'Google Colab', imageSrc: '/colabs.png' },
  { name: 'Docker', imageSrc: '/docker.png' },
];

const Technology = () => {
  return (
     <section className="bg-blue-50  py-6 px-6 max-w-7xl rounded-xl mx-auto">
        <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif mb-6">Technologies Used</h2>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-center">
            {technologies.slice(0, 8).map((tech) => (
                <TechnologyCard key={tech.name} name={tech.name} imageSrc={tech.imageSrc} />
            ))}
        </div>
    </section>
   
  );
};

export default Technology;
