Hooks.once('init', () => {
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: 'lita-trans-mod',
      lang: 'zh-tw',
      dir: 'translations/zh-tw'
    });
  }
});