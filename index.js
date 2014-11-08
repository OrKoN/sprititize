var im = require('simple-imagemagick');
var montageThunk = thunkify(im.montage);

function * sprititize(data, opts) {
    var imgs = [];
    var len = imgs.length;
    for (var i = 0; i < len; i++) {
        imgs.push(data.src);
    }
    imgs.push('-tile', '1x' + len);
    imgs.push('-geometry');
    imgs.push('+0+0');
    imgs.push(opts.output)
    yield montageThunk(imgs);
}

module.exports = sprititize;

