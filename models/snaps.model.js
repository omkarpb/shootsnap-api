var mongoose = require("mongoose");

var snapsSchema = new mongoose.Schema({
    imgSrc: String,
    caption: String,
    postedBy: String,
    postedByAvatar: String,
    comments: [{ body: String, date: Date, commentedBy: String }],
    date: { type: Date, default: Date.now },
    likes: Number,
    isLiked: Boolean
});

var Snap = mongoose.model('Snap', snapsSchema);
module.exports = Snap;