const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('backend', () => {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: [
      'node_modules/**',
      'test/**',
      'dist/**'
    ]
  })
  .on('restart', () => { console.log(`Server restarted!`) })
})

gulp.task('dev', ['backend'])
