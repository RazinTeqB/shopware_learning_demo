(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[546],{2408:function(){},2546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}}),n(717);var a=Shopware.Component.wrapComponentConfig({template:'{% block sw_settings_payment_detail_content_field_plugin %}\n<template v-if="needsOnboarding(paymentMethod.id)">\n    <swag-paypal-plugin-box-with-onboarding\n        v-if="!!paymentMethod.pluginId"\n        :plugin-id="paymentMethod.pluginId"\n        :payment-method="paymentMethod"\n    />\n</template>\n\n<template v-else>\n    {% parent %}\n</template>\n{% endblock %}\n\n{% block sw_settings_payment_detail_content_field_active %}\n<template v-if="disableActiveSwitch">\n    <sw-switch-field\n        v-model:value="paymentMethod.active"\n        v-tooltip.left="{ message: $tc(\'sw-settings-payment-detail.tooltip\') }"\n        class="sw-settings-payment-detail__field-active"\n        :disabled="disableActiveSwitch"\n        :label="$tc(\'sw-settings-payment.detail.labelActive\')"\n    />\n</template>\n\n<template v-else>\n    {% parent %}\n</template>\n{% endblock %}\n',inject:["SwagPayPalApiCredentialsService"],data(){return{merchantIntegrations:[],capabilities:{}}},computed:{disableActiveSwitch(){return!this.acl.can("payment.editor")||this.needsOnboarding(this.paymentMethod.id)}},methods:{createdComponent(){this.$super("createdComponent"),this.fetchMerchantIntegrations(),this.fetchMerchantCapabilities()},needsOnboarding(e){return!!Object.keys(this.capabilities).includes(e)&&"INACTIVE"===this.capabilities[e].toUpperCase()},fetchMerchantIntegrations(){this.SwagPayPalApiCredentialsService.getMerchantInformation().then(e=>{this.merchantIntegrations=e.merchantIntegrations??[]})},async fetchMerchantCapabilities(){let e=await this.SwagPayPalApiCredentialsService.getMerchantInformation();this.capabilities=e.capabilities??{}}}})},717:function(e,t,n){var a=n(2408);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(5346).Z("f28422c0",a,!0,{})},5346:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},i=0;i<t.length;i++){var r=t[i],s=r[0],o={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};a[s]?a[s].parts.push(o):n.push(a[s]={id:s,parts:[o]})}return n}n.d(t,{Z:function(){return f}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},p=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,i){d=n,p=i||{};var s=a(e,t);return m(s),function(t){for(var n=[],i=0;i<s.length;i++){var o=r[s[i].id];o.refs--,n.push(o)}t?m(s=a(e,t)):s=[];for(var i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete r[o.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],a=r[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(v(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(v(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(h){var i=l++;t=b.bind(null,a=o||(o=g()),i,!1),n=b.bind(null,a,i,!0)}else t=w.bind(null,a=g()),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){a?(a.css!==e.css||a.media!==e.media||a.sourceMap!==e.sourceMap)&&t(e=a):n()}}var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function w(e,t){var n=t.css,a=t.media,i=t.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(u,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);