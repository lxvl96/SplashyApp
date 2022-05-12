var express = require('express');
const { saveWallpaper,updateWallpaper,deleteWallpaper,showWallpapers} = require('../controllers/newWallpapers.Controller');


var router = express.Router();



router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/wallpapers", showWallpapers);

router.post("/wallpapers", saveWallpaper);

module.exports = router;