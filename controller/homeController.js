// Modules
const db = require('../database');

const homeController = {
    getHome: function(req, res) {
        res.render('home.ejs', {title: 'Query List'});
    },

    getAbout: function(req, res) {
        res.render('about.ejs', {title: 'About Us'});
    }
}

module.exports = homeController;