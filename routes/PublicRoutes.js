// Modules
const express = require('express');

const router = express.Router();

const HomeController = require('../controller/homeController');
const OneTableController = require('../controller/oneTableController');
const TwoTablesController = require('../controller/twoTableController');
const ThreeTablesController = require('../controller/threeTableController');
const FourTablesController = require('../controller/fourTableController');

// Route for home
router.get('/', HomeController.getHome);
router.get('/home', HomeController.getHome);

// Route for about
router.get('/about', HomeController.getAbout);

// Routes for queries with one table
router.get('/oneTableOne', OneTableController.getOneTableOne);
router.get('/oneTableTwo', OneTableController.getOneTableTwo);
router.post('/oneTableOne', OneTableController.postOneTableOne);
router.post('/oneTableTwo', OneTableController.postOneTableTwo);

// Routes for queries with two tables
router.get('/twoTablesOne', TwoTablesController.getTwoTableOne);
router.get('/twoTablesTwo', TwoTablesController.getTwoTableTwo);
router.post('/twoTablesOne', TwoTablesController.postTwoTableOne);
router.post('/twoTablesTwo', TwoTablesController.postTwoTableTwo);

// Routes for queries with three tables
router.get('/threeTablesOne', ThreeTablesController.getThreeTablesOne);
router.get('/threeTablesTwo', ThreeTablesController.getThreeTablesTwo);
router.post('/threeTablesOne', ThreeTablesController.postThreeTableOne);
router.post('/threeTablesTwo', ThreeTablesController.postThreeTableTwo);

// Routes for queries with four to six tables
router.get('/fourTables', FourTablesController.getFourTables);
router.post('/fourTables', FourTablesController.postFourTable);

module.exports = router;