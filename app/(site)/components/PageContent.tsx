"use client";

import { Song } from "@/types";
import SongItem from "../../../components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";

type PageContentProps = {
  songs: Song[];
};

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  if (songs.length == 0) {
    return <div>There are no available songs right now.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
};

export default PageContent;
