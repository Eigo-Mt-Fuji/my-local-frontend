import Vue from "vue";

import { Component, Prop } from "vue-property-decorator";
import axios from "axios";
import {AxiosRequestConfig} from "axios";

@Component({
    template: require("../templates/my-map.vue.html"),
})
export default class MyMapComponent extends Vue {

    @Prop({default: ""})
    private _cmsBaseUrl: string;
    
    public async created() {
        const response = await axios.get(this._cmsBaseUrl + "/locations", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then( (response) => {

           this.$data.locations = response.data.data.map( (item: any) => {
              return {
                 id: 'location' + item.id,
                 position: {lat: item.lat, lng: item.lon},
                 tooltip: item.title + " / " + item.description,
                 draggable: true,
                 visible: true,
              };
          });
        }).catch( (error: any) => {
           console.log(error)
        });
    }

    public data() {
        return {
            cmsBaseUrl: this._cmsBaseUrl,
            locations: [],
            tileProviders: [
                 { 
                    name: 'OpenStreetMap',
                    visible: true,
                    attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                 },
            ]
        };
    }
}
