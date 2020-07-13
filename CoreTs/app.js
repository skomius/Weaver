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
exports.connectNats = void 0;
const ts_nats_1 = require("ts-nats");
exports.connectNats = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var cn = yield ts_nats_1.connect({ url: 'http://localhost:4222' });
    }
    catch (err) {
        console.log(err.message);
    }
    ;
    return cn;
});
//# sourceMappingURL=app.js.map