import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {
    VSystemBar,
    VApp,
    VAppBar,
    VNavigationDrawer,
    VMain,
    VContainer,
    VCol,
    VRow,
    VFooter,
    VImg,
    VBtn,
    VList,
    VListItem,
    VListItemTitle,
    VListItemSubtitle,
    VListItemContent,
    VListItemIcon,
    VListItemAvatar,
    VDivider,
    VIcon,
    VCard,
    VBreadcrumbs,
    VForm,
    VTextField,
    VSelect,
    VCheckbox
} from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
    components: {
        VSystemBar,
        VApp,
        VAppBar,
        VNavigationDrawer,
        VMain,
        VContainer,
        VCol,
        VRow,
        VFooter,
        VImg,
        VBtn,
        VList,
        VListItem,
        VListItemTitle,
        VListItemSubtitle,
        VListItemContent,
        VListItemIcon,
        VListItemAvatar,
        VDivider,
        VIcon,
        VCard,
        VBreadcrumbs,
        VForm,
        VTextField,
        VSelect,
        VCheckbox
    }
});

export default new Vuetify({
});
