import type { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = <P = any, Res = any, Body = any, Q = any>(
    fn: (
        req: Request<P, Res, Body, Q>,
        res: Response<Res>,
        next: NextFunction
    ) => Promise<void>
): RequestHandler<P, Res, Body, Q> => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
