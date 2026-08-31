import db from '../models/db.js';  

export const getAlbums = (req, res) => {
  db.query('SELECT * FROM albums', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const addAlbum = (req, res) => {
  const { name, artist_id, release_year, listens } = req.body;
  db.query(
    'INSERT INTO albums (name, artist_id, release_year, listens) VALUES (?, ?, ?, ?)',
    [name, artist_id, release_year, listens],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(201);
    }
  );
};

export const deleteAlbum = (req, res) => {
  db.query('DELETE FROM albums WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};