import express from 'express';

const apiRoutes = express.Router();
apiRoutes.use(express.json());

apiRoutes.post('/login', (req, res) => {
  res.json("success");
});

module.exports = apiRoutes;