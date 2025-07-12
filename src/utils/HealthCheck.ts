import type { Application, RequestHandler } from "express";

export const healthCheck = (app: Application)=> {
    const health: RequestHandler = (req, res) => {
        res.status(200).json({
            status: "OK",
            success: true
        });
    } 
    app.get("/", health);
}