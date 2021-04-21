"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
class LoggerMiddleware {
    use(req, res, next) {
        console.log(req.url);
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map