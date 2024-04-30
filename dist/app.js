"use strict";
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
// app.ts
const express = require('express');
const mongoose_1 = require("mongoose");
const body_parser_1 = require("body-parser");
const inversify_config_1 = require("./inversify.config");
const SignupService_1 = require("./services/SignupService");
require("reflect-metadata");
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
// Create Express app
const app = express();
// Middleware
app.use((0, body_parser_1.json)());
// Routes
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const signupService = inversify_config_1.container.resolve(SignupService_1.SignupService);
    try {
        const user = yield signupService.signup(name, email, password);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map