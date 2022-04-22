const loadCrispChat = () => {
  if (window.$crisp) {
    const scriptLoaded = document.getElementById('crispy');
    if (scriptLoaded) {
      window.$crisp.push(['do', 'chat:show']);
      return;
    }
  }
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = 'eea011fa-0917-47fe-a48a-9c0e3c46e317';

  (function() {
    var d = document;
    var s = d.createElement("script");
    s.id = 'crispy';

    s.src = 'https://client.crisp.chat/l.js';
    s.async = true;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
};

export default loadCrispChat;