var merge = require('merge-stream');
var config_1 = require('../config');
module.exports = function bundles(gulp, plugins) {
    return function () {
        return merge(bundleShims());
        function getShims() {
            var libs = config_1.PROD_DEPENDENCIES
                .filter(function (d) { return /\.js$/.test(d.src); });
            return libs.filter(function (l) { return l.inject === 'shims'; })
                .concat(libs.filter(function (l) { return l.inject === 'libs'; }))
                .concat(libs.filter(function (l) { return l.inject === true; }))
                .map(function (l) { return l.src; });
        }
        function bundleShims() {
            return gulp.src(getShims())
                .pipe(plugins.uglify({
                mangle: false
            }))
                .pipe(plugins.concat(config_1.JS_PROD_SHIMS_BUNDLE))
                .pipe(gulp.dest(config_1.JS_DEST));
        }
    };
};
//# sourceMappingURL=build.bundles.js.map