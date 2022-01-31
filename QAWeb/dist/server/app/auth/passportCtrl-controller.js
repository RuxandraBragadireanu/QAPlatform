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
exports.PassportCtrl = void 0;
const Passport = require("passport");
const common_1 = require("@tsed/common");
const axios_1 = require("axios");
const api_url_1 = require("../../api-url");
const exceptions_1 = require("@tsed/exceptions");
Passport.serializeUser(function (user, done) {
    done(null, user);
});
Passport.deserializeUser(function (user, done) {
    done(null, user);
});
let PassportCtrl = class PassportCtrl {
    login(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = request.body;
            try {
                const res = yield axios_1.default.post(api_url_1.apiUrl + "/user/login", {
                    username,
                    password
                });
                console.log('response login', res.data);
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
    signup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = request.body;
            try {
                const res = yield axios_1.default.post(api_url_1.apiUrl + "/user/register", {
                    username,
                    password,
                    role: 0
                });
                return res.data;
            }
            catch (e) {
                console.log('something went wrong... ', e);
                throw new exceptions_1.BadRequest("Something went wrong...");
            }
        });
    }
    logout(request) {
        request.logout();
        return "Success!";
    }
};
__decorate([
    common_1.Post("/login"),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PassportCtrl.prototype, "login", null);
__decorate([
    common_1.Post("/signup"),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PassportCtrl.prototype, "signup", null);
__decorate([
    common_1.Post("/logout"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PassportCtrl.prototype, "logout", null);
PassportCtrl = __decorate([
    common_1.Controller("/auth")
], PassportCtrl);
exports.PassportCtrl = PassportCtrl;
function myStringify(obj) {
    var cache = [];
    return JSON.stringify(obj, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                try {
                    return JSON.parse(JSON.stringify(value));
                }
                catch (error) {
                    return;
                }
            }
            cache.push(value);
        }
        return value;
    });
}
//# sourceMappingURL=passportCtrl-controller.js.map