const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var wallpaperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    urlImage: {
        type: String,
        required: true,
    },
    urlThumbImage: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,

    },
    categoryId: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    }
});

//Export the model
module.exports = mongoose.model('Wallpaper', wallpaperSchema);