import React, { useState, useEffect } from 'react';
import { getAlbums, addAlbum, deleteAlbum } from '../services/api';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [albumName, setAlbumName] = useState('');

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const res = await getAlbums();
    setAlbums(res.data);
  };

  const handleAdd = async () => {
    if (albumName.trim()) {
      await addAlbum({ name: albumName });
      setAlbumName('');
      fetchAlbums();
    }
  };

  const handleDelete = async (id) => {
    await deleteAlbum(id);
    fetchAlbums();
  };

  return (
    <div>
      <h2>Albums</h2>
      <input value={albumName} onChange={(e) => setAlbumName(e.target.value)} placeholder="Album Name" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.name}
            <button onClick={() => handleDelete(album.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;