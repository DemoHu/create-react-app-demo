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
  useEslintRc()
)