const Wallpaper = require('../models/wallpapers')

const renderWallpapers = async (req, res) => {
    try {
        const walls = await Wallpaper.find().lean();
        res.json({ status: "true", wallpapers: walls });
    } catch (error) {
        console.log({ "error": error });

    }
};

const createWallpaper = async (req, res, next) => {
    try {
        const wall = new Wallpaper(req.body);
        await wall.save();
        //res.redirect("/");
        res.json({ "saved": "yes" })
    } catch (error) {
        return res.render({ "error": error });
    }
};

const saveWallpaper = async (req, res, next) => {
    const wall = new Wallpaper(req.body);
    await wall.save().then(res.json({ "saved": "yes" })).catch(err => console.log(err));
}

const wallToggleDone = async (req, res, next) => {
    let { id } = req.params;
    const wall = await Wallpaper.findById(id);
    wall.done = !wall.done;
    await wall.save();
    res.redirect("/");
};

const renderWallpaperEdit = async (req, res, next) => {
    const wall = await Wallpaper.findById(req.params.id).lean();
    res.render("edit", { wall });
};

const editWallpaper = async (req, res, next) => {
    const { id } = req.params;
    await Wallpaper.updateOne({ _id: id }, req.body);
    res.redirect("/");
};

const deleteWallpaper = async (req, res, next) => {
    let { id } = req.params;
    await Wallpaper.remove({ _id: id });
    res.redirect("/");
};


module.exports = { saveWallpaper,renderWallpapers, deleteWallpaper, editWallpaper, renderWallpaperEdit, wallToggleDone, createWallpaper }