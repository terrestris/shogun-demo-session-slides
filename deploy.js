var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com:terrestris/shogun-demo-session-slides.git'
}, function(err) {
  console.log(err ? err.message : 'Deployed!');
});
