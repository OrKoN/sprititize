var im = require('simple-imagemagick');
var thunkify = require('thunkify');
var montageThunk = thunkify(im.montage);

function * sprititize(data, opts) {
    var cmd = [];
    var len = data.length;
    for (var i = 0; i < len; i++) {
        cmd.push(data[i].src);
    }
    cmd.push('-tile', '1x' + len);
    cmd.push('-geometry');
    cmd.push('+0+0');
    cmd.push(opts.output)
    yield montageThunk(cmd);
}

module.exports = sprititize;


