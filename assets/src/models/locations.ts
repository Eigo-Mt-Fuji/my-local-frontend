import axios from "axios";
import {AxiosRequestConfig} from "axios";

export default class LocationsModel {

   public constructor(private baseUrl: string) {}
   private locations: any[];

   public async list() {

      const response = await axios.get(this.baseUrl + "/locations", {
        headers: {
           "Content-Type": "application/json",
        },
      }).then( (response) => {
        response.data.data.forEach( (element) => {
          console.log(element);
        });
        this.locations = response.data.data;
      }).catch( (error: any) => {
        console.log(error)
      });
   }
}
