import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './src/popup/webpack.config';
// import eventWebpackConfig from './src/event/webpack.config';
// import contentWebpackConfig from './src/content/webpack.config';

gulp.task('popup-js', (cb) => {
  popupWebpackConfig.entry.preload = './src/popup/src/scripts/index.js';
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString({
      colors: true
    }));

    cb();
  });
});

// gulp.task('event-js', ['clean'], (cb) => {
//   webpack(eventWebpackConfig, (err, stats) => {
//     if(err) throw new plugins.util.PluginError('webpack', err);
//
//     plugins.util.log('[webpack]', stats.toString());
//
//     cb();
//   });
// });
//
// gulp.task('content-js', ['clean'], (cb) => {
//   webpack(contentWebpackConfig, (err, stats) => {
//     if(err) throw new plugins.util.PluginError('webpack', err);
//
//     plugins.util.log('[webpack]', stats.toString());
//
//     cb();
//   });
// });

gulp.task('popup-html', () => {
  return gulp.src('src/popup/src/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy-manifest', () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-img', () => {
  return gulp.src('src/icon.png')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

// gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'event-js', 'content-js']);
gulp.task('build', gulp.series('clean', gulp.parallel('copy-manifest', 'copy-img', 'popup-js', 'popup-html')));

gulp.task('watch', gulp.series('build', () => {
  gulp.watch('src/popup/**/*', gulp.parallel('build'));
  // gulp.watch('src/content/**/*', ['build']);
  // gulp.watch('src/event/**/*', ['build']);
}));
