const Wallpaper = require('../models/wallpapers')

const showWallpapers = async (req, res, next) =>{
    try {
        const walls = await Wallpaper.find().lean();
        res.json({ status: "true", wallpapers: walls });
    } catch (error) {
        console.log({ "error": error });

    }
}

const saveWallpaper = async (req, res, next) => {
    const wall = new Wallpaper(req.body);
    await wall.save().then(res.json({ "saved": "yes" })).catch(err => console.log(err));
}

const deleteWallpaper = async (req, res, next) => {
    let { id } = req.params;
    await Wallpaper.remove({ _id: id }).then(res.json({ "saved": "yes" })).catch(err => console.log(err));
}

const updateWallpaper = async (req, res, next) => {
    const { id } = req.params;
    await Wallpaper.updateOne({ _id: id }, req.body).catch(err => console.log(err));
}

module.exports = { showWallpapers, saveWallpaper, deleteWallpaper, updateWallpaper }