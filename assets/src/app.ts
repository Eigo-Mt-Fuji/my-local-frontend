import Vue from "vue";
import VueMaterial from "vue-material";

import MyMapComponent from "./components/my-map";
import { 
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
} from 'vue2-leaflet';

Vue.use(VueMaterial);
Vue.component('l-map', LMap);

Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-popup', LPopup);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-control-attribution', LControlAttribution);
Vue.component('l-control-scale', LControlScale);
Vue.component('l-control-layers', LControlLayers);

if (document.getElementById("app")) {

    // tslint:disable-next-line:no-unused-expression
    const v = new Vue({
        components: {
            "my-map": MyMapComponent,
        },
        el: "#app",
    });
}
