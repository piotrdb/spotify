import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface MediaItemProps {
  song: Song;
  onClick?: (id: string) => void;
  className?: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ song, onClick, className }) => {
  const imageUrl = useLoadImage(song);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }

    return player.setId(song.id);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded",
        className
      )}
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image src={imageUrl || "/images/liked.png"} alt="Media Item" fill />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
