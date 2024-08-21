"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[368],{1368:function(n,e,a){a.r(e),a.d(e,{default:function(){return t}});var t=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_installment %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-installment"\n    :title="$tc(\'swag-paypal.settingForm.installment.cardTitle\')"\n    :subtitle="$tc(\'swag-paypal.settingForm.installment.cardSubtitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_installment_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-installment-fields">\n\n        {% block swag_paypal_content_card_channel_config_installment_settings_detail_page_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.installmentBannerDetailPageEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.installmentBannerDetailPageEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.installmentBannerDetailPageEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.detailPage.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.detailPage.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_installment_settings_cart_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.installmentBannerCartEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.installmentBannerCartEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.installmentBannerCartEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.cart.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.cart.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_installment_settings_off_canvas_cart_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.installmentBannerOffCanvasCartEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.installmentBannerOffCanvasCartEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.installmentBannerOffCanvasCartEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.offCanvasCart.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.offCanvasCart.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_installment_settings_login_page_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.installmentBannerLoginPageEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.installmentBannerLoginPageEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.installmentBannerLoginPageEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.loginPage.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.loginPage.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_installment_settings_footer_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.installmentBannerFooterEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.installmentBannerFooterEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.installmentBannerFooterEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.footer.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.installment.installmentBannerEnabled.footer.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},methods:{checkTextFieldInheritance(n){return"string"!=typeof n||n.length<=0},checkBoolFieldInheritance(n){return"boolean"!=typeof n}}})}}]);