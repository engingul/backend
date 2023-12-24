var mongoose = require("mongoose");
var Venue = mongoose.model("venue");

const createResponse = function (res, status, content) {
    res.status(status).json(content);
};

const addComment = function (req, res) {
    createResponse(res, 200, { status: "Başarılı" });
};

const getComment = async function (req, res) {
    try {
        const venue = await Venue.findById(req.params.venueid).select("name comments").exec();
        var response, comment;
        if (!venue) {
            createResponse(res, 404, { error: "Böyle bir mekan yok" });
            return;
        }
        if (venue.comments && venue.comments.length > 0) {
            comment = venue.comments.id(req.params.commentid);
            if (!comment) {
                createResponse(res, 404, { error: "Böyle bir yorum yok!" });
            } else {
                response = {
                    venue: {
                        name: venue.name,
                        id: req.params.venueid,
                    },
                    comment: comment,
                };
                createResponse(res, 200, response);
            }
        } else {
            createResponse(res, 404, { error: "Hiç yorum yok" });
        }
    } catch (error) {
        createResponse(res, 404, { error: "Böyle bir mekan yok!" });
    }
};

const updateComment = function (req, res) {
    createResponse(res, 200, { status: "Başarılı" });
};

const deleteComment = function (req, res) {
    createResponse(res, 200, { status: "Başarılı" });
};

module.exports = {
    addComment,
    getComment,
    updateComment,
    deleteComment
};
