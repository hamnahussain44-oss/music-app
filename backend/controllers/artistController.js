import db from '../models/db.js'; 

export const getArtists = (req, res) => {
  db.query('SELECT * FROM artists', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const addArtist = (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO artists (name) VALUES (?)', [name], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(201);
  });
};

export const deleteArtist = (req, res) => {
  db.query('DELETE FROM artists WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};