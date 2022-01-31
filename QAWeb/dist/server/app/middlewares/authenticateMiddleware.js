"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAuthenticatedMiddleware = void 0;
const common_1 = require("@tsed/common");
const exceptions_1 = require("@tsed/exceptions");
let MyAuthenticatedMiddleware = class MyAuthenticatedMiddleware {
    use(endpoint, request, next) {
        const options = endpoint.get(common_1.AuthenticatedMiddleware) || {};
        if (!request.isAuthenticated()) {
            throw new exceptions_1.Forbidden("Forbidden");
        }
        next();
    }
};
__decorate([
    __param(0, common_1.EndpointInfo()),
    __param(1, common_1.Request()),
    __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.EndpointMetadata, Object, Object]),
    __metadata("design:returntype", void 0)
], MyAuthenticatedMiddleware.prototype, "use", null);
MyAuthenticatedMiddleware = __decorate([
    common_1.OverrideMiddleware(common_1.AuthenticatedMiddleware)
], MyAuthenticatedMiddleware);
exports.MyAuthenticatedMiddleware = MyAuthenticatedMiddleware;
//# sourceMappingURL=authenticateMiddleware.js.map