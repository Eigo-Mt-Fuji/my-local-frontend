import * as express from "express";
import { interfaces, controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from "inversify";

@controller("/smallworld")
export class SmallWorldController implements interfaces.Controller {

    public constructor() {}

    @httpGet("/")
    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.contentType("text/html");
        res.status(200);
        return res.render("smallworld/index");
    }
}
