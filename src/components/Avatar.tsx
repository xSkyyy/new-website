import React from 'react';

interface AvatarProps {
  imageUrl: string;
  name: string;
  title: string;
}

function Avatar({ imageUrl, name, title }: AvatarProps) {
  return (
    <div className="text-center space-y-4">
      <div className="relative mx-auto w-32 h-32">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full w-full h-full object-cover shadow-xl ring-4 ring-white/30 backdrop-blur-sm"
        />
        <div className="absolute inset-0 rounded-full bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-white/80">{title}</p>
      </div>
    </div>
  );
}

export default Avatar;