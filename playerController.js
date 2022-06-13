//PlayerController.js
//Import Player Model
Player = require('./playerModel');
//For index
exports.index = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: player
        });
    });
};
//For creating new player
exports.add = function (req, res) {
    var player = new Player();
    player.name = req.body.name;
    player.gamePlayed = req.body.gamePlayed;
    player.catchesMade = req.body.catchesMade;
    player.touchdownsThrown = req.body.touchdownsThrown;
    player.fieldGoals = req.body.fieldGoals;
    player.rushingYards = req.body.rushingYards;
    player.sacks = req.body.sacks;
    //Save and check error
    player.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New Player Added!",
            data: player
        });
    });
};
// View Player
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player Details',
            data: player
        });
    });
};
// Update Player
exports.update = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        player.name = req.body.name ? req.body.name : player.name;
        player.gamePlayed = req.body.gamePlayed ? req.body.gamePlayed : player.gamePlayed;
        player.catchesMade = req.body.catchesMade ? req.body.catchesMade : player.catchesMade;
        player.touchdownsThrown = req.body.touchdownsThrown ? req.body.touchdownsThrown : player.touchdownsThrown;
        player.fieldGoals = req.body.fieldGoals ? req.body.fieldGoals : player.fieldGoals;
        player.rushingYards = req.body.rushingYards ? req.body.rushingYards : player.rushingYards;
        player.sacks = req.body.sacks ? req.body.sacks : player.sacks;
        //save and check errors
        player.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Player Updated Successfully",
                data: player
            });
        });
    });
};
// Delete Player
exports.delete = function (req, res) {
    Player.deleteOne({
        _id: req.params.player_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Player Deleted'
        })
    })
};
exports.mostTouchdownsThrown = function (req, res) {
    Player.findOne({}, function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "The Player with the most Touchdowns Thrown",
            data: player
        });
    }).sort({"touchdownsThrown":-1});
};
exports.mostRushingYards = function (req, res) {
    Player.findOne({}, function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "The Player with the most rushing yards",
            data: player
        });
    }).sort({"rushingYards":-1});
};
exports.leastRushingYard = function (req, res) {
    Player.findOne({}, function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "The Player with the least rushing yards",
            data: player
        });
    }).sort({"rushingYards":1});
};
exports.mostToFewestFieldGoalsMade = function (req, res) {
    Player.find({}, function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "A list of players sorted from most to fewest field goals made",
            data: player
        });
    }).sort({"fieldGoals":-1});
};
exports.mostSacks = function (req, res) {
    Player.findOne({}, function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "The Player with the most number of sacks",
            data: player
        });
    }).sort({"sacks":-1});
}