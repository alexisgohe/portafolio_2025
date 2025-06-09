
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portafolio_2025/',
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
    'index.csr.html': {size: 4558, hash: 'da180f2e65595e2826fd7e5b3b456c39df607eecfcf6c96a40ccfe2a4caa4e4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1683, hash: 'ec472e5b536ff4ab95e28396efbb5e2f0e1ec176399972c7b15af8a8f3b6177f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BCWAXMWM.css': {size: 81226, hash: 'tpGAKg2oXfo', text: () => import('./assets-chunks/styles-BCWAXMWM_css.mjs').then(m => m.default)}
  },
};
