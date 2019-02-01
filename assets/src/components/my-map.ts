import Vue from "vue";

import { Component, Prop } from "vue-property-decorator";

@Component({
    template: require("../templates/my-map.vue.html"),
})
export default class MyMapComponent extends Vue {

    @Prop({default: ""})
    private _cmsBaseUrl: string;

    public data() {

        return {
            cmsBaseUrl: this._cmsBaseUrl,
        };
    }
}
