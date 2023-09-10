import express, { Router } from "express"

const router: Router = express.Router();

// const frontendRoutes = require('./frontendRoutes');
const apiRoutes = require('./api/APIRoutes');

// router.use(frontendRoutes);
router.use('/api', apiRoutes);

export default router;