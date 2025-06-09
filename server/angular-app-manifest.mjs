
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://alexisgohe.github.io/portafolio_2025/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/aos/dist/aos.js": [
    {
      "path": "chunk-LOJ7VV2K.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 4586, hash: '66e47fb2fb519b90621459fc1632bb0af91a3ba2a6989807114fe8746b410bc1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1711, hash: 'fb173c2f7f4e867570ac0e699fdf324ffedefa8e44cb306b4b320672e2645cd8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BCWAXMWM.css': {size: 81226, hash: 'tpGAKg2oXfo', text: () => import('./assets-chunks/styles-BCWAXMWM_css.mjs').then(m => m.default)}
  },
};
