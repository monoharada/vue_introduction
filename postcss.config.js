module.exports = {
  map: {
    inleine: false,
  },
plugins: {
  'postcss-import':{},
  'postcss-custom-properties':{},
  'postcss-nesting':{},
  autoprefixer: {
      cascade: false,
      grid: true,
    },
    'postcss-csso':{},
  },
}


