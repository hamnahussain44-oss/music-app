import db from '../models/db.js';  

export const getSongs = (req, res) => {
  db.query('SELECT * FROM songs', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const addSong = (req, res) => {
  const { name, album_id, release_year } = req.body;
  db.query(
    'INSERT INTO songs (name, album_id, release_year) VALUES (?, ?, ?)',
    [name, album_id, release_year],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(201);
    }
  );
};

export const deleteSong = (req, res) => {
  db.query('DELETE FROM songs WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};