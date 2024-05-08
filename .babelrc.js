module.exports = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/proposal-class-properties",
  ],
  // 使用环境变量区分esm和cjs
  env: {
    esm: {
      presets: [
        [
          "@babel/env",
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
