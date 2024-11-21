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
      className="block w-full p-4 mb-4 bg-luxury-charcoal bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg 
                 hover:transform hover:scale-[1.02] transition-all duration-300
                 border border-luxury-gold border-opacity-30 hover:border-opacity-50"
    >
      <div className="flex items-center space-x-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-lg font-medium text-luxury-cream">{title}</span>
      </div>
    </a>
  );
};

export default LinkCard;