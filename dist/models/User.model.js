"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/User.model.ts
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=User.model.js.map