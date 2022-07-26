/**
 * 用于从字体文件中切割需要的部分
 */
const Fontmin = require('fontmin');
function clip({ text, fontSrc }) {
  // 初始化
  const fontmin = new Fontmin()
    .src(fontSrc)
    // .use(Fontmin.otf2ttf()) // ttf 转换插件
    .use(
      // 切取插件
      Fontmin.glyph({
        text // 所需文字
      })
    )
    // .use(Fontmin.ttf2woff())    // woff 转换插件
    // .use(Fontmin.ttf2svg())     // svg 转换插件
    // .use(Fontmin.css())         // css 生成插件
    .dest(fontDest); // 输出配置
  // 执行
  fontmin.run(function(err, files, stream) {
    if (err) {
      console.error(err);
    }
    console.log('成功');
  });
}

const fontDest = 'src/fonts/clipped'; // 输出路径/文件
const fontSrc = 'src/fonts/ABeeZee-Regular.ttf'; // 字体源文件
const text = '1234567890'; // 需要切出的文本
clip({ text, fontSrc, fontDest });
