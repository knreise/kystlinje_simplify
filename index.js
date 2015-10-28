var turf = require('turf');
var _ = require('lodash-node');
var polyToLine = require('turf-polygon-to-line');

var fs = require('fs');

function readJson(filename) {
    var data = fs.readFileSync(filename);
    return JSON.parse(data);
}

var SIMPLIFY_TOLERANCE = 0.03;



var islands = readJson('/media/sf_atlsve/Documents/kyst/oyer.geojson');

var features = _.chain(islands.features)
    .map(function (feature) {
        return turf.simplify(feature, SIMPLIFY_TOLERANCE, true);
    })
    .map(function(feature) {
        return polyToLine(feature).features[0];
    })
    .filter(function (feature) {
        return feature.geometry.coordinates.length > 3;
    })
    .value();

var coast = readJson('/media/sf_atlsve/Documents/kyst/kystlinje.geojson');

coast.features = _.map(coast.features, function (feature) {
    return turf.simplify(feature, SIMPLIFY_TOLERANCE, true);
});


var simplified =  turf.featurecollection(coast.features.concat(features));

fs.writeFileSync('/media/sf_atlsve/Documents/kyst/kystlinje_oyer5.geojson', JSON.stringify(simplified));

console.log('saved !');