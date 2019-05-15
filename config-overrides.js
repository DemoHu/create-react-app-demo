const { override, fixBabelImports, addWebpackAlias, useEslintRc } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

process.env.GENERATE_SOURCEMAP = "false";
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),
  useEslintRc(),
  (config) => {
    config.module.rules.push({
      loader: 'webpack-ant-icon-loader',
      enforce: 'pre',
      include: [
        path.resolve('node_modules/@ant-design/icons/lib/dist')
      ]
    });
    return config;
  },
)