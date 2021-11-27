const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const cleanCSS = require("gulp-clean-css");
const { dest, src, task, watch } = require("gulp");

const style = () => {
  const processors = [];

  return src("./**/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(dest("./style"));
};
const css = (cb) => {
  style();
  cb();
};
task("less", () => {
  return style();
});

exports.default = function () {
  watch("./**/*.less", css);
  return true;
};
