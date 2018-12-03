/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import 'babel-polyfill'
import 'reflect-metadata'

import 'vuetify/dist/vuetify.min.css'
import '@/assets/stylesheets/transition'

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '@/app'
import router from '@/router'
import store from '@/store'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: el,
    store,
    router,
    render: h => h(App)
  })
})
