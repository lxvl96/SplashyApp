var express = require('express');
var router = express.Router();

var {
  renderWallpapers,
  createWallpaper,
  wallToggleDone,
  renderWallpaperEdit,
  editWallpaper,
  deleteWallpaper,
  saveWallpaper
} = require('../controllers/Wallpaper.Controller')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// New Note
router.get("/wallpaper/add", renderWallpapers);

router.post("/wallpapers/new", saveWallpaper);

// Get All Notes
router.get("/wallpapers", renderWallpapers);

// Edit Notes
router.get("/wallpaper/edit/:id", renderWallpaperEdit);

router.put("/wallpaper/edit-wallpaper/:id", editWallpaper);

// Delete Notes
router.delete("/wallpaper/delete/:id", deleteWallpaper);


module.exports = router;
