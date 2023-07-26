import React from 'react';
import { FaPlay } from 'react-icons/fa';

type PlayButtonProps = {};

const PlayButton: React.FC<PlayButtonProps> = () => {
  return (
    <button className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate duration-300 translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
