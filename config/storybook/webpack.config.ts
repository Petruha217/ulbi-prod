import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import { buildSASSLoder } from '../loaders/buildSASSLoader'

export default function ({ config }: { config: webpack.Configuration }) {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    build: '',
    entry: ''
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('ts', 'tsx')
  // eslint-disable-next-line array-callback-return
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module.rules.push(buildSASSLoder(true))

  return config
}
