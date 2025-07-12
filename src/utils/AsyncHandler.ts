import type { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = <P = any, res = any, body = any, Q = any>(
    fn: (
        req: Request<P, res, body, Q>,
        res: Response,
        next: NextFunction
    ) => Promise<void>
): RequestHandler<P, res, body, Q> => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
