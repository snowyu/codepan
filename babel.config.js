module.exports = {
  presets: [
    'poi/babel'
  ],
  plugins: [
    ['babel-plugin-component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
