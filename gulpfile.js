const { src, dest, parallel, series, watch } = require('gulp');
const concat       = require('gulp-concat');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const browserSync  = require('browser-sync').create();

function browser() {
    browserSync.init({
        server: { baseDir: 'app/'},
        notify: false,
        online: true
    })
}

function styles() {
    return src('app/sсss/main.scss')
        .pipe(sass())
        .pipe(concat('app.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss(({ level: { 1: { specialComments: 0 }}})))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function startWatch(){
    watch('app/**/*.scss', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browserSync = browser;
exports.styles  = styles;
exports.default = parallel(browser, startWatch);
