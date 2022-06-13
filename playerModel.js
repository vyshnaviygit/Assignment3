//PlayerModel.js
var mongoose = require('mongoose');
//schema
var playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gamePlayed: {
        type: Number
    },
    catchesMade: {
        type: Number
    },
    touchdownsThrown: {
        type: Number
    },
    fieldGoals: {
        type: Number
    },
    rushingYards: {
        type: Number
    },
    sacks: {
        type: Number
    },
});
// Export Player Model
var Player = module.exports = mongoose.model('player', playerSchema);
module.exports.get = function (callback, limit) {
    Player.find(callback).limit(limit);
}