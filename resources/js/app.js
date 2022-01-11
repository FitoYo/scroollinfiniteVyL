require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('posts', require('./components/PostsComponent.vue').default);
Vue.component('InfiniteLoading', require('vue-infinite-loading').default);


const app = new Vue({
    el: '#app',
});
