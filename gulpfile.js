var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
const shell = require('gulp-shell');

gulp.task('eslint', () => {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'eslint ./ --fix'
        ]));
});

gulp.task('start-webdriver', (done) => {
    gulp.src('*.js', { read: false })
        .pipe(shell([
            'start cmd /k "node_modules\\.bin\\webdriver-manager start"'
        ]));
    setTimeout(() => {
        done();
    }, 7000);
});

gulp.task('tests', () => {
    return gulp.src('./test/spec/*.js')
        .pipe(protractor({
            configFile: "./test/config/conf.js"
        }))
        .on('error', (er) => {
            throw er;
        });
});

gulp.task('show-report', () => {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            '.\\reports\\my-report.html'
        ]));
});

gulp.task('default', gulp.series('eslint', 'start-webdriver', 'tests', 'show-report'));