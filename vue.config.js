const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/yourProjectName/'
  //   : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: './', // 相对路径
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@css', resolve('src/assets/css'))
      .set('@images', resolve('src/assets/images'))
      .set('@cmp', resolve('src/components'))
      .set('@views', resolve('src/views'))
    
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/mixin.scss";
        `
      },
      postcss: {
        plugins: (loader) => [
          require('postcss-px-to-viewport')({
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
            // selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
            // exclude: [/node_modules/], //If value is regexp, will ignore the matches files.If value is array, the elements of the array are regexp.
            // include:/\/src\/assets\/css\/mobile\//,
            // include:[/dragFlow/,/frame/],
            // include: /css/, //ok
            include: /css-mobile/,
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
            mediaQuery: false // 允许在媒体查询中转换`px`
            // unitToConvert: 'px', //需要转换的单位，默认为"px"
            // viewportWidth: 1920, // 视窗的宽度，对应的是我们设计稿的宽度
            // viewportHeight: 1080,//视窗的高度，根据1920设备的宽度来指定，一般指定1080，也可以不配置
            // unitPrecision: 13, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            // propList: ['*'], // 能转化为vw的属性列表
            // viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            // fontViewportUnit: 'vw', //字体使用的视口单位
            // selectorBlackList: ['.ignore-', '.hairlines'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            // minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            // mediaQuery: false, // 允许在媒体查询中转换`px`
            // replace: true, //是否直接更换属性值，而不添加备用属性
            // exclude: [/node_modules/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            // landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            // landscapeUnit: 'vw', //横屏时使用的单位
            // landscapeWidth: 1134 //横屏时使用的视口宽度
          })
        ]
      }
    },
    // 开启 CSS source maps?
    sourceMap: true
  },
  devServer: {
    port: 8080,
    proxy: {
      '/singleMuseum': {
        target: 'http://dev.tj720.com', // 内测环境
        // target: 'http://192.168.5.198:8888', // 谢少雄
        ws: false,
        changeOrigin: true
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  // productionSourceMap: true,

  lintOnSave: undefined
}
