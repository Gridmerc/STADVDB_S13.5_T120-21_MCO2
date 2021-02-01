// Modules
const express = require('express');

const router = express.Router();

const HomeController = require('../controller/homeController');
const rollUpController= require('../controller/rollUpController');
const drillDownController = require('../controller/drillDownController');
const sliceController = require('../controller/sliceController');
const FourTablesController = require('../controller/fourTableController');

// Route for home
router.get('/', HomeController.getHome);
router.get('/home', HomeController.getHome);

// Route for about
router.get('/about', HomeController.getAbout);

// Routes for queries with ROLLUP
router.get('/rollUp', rollUpController.getRollUp);

// Routes for queries with DRILL DOWN
router.get('/drillDown', drillDownController.getDrillDown);

// Routes for queries with SLICE
router.get('/slice', sliceController.getSlice);
router.post('/slice', sliceController.postSlice);

// Routes for queries with four to six tables
router.get('/fourTables', FourTablesController.getFourTables);
router.post('/fourTables', FourTablesController.postFourTable);

module.exports = router;