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
    <div className="grid grid-cols-4 grid-rows-2 gap-5 justify-center">
      {technologies.slice(0, 8).map((tech) => (
        <TechnologyCard key={tech.name} name={tech.name} imageSrc={tech.imageSrc} />
      ))}
    </div>
  );
};

export default Technology;
