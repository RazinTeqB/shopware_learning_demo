(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[581],{5301:function(){},9581:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return r}}),a(2178);var r=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_cross_border %}\n<sw-card\n    :title="$tc(\'swag-paypal.cross-border.cardTitle\')"\n    :disabled="isLoading"\n    class="swag-paypal-cross-border"\n    position-identifier="swag-paypal-cross-border-card"\n>\n\n    {% block swag_paypal_cross_border_warning_text %}\n    <sw-alert class="swag-paypal-cross-border__warning-text" variant="warning">\n        {{ $t(\'swag-paypal.cross-border.warningText\') }}\n    </sw-alert>\n    {% endblock %}\n\n    {% block swag_paypal_cross_border_info_text %}\n    <span class="swag-paypal-cross-border__info-text">\n        {{ $tc(\'swag-paypal.cross-border.infoText\') }}\n    </span>\n    {% endblock %}\n\n    {% block swag_paypal_cross_border_messaging_enabled %}\n    <sw-inherit-wrapper\n        v-model:value="actualConfigData[\'SwagPayPal.settings.crossBorderMessagingEnabled\']"\n        :inherited-value="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.crossBorderMessagingEnabled\']"\n    >\n        <template #content="props">\n            <sw-switch-field\n                name="SwagPayPal.settings.crossBorderMessagingEnabled"\n                :map-inheritance="props"\n                :label="$tc(\'swag-paypal.cross-border.crossBorderMessagingEnable\')"\n                :disabled="isLoading || props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                :value="props.currentValue"\n                bordered\n                @update:value="props.updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    {% block swag_paypal_cross_border_buyer_country_override %}\n    <sw-inherit-wrapper\n        v-model:value="actualConfigData[\'SwagPayPal.settings.crossBorderBuyerCountry\']"\n        :inherited-value="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.crossBorderBuyerCountry\']"\n    >\n        <template #content="props">\n            <sw-single-select\n                name="SwagPayPal.settings.crossBorderBuyerCountry"\n                :map-inheritance="props"\n                :label="$tc(\'swag-paypal.cross-border.crossBorderBuyerCountryOverride\')"\n                :disabled="isLoading || props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                :value="props.currentValue ?? null"\n                :options="countryOverrideOptions"\n                @update:value="props.updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!1,default:!1},actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},computed:{countryOverrideOptions(){let e=[{label:this.$tc("locale.en-AU"),value:"en-AU"},{label:this.$tc("locale.de-DE"),value:"de-DE"},{label:this.$tc("locale.es-ES"),value:"es-ES"},{label:this.$tc("locale.fr-FR"),value:"fr-FR"},{label:this.$tc("locale.en-GB"),value:"en-GB"},{label:this.$tc("locale.it-IT"),value:"it-IT"},{label:this.$tc("locale.en-US"),value:"en-US"}].sort((e,n)=>e.label.localeCompare(n.label));return[{value:null,label:this.$tc("swag-paypal.cross-border.crossBorderBuyerCountryAuto")},...e]}}})},2178:function(e,n,a){var r=a(5301);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),a(5346).Z("c8556de2",r,!0,{})},5346:function(e,n,a){"use strict";function r(e,n){for(var a=[],r={},t=0;t<n.length;t++){var s=n[t],l=s[0],o={id:e+":"+t,css:s[1],media:s[2],sourceMap:s[3]};r[l]?r[l].parts.push(o):a.push(r[l]={id:l,parts:[o]})}return a}a.d(n,{Z:function(){return f}});var t="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!t)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},l=t&&(document.head||document.getElementsByTagName("head")[0]),o=null,i=0,d=!1,c=function(){},p=null,u="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,n,a,t){d=a,p=t||{};var l=r(e,n);return b(l),function(n){for(var a=[],t=0;t<l.length;t++){var o=s[l[t].id];o.refs--,a.push(o)}n?b(l=r(e,n)):l=[];for(var t=0;t<a.length;t++){var o=a[t];if(0===o.refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete s[o.id]}}}}function b(e){for(var n=0;n<e.length;n++){var a=e[n],r=s[a.id];if(r){r.refs++;for(var t=0;t<r.parts.length;t++)r.parts[t](a.parts[t]);for(;t<a.parts.length;t++)r.parts.push(y(a.parts[t]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{for(var l=[],t=0;t<a.parts.length;t++)l.push(y(a.parts[t]));s[a.id]={id:a.id,refs:1,parts:l}}}}function h(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function y(e){var n,a,r=document.querySelector("style["+u+'~="'+e.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(g){var t=i++;n=w.bind(null,r=o||(o=h()),t,!1),a=w.bind(null,r,t,!0)}else n=m.bind(null,r=h()),a=function(){r.parentNode.removeChild(r)};return n(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&n(e=r):a()}}var v=function(){var e=[];return function(n,a){return e[n]=a,e.filter(Boolean).join("\n")}}();function w(e,n,a,r){var t=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(n,t);else{var s=document.createTextNode(t),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(s,l[n]):e.appendChild(s)}}function m(e,n){var a=n.css,r=n.media,t=n.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(u,n.id),t&&(a+="\n/*# sourceURL="+t.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}}]);