const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry:'.src/js/script',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'script.min.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', options:{
        presets:['@babel/preset-env'],
      }
    },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: ['vue-style-loader', 'css-loader'] },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // this applies to pug imports inside JavaScript
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
