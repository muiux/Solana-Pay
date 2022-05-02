# Stable Pay Widget

A B2B2C Widget enabling merchants to accept customers payments of multiple stablecoins on multiple blockchains.

### Setup

1. Clone repo `git clone git@gitlab.com:wfh-studio/kado/stable-pay-widget.git`
2. `npm install`
3. `npm run start`

### Publish

1. `npm login`
2. `npm publish`

### Build Bundle

`npm run build:bundle`
```
<!-- Import Widget in HTML -->
<div id="kado-stable-pay-widget"></div>
<script>
  if (window.KADO_PAY_WIDGET) {
    window.KADO_PAY_WIDGET,
    ReactContentRenderer.render(
      window.KADO_PAY_WIDGET.widget,
      {
        open: true,
        onClose: () => {
          console.log('onClose')
        }
      },
      document.getElementById('kado-stable-pay-widget')
    )
  } else {
    alert("The demo does not work because the \"KADO_PAY_WIDGET\" global object is not present.");
  }
</script>
```