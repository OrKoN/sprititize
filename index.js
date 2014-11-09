var im = require('simple-imagemagick');
var thunkify = require('thunkify');
var montageThunk = thunkify(im.montage);

function * sprititize(data, opts) {
    var imgs = [];
    var len = data.length;
    for (var i = 0; i < len; i++) {
        imgs.push(data[i].src);
    }
    imgs.push('-tile', '1x' + len);
    imgs.push('-geometry');
    imgs.push('+0+0');
    imgs.push(opts.output)
    console.log(imgs);
    yield montageThunk(imgs);
}

module.exports = sprititize;


