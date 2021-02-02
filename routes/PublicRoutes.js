// Modules
const express = require('express');

const router = express.Router();

const HomeController = require('../controller/homeController');
const rollUpController= require('../controller/rollUpController');
const drillDownController = require('../controller/drillDownController');
const sliceController = require('../controller/sliceController');
const diceController = require('../controller/diceController');
const originalCubeController = require('../controller/originalCubeController');

// Route for home
router.get('/', HomeController.getHome);
router.get('/home', HomeController.getHome);

// Route for about
router.get('/about', HomeController.getAbout);

// Route for Original Cube
router.get('/originalCube', originalCubeController.getOriginalCube);

// Routes for queries with ROLLUP
router.get('/rollUp', rollUpController.getRollUp);

// Routes for queries with DRILL DOWN
router.get('/drillDown', drillDownController.getDrillDown);

// Routes for queries with SLICE
router.get('/slice', sliceController.getSlice);
router.post('/slice', sliceController.postSlice);

// Routes for queries with four to six tables
router.get('/dice', diceController.getDice);
router.post('/dice', diceController.postDice);

module.exports = router;