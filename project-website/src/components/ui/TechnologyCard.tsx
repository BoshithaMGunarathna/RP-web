import React from 'react';

const TechnologyCard = ({ name, imageSrc }) => {
  return (
    <div className="p-2 text-center w-[150px]">
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 object-cover rounded-full inline-block
                   shadow-lg shadow-gray-400/60"
      />
      <h3
        className="mt-3 text-base leading-snug
                   h-[2.4rem] overflow-hidden text-ellipsis
                   line-clamp-2 break-words"
        title={name}
      >
        {name}
      </h3>
    </div>
  );
};

export default TechnologyCard;
