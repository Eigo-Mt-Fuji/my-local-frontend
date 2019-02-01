import Vue from "vue";
import VueMaterial from "vue-material";

import MyMapComponent from "./components/my-map";
import { LMap } from 'vue2-leaflet';

Vue.use(VueMaterial);
Vue.component('l-map', LMap);

if (document.getElementById("app")) {

    // tslint:disable-next-line:no-unused-expression
    const v = new Vue({
        components: {
            "my-map": MyMapComponent,
        },
        el: "#app",
    });
}
