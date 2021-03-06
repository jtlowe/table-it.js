/**
 * @license
 * Copyright Jordan Lowe. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

'use strict';

var gulp = require("gulp");
var connect = require("gulp-connect");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('typescript', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function () {
  // gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./src/*.ts'], ['typescript']);
});

gulp.task('default', ['connect', 'watch', 'typescript']);