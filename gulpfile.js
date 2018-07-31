'use strict';

const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;
const shell = require('gulp-shell');
const logger = require('./../../support/logger').logger;

gulp.task('eslint', () => {
    logger.info('Checking code by eslinter');
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'eslint ./ --fix'
        ]));
});

gulp.task('start-webdriver', (done) => {
    logger.info('Starting webdriver');
    gulp.src('*.js', { read: false })
        .pipe(shell([
            'start cmd /k "node_modules\\.bin\\webdriver-manager start"'
        ]));
    setTimeout(() => {
        done();
    }, 7000);
});

gulp.task('tests', () => {
    logger.info('Running tests');
    return gulp.src('./test/spec/*.js')
        .pipe(protractor({
            configFile: "./test/config/conf.js"
        }))
        .on('error', (er) => {
            throw er;
        });
});

gulp.task('show-report', () => {
    logger.info('Showing tests report');
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            '.\\reports\\my-report.html'
        ]));
});

gulp.task('default', gulp.series('eslint', 'start-webdriver', 'tests', 'show-report'));