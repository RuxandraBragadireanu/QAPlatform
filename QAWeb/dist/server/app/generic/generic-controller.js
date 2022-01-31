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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
const common_1 = require("@tsed/common");
const axios_1 = require("axios");
const api_url_1 = require("../../api-url");
const exceptions_1 = require("@tsed/exceptions");
let GenericController = class GenericController {
    constructor() { }
    getGeneric(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = request.originalUrl.replace('/api/generic/', '');
            try {
                const res = yield axios_1.default.get(api_url_1.apiUrl + url);
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
    postGeneric(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = request.originalUrl.replace('/api/generic/', '');
            const body = request.body;
            const token = request.headers.authorization;
            try {
                const res = yield axios_1.default.post(api_url_1.apiUrl + url, body, {
                    headers: {
                        'Authorization': token
                    }
                });
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
    putGeneric(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = request.originalUrl.replace('/api/generic/', '');
            const body = request.body;
            const token = request.headers.authorization;
            try {
                const res = yield axios_1.default.put(api_url_1.apiUrl + url, body, {
                    headers: {
                        'Authorization': token
                    }
                });
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
    deleteGeneric(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = request.originalUrl.replace('/api/generic/', '');
            const token = request.headers.authorization;
            console.log('url: ', api_url_1.apiUrl + url);
            console.log('token: ', token);
            try {
                const res = yield axios_1.default.delete(api_url_1.apiUrl + url, {
                    headers: {
                        'Authorization': token
                    }
                });
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
};
__decorate([
    common_1.Get('/*'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenericController.prototype, "getGeneric", null);
__decorate([
    common_1.Post('/*'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenericController.prototype, "postGeneric", null);
__decorate([
    common_1.Put('/*'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenericController.prototype, "putGeneric", null);
__decorate([
    common_1.Delete('/*'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenericController.prototype, "deleteGeneric", null);
GenericController = __decorate([
    common_1.Controller('/api/generic'),
    __metadata("design:paramtypes", [])
], GenericController);
exports.GenericController = GenericController;
//# sourceMappingURL=generic-controller.js.map