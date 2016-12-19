/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var State = require('../controllers/state')

exports.getStates = function(req, res) {
    var params = req.query;
    State.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.getStateById = function(req, res) {
    var params = req.query.state_id;
    console.log("state_id"+params)
    var query = {
        state_id: params
    };
    console.log(query);
    State.get(query, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}
