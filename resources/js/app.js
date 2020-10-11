/*
 * @Author: your name
 * @Date: 2020-10-07 00:11:27
 * @LastEditTime: 2020-10-10 19:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taobao/resources/js/app.js
 */
require('./bootstrap');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
              },
        }),
}).$mount(app);
