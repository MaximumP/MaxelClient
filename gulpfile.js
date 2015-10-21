/**
 * Created by max on 17.10.15.
 */

var gulp = require('gulp'),
    bower = require('gulp-bower'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    ugilfy = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

var cfg = {
    distDirs: {
        root: './public/',
        js: {
            root: './public/js/',
            vendor: './public/js/vendor/'
        },
        css: './public/css/',
        img: './public/img/',
        font: './public/font/',
        templates: './public/templates/'
    },
    srcDirs: {
        root: './src/',
        js: './src/js/',
        css: './src/css/',
        templates: './src/templates/'
    },
    bowerDir:'./bower_components/'
};

var regEx = {
    js: '*js',
    css: '*css',
    img: '*img'
};

var vendorScripts = [
    cfg.bowerDir + 'angular/angular.min.js',
    cfg.bowerDir + 'angular-route/angular-route.min.js',
    cfg.bowerDir + 'jquery/dist/jquery.min.js',
    cfg.bowerDir + 'jquery.splitter/js/jquery.splitter-0.16.0.js',
    cfg.bowerDir + 'jquery-ui/jquery-ui.js',
    cfg.bowerDir + 'Ventus/ventus.min.js'
];

var vendorCss = [
    cfg.bowerDir + 'bootstrap/dist/css/bootstrap.min.css',
    cfg.bowerDir + 'bootstrap/dist/css/bootstrap-theme.min.css',
    cfg.bowerDir + 'Ventus/ventus.css'
];

gulp.task('bower', function(){
    return bower().pipe(gulp.dest(cfg.bowerDir))
});

//*********************************************************
//  Clean
//*********************************************************
gulp.task('clean', [
    'clean:index',
    'clean:templates',
    'clean:css',
    'clean:js'
]);

gulp.task('clean:index', function(){
    return gulp.src(cfg.distDirs.root + 'index.html', {read: false})
        .pipe(clean());
});

gulp.task('clean:templates', function(){
    return gulp.src(cfg.distDirs.templates, {read: false})
        .pipe(clean());
});

gulp.task('clean:css', function(){
    return gulp.src(cfg.distDirs.css + regEx.css, {read: false})
        .pipe(clean());
});

gulp.task('clean:js', function(){
    return gulp.src([cfg.distDirs.js.root + '**/*.js'], {read: false})
        .pipe(clean());
});
//*********************************************************
//  Copy
//*********************************************************
gulp.task('copy', [
    'copy:index',
    'copy:templates',
    'copy:vendorJs',
    'copy:css',
    'copy:vendorCss'
]);

gulp.task('copy:index', function(){
    return gulp.src(cfg.srcDirs.root + 'index.html')
        .pipe(gulp.dest(cfg.distDirs.root));
});

gulp.task('copy:templates', function(){
    return gulp.src(cfg.srcDirs.templates + '**/*')
        .pipe(gulp.dest(cfg.distDirs.templates));
});

gulp.task('copy:vendorJs', function(){
    return gulp.src(vendorScripts)
        .pipe(gulp.dest(cfg.distDirs.js.vendor));
});

gulp.task('copy:css', function(){
    return gulp.src(cfg.srcDirs.css + regEx.css)
        .pipe(gulp.dest(cfg.distDirs.css));
});

gulp.task('copy:vendorCss', function(){
    return gulp.src(vendorCss)
        .pipe(gulp.dest(cfg.distDirs.css));
});


//*********************************************************
//  Script processing
//*********************************************************
gulp.task('scripts', function(){
    return gulp.src([
        cfg.srcDirs.js + '*.js',
        cfg.srcDirs.js + '**/*.js'])
            .pipe(concat('maxel.js'))
            .pipe(gulp.dest(cfg.distDirs.js.root))
            .pipe(rename('maxel.min.js'))
            .pipe(ugilfy())
            .pipe(gulp.dest(cfg.distDirs.js.root));
});

gulp.task('build', ['copy', 'scripts'])