import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildSASSLoder } from '../loaders/buildSASSLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const sassLoader = buildSASSLoder(isDev)
  return [
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
    sassLoader
  ]
}
