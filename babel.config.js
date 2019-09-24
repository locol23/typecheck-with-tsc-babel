module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: ['last 2 version', 'ie 11', 'node 10'],
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        debug: true,
      },
    ],
  ],
}
