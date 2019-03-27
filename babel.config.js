module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: '> 2.5%',
          node: 6,
        },
      },
    ],
  ],
};
