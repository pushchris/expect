module.exports = function(expected, obj, callback) {
    callback = callback || function(){};
    for (i in expected) {
        if (!locate(obj, expected[i])) {
            callback(expected[i]);
            return false;
        }
    }
    callback(null);
    return true;
}  

function locate(obj, path) {
    path = path.split('.');
    var arrayPattern = /(.+)\[(\d+)\]/;
    for (var i = 0; i < path.length; i++) {
        var match = arrayPattern.exec(path[i]);
        if (match) {
            obj = obj[match[1]][parseInt(match[2])];
        } else {
            obj = obj[path[i]];
        }
    }
    return obj;
}