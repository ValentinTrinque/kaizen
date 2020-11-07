const autoprefixer = require('autoprefixer');
const uncss = require('uncss').postcssPlugin;

module.exports = {
  plugins: [
    autoprefixer(),
    uncss({
        html: [
            './layouts/**/*.html',
            './content/**/*.md'
        ]
    }),
  ],
}