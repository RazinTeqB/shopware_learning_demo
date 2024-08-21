(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[730],{9489:function(){},7730:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}}),t(3188);let{debounce:a}=Shopware.Utils;var r=Shopware.Component.wrapComponentConfig({template:'{% block sw_text_field %}\n    {% block swag_paypal_locale_field %}\n    <div class="swag-paypal-locale-field">\n\n        {% block swag_paypal_locale_field_contextual_field %}\n        <sw-contextual-field\n            v-bind="$attrs"\n            class="sw-field--text"\n            :name="formFieldName"\n            :error="error"\n            @inheritance-restore="$emit(\'inheritance-restore\', $event)"\n            @inheritance-remove="$emit(\'inheritance-remove\', $event)"\n        >\n\n            <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass, hasSuffix, hasPrefix }">\n                <input\n                    type="text"\n                    :name="identification"\n                    :id="identification"\n                    :disabled="disabled"\n                    :value="currentValue"\n                    :placeHolder="placeholder"\n                    @input="onInput"\n                    @focus="setFocusClass"\n                    @blur="onBlur($event, removeFocusClass)"\n                    v-on="additionalListeners"\n                >\n            </template>\n        </sw-contextual-field>\n        {% endblock %}\n\n        {% block swag_paypal_locale_field_information %}\n        <p class="swag-paypal-locale-field__text">\n\n            {% block swag_paypal_locale_field_information_text %}\n            {{ $tc(\'swag-paypal.settingForm.locale-field.infobox.text\') }}\n            {% endblock %}\n\n            {% block swag_paypal_locale_field_information_href %}\n            <sw-external-link\n                class="swag-paypal-locale-field__text-href"\n                href="https://developer.paypal.com/docs/api/reference/locale-codes/"\n            >\n                {{ $tc(\'swag-paypal.settingForm.locale-field.infobox.href\') }}\n            </sw-external-link>\n            {% endblock %}\n\n        </p>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n{% endblock %}\n',inject:["feature"],data(){return{error:null}},methods:{onInput:a(e=>{(void 0).checkValue(e.target.value)},350),onBlur(e,n){n(),this.checkValue(e.target.value)},checkValue(e){if(this.$emit("update:value",e||""),!e||/^[a-z]{2}_[A-Z]{2}$/.exec(e)){this.preventSave(!1),this.error=null;return}this.preventSave(!0),this.error={code:1,detail:this.$tc("swag-paypal.settingForm.locale-field.error.detail")}},preventSave(e){this.$emit("preventSave",e)}}})},3188:function(e,n,t){var a=t(9489);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(5346).Z("2bd2483d",a,!0,{})},5346:function(e,n,t){"use strict";function a(e,n){for(var t=[],a={},r=0;r<n.length;r++){var i=n[r],l=i[0],o={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[l]?a[l].parts.push(o):t.push(a[l]={id:l,parts:[o]})}return t}t.d(n,{Z:function(){return h}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},l=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,s=0,d=!1,c=function(){},p=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,n,t,r){d=t,p=r||{};var l=a(e,n);return v(l),function(n){for(var t=[],r=0;r<l.length;r++){var o=i[l[r].id];o.refs--,t.push(o)}n?v(l=a(e,n)):l=[];for(var r=0;r<t.length;r++){var o=t[r];if(0===o.refs){for(var s=0;s<o.parts.length;s++)o.parts[s]();delete i[o.id]}}}}function v(e){for(var n=0;n<e.length;n++){var t=e[n],a=i[t.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](t.parts[r]);for(;r<t.parts.length;r++)a.parts.push(g(t.parts[r]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{for(var l=[],r=0;r<t.parts.length;r++)l.push(g(t.parts[r]));i[t.id]={id:t.id,refs:1,parts:l}}}}function m(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function g(e){var n,t,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(f){var r=s++;n=w.bind(null,a=o||(o=m()),r,!1),t=w.bind(null,a,r,!0)}else n=y.bind(null,a=m()),t=function(){a.parentNode.removeChild(a)};return n(e),function(a){a?(a.css!==e.css||a.media!==e.media||a.sourceMap!==e.sourceMap)&&n(e=a):t()}}var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function w(e,n,t,a){var r=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(n,r);else{var i=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(i,l[n]):e.appendChild(i)}}function y(e,n){var t=n.css,a=n.media,r=n.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(u,n.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);