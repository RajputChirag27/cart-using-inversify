"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
// inversify.config.ts
const inversify_1 = require("inversify");
const UserRepository_1 = require("./repositories/UserRepository");
const container = new inversify_1.Container();
exports.container = container;
container.bind('UserRepositoryInterface').to(UserRepository_1.UserRepository);
//# sourceMappingURL=inversify.config.js.map