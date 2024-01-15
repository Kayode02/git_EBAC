const gulp = require(`gulp`);
const sass = require(`gulp-sass`)(require(`sass`));
const uglify = require(`gulp-uglify`);
const imagemin = require('gulp-imagemin');

function compimg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compjs () {
    return gulp.src(`./source/scripts/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`./build/scripts`))
}

function compila() {
    return gulp.src(`./source/main.scss`)
    .pipe(sass({
        outputStyle: `compressed`
    }))
    .pipe(gulp.dest("./build/main.css"))
}

exports.sass = compila;
exports.javastript = compjs;
exports.images = compimg;