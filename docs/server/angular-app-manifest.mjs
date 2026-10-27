
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/buntino/',
  criticalCssPlans: [[1,"/styles-HFI45TXM.css",1033,["app-root","screen-content"],[],[[5,":root","{--color-background:#fffaf1;--color-surface:#ffffff;--color-text:#17456f;--color-muted:#647b8c;--color-yellow:#ffca55;--color-blue:#38a9f5;--color-mint:#54cbd0;--color-coral:#ff8278;--color-laventer:#a18af4;--radius-card:28px;--radius-button:22px;--shadow-card:0 8px 22px rgb(23 69 111 / 10%)}",[0]],[5,"*","{box-sizing:border-box;scroll-behavior:smooth}",[0]],[37,["html","body"],"{width:100vw;height:100vh;margin:0;padding:0;background-color:#0b0f15;font-family:system-ui,-apple-system,sans-serif;color:var(--color-text);overflow:hidden;display:flex;justify-content:center;align-items:center}",[0,0],["system-ui","-apple-system","sans-serif"]],[5,1,"{display:flex;width:100vw;height:100vh;max-width:1200px;max-height:850px;padding:22px;background:linear-gradient(135deg,#222831,#11151c);border-radius:44px;box-shadow:0 30px 80px #000000d9,0 0 0 2px #ffffff14}",[3]],[5,".screen-content","{width:100%;height:100%;border-radius:28px;overflow-y:auto;overflow-x:hidden;position:relative;box-shadow:inset 0 3px 6px #ffffff80,inset 0 0 20px #0006;scrollbar-width:none}",[1]],[5,".screen-content::-webkit-scrollbar","{display:none}",[[[2],0,0,0]]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/buntino"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1549, hash: '0baa69194b9648c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: '17edb84acf10608f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13016, hash: '8a48a2733f4a885b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
