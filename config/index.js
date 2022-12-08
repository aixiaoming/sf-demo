const CIPluginOpt = {
  // 微信小程序
  weapp: {
    appid: "wxab574e70915e2783",
    // 此文件不存放在 git 中，下载后放在根目录下即可
    privateKeyPath: "./private/private.wxab574e70915e2783.key",
  },
  // // 字节跳动小程序
  // tt: {
  //   email: "字节小程序邮箱",
  //   password: "字节小程序密码",
  // },
  // // 支付宝小程序
  // alipay: {
  //   appId: "支付宝小程序appId",
  //   toolId: "工具id",
  //   privateKeyPath: "密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem",
  // },
  // // 百度小程序
  // swan: {
  //   token: "鉴权需要的token令牌",
  // },
  // 版本号
  version: "1.0.0",
  // 版本发布描述
  desc: "版本描述",
};

const config = {
  projectName: "sf-demo",
  date: "2022-12-8",
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-html", ["@tarojs/plugin-mini-ci", CIPluginOpt]],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "vue3",
  compiler: "webpack5",
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    esnextModules: ["nutui-taro"],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
