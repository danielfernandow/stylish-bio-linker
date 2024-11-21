import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
}

const LinkCard = ({ title, url, icon }: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 mb-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg 
                 hover:transform hover:scale-[1.02] transition-all duration-300
                 border border-white border-opacity-20"
    >
      <div className="flex items-center space-x-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-lg font-medium text-white">{title}</span>
      </div>
    </a>
  );
};

export default LinkCard;