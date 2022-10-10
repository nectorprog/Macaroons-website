'use strict';

const gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch');

function defaultTask(cb) {
    return gulp.src('./src/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'));
}
exports.default = defaultTask;

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('default'));
}