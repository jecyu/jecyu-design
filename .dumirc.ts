import { defineConfig } from "dumi";

// 此处更换为自己的仓库名
let base = "/jecyu-design";
let publicPath = "/jecyu-design/";

if (process.env.SITE_BUILD_ENV === "PREVIEW") {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  title: "Jecyu Design", // 站点名称
  outputPath: "doc-site", // 输出文件夹
  // exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  mfsu: false, // 目前版本启动有 bug，暂时关闭
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: "./src/index.ts",
  },
  base,
  publicPath,
});
