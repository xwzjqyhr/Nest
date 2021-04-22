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
exports.CatCreateController = exports.HostController = exports.CatsController = exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_cat_dto_1 = require("./cats/dto/create-cat.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(request, res) {
        console.log(request.ip, res.status);
        return request.ip;
    }
};
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
let CatsController = class CatsController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(id, params) {
        console.log(id, params);
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(':id/:sid/cc'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('sid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CatsController.prototype, "getHello", null);
CatsController = __decorate([
    common_1.Controller("cats"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], CatsController);
exports.CatsController = CatsController;
let HostController = class HostController {
    index() {
        return 'host';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HostController.prototype, "index", null);
HostController = __decorate([
    common_1.Controller({ host: 'localhost', path: 'host' })
], HostController);
exports.HostController = HostController;
let CatCreateController = class CatCreateController {
    async create(dto) {
        console.log(dto.age + dto.name + dto.breed);
        throw new common_1.HttpException({
            status: common_1.HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, common_1.HttpStatus.FORBIDDEN);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatCreateController.prototype, "create", null);
CatCreateController = __decorate([
    common_1.Controller('dtotest')
], CatCreateController);
exports.CatCreateController = CatCreateController;
//# sourceMappingURL=app.controller.js.map