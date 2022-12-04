import React from 'react';

type Props = {
  titre: string;
  lien: string;
};

const NotesUniqueVideo: React.FC<Props> = ({ titre, lien }) => {
  return (
    <div>
      <h2>Capsule vidéo</h2>
      <h2>{titre}</h2>
      <p>baser sur ce lien ladasfasgfdasggggggggggggggggggggg {lien}</p>
    </div>
  );
};

export default NotesUniqueVideo;
