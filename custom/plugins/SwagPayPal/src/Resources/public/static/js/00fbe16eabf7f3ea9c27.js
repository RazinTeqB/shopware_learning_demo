"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[428],{5428:function(n,e,t){t.r(e),t.d(e,{default:function(){return a}});var a=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_pui %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-pui"\n    :title="$tc(\'swag-paypal.settingForm.pui.cardTitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_pui_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-pui-fields">\n\n        {% block swag_paypal_content_card_channel_config_pui_settings_customer_service_instructions %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.puiCustomerServiceInstructions\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.puiCustomerServiceInstructions\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n        >\n            <template #content="props">\n                <sw-text-field\n                    name="SwagPayPal.settings.spbButtonLanguageIso"\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.pui.customerServiceInstructions.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.pui.customerServiceInstructions.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},methods:{checkTextFieldInheritance(n){return"string"!=typeof n||n.length<=0}}})}}]);