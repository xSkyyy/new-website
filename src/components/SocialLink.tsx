import React, { ReactNode } from 'react';

interface SocialLinkProps {
  icon: ReactNode;
  label: string;
  href: string;
}

function SocialLink({ icon, label, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-white/10"
    >
      <div className="flex items-center space-x-4">
        <div className="text-white group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-white group-hover:text-white font-medium transition-colors duration-300">
          {label}
        </span>
      </div>
    </a>
  );
}

export default SocialLink;