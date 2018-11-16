const { dev } = require('react-storefront/webpack/server')
const path = require('path')
const { serverBuild, srcServer } = require('../paths')

module.exports = () => dev(path.join(__dirname, '..', '..'))({
  entry: srcServer,
  plugins: [], 
  output: {
    path: serverBuild
  }, 
  target: 'node', 
  resolve: {}
})