var gulp = require('gulp');
var utils_1 = require('./tools/utils');
gulp.task('clean', function (done) { return utils_1.task('clean', 'all')(done); });
gulp.task('clean.dev', function (done) { return utils_1.task('clean', 'dev')(done); });
gulp.task('clean.prod', function (done) { return utils_1.task('clean', 'prod')(done); });
gulp.task('check.versions', function () { return utils_1.task('check.versions'); });
gulp.task('build.docs', function () { return utils_1.task('build.docs'); });
gulp.task('serve.docs', function () { return utils_1.task('serve.docs'); });
gulp.task('serve.coverage', utils_1.task('serve.coverage'));
gulp.task('build.dev', function (done) {
    return utils_1.runSequence('clean.dev', 'tslint', 'build.assets.dev', 'build.js.dev', 'build.index.dev', done);
});
gulp.task('build.dev.watch', function (done) {
    return utils_1.runSequence('build.dev', 'watch.dev', done);
});
gulp.task('build.e2e', function (done) {
    return utils_1.runSequence('clean.dev', 'tslint', 'build.assets.dev', 'build.js.e2e', 'build.index.dev', done);
});
gulp.task('build.prod', function (done) {
    return utils_1.runSequence('clean.prod', 'tslint', 'build.assets.prod', 'build.html_css.prod', 'build.js.prod', 'build.bundles', 'build.bundles.app', 'build.index.prod', done);
});
gulp.task('build.test', function (done) {
    return utils_1.runSequence('clean.dev', 'tslint', 'build.assets.dev', 'build.js.test', 'build.index.dev', done);
});
gulp.task('build.test.watch', function (done) {
    return utils_1.runSequence('build.test', 'watch.test', done);
});
gulp.task('docs', function (done) {
    return utils_1.runSequence('build.docs', 'serve.docs', done);
});
gulp.task('serve.dev', function (done) {
    return utils_1.runSequence('build.dev', 'server.start', 'watch.serve', done);
});
gulp.task('serve.e2e', function (done) {
    return utils_1.runSequence('build.e2e', 'server.start', 'watch.serve', done);
});
gulp.task('serve.prod', function (done) {
    return utils_1.runSequence('build.prod', 'server.start', 'watch.serve', done);
});
gulp.task('test', function (done) {
    return utils_1.runSequence('build.test', 'karma.start', done);
});
