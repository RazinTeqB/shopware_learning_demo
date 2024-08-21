"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[313],{8313:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_spb %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-spb"\n    :title="$tc(\'swag-paypal.settingForm.spb.cardTitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_spb_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-spb-fields">\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_checkout_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbCheckoutEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbCheckoutEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.spbCheckoutEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.spb.spbCheckoutEnabled.label\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_alternaitve_payment_methods_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbAlternativePaymentMethodsEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbAlternativePaymentMethodsEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.spbAlternativePaymentMethodsEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.spb.spbAlternativePaymentMethodsEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.spb.spbAlternativePaymentMethodsEnabled.helpText\')"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_show_pay_later %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbShowPayLater\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbShowPayLater\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.spbShowPayLater"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.spb.spbShowPayLater.label\')"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_button_color %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbButtonColor\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbButtonColor\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.express.ecsButtonColor.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.spbButtonColor"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="buttonColorOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_button_shape %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbButtonShape\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbButtonShape\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.express.ecsButtonShape.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.spbButtonShape"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="buttonShapeOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_spb_settings_locale %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.spbButtonLanguageIso\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.spbButtonLanguageIso\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n        >\n            <template #content="props">\n                <swag-paypal-locale-field\n                    name="SwagPayPal.settings.spbButtonLanguageIso"\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.spb.spbButtonLanguageIso.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.spb.spbButtonLanguageIso.helpText\')"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                    @preventSave="preventSave"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},computed:{buttonColorOptions(){return[{id:"blue",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.blue")},{id:"black",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.black")},{id:"gold",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.gold")},{id:"silver",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.silver")},{id:"white",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.white")}]},buttonShapeOptions(){return[{id:"pill",name:this.$tc("swag-paypal.settingForm.express.ecsButtonShape.options.pill")},{id:"rect",name:this.$tc("swag-paypal.settingForm.express.ecsButtonShape.options.rect")}]},renderSettingsDisabled(){return!this.acl.can("swag_paypal.editor")||!this.actualConfigData["SwagPayPal.settings.spbCheckoutEnabled"]}},methods:{checkTextFieldInheritance(e){return"string"!=typeof e||e.length<=0},checkBoolFieldInheritance(e){return"boolean"!=typeof e},preventSave(e){this.$emit("preventSave",e)}}})}}]);