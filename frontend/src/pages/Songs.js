import React, { useState, useEffect } from 'react';
import { getSongs, addSong, deleteSong } from '../services/api';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState('');

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const res = await getSongs();
    setSongs(res.data);
  };

  const handleAdd = async () => {
    if (songName.trim()) {
      await addSong({ name: songName });
      setSongName('');
      fetchSongs();
    }
  };

  const handleDelete = async (id) => {
    await deleteSong(id);
    fetchSongs();
  };

  return (
    <div>
      <h2>Songs</h2>
      <input value={songName} onChange={(e) => setSongName(e.target.value)} placeholder="Song Name" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.name}
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;