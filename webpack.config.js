const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = (/* env, argv */) => {
  const devMode = process.env.NODE_ENV !== 'production'

  const StyleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader

  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: () => [
        autoprefixer({
          browserlist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
        })
      ]
    }
  }

  const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
      localIdentName: devMode ? '[local]__[hash:base64:5]' : '[hash:base64:5]',
      minimize: true
    }
  }

  const CSSLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: true,
      minimize: true
    }
  }

  const config = {
    entry: './lib/index.js',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        },
        {
          test: /\.css$/,
          use: [
            StyleLoader,
            CSSLoader,
            postCSSLoader
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [StyleLoader, CSSLoader, postCSSLoader, 'sass-loader']
        },
        {
          test: /\.module\.scss$/,
          use: [
            StyleLoader,
            CSSModuleLoader,
            postCSSLoader,
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack'
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    resolve: {
      alias: {
        'react': path.resolve(__dirname, 'node_modules', 'react'),
        'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
      },
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, './build/'),
      filename: 'index.js',
      library: '',
      libraryTarget: 'umd'
    }
  }
  return config
}
