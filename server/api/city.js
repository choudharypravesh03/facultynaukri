/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var City = require('../controllers/city')

exports.getCity = function(req, res) {
    var params = req.query.state_id;
    console.log("state_id  "+params)
    var query = {
        state_id: params
    }
    console.log(query);
    City.get(query, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}


exports.getCityById = function(req, res) {
    var params = req.query.city_id;
    console.log("city_id  "+params)
    var query = {
        city_id: params
    }
    console.log(query);
    City.get(query, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}
