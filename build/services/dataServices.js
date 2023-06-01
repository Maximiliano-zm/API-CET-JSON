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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const excelToJson = require("convert-excel-to-json");
const sourceFile = { sourceFile: "/etc/API/API-CET-JSON//src/xlsx/FLUJO.xlsx" };
// /etc/API/API-CET-JSON//src/xlsx/FLUJO.xlsx
///etc/API/API-CET-JSON//src/xlsx/Cotizacion.xlsx
const sheets1 = { sheets: ["Carátula"] };
const sheets2 = { sheets: ["Resumen 365 nuevo"] };
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const callUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let apiUrl = url;
    return axios_1.default
        .request({
        url: apiUrl,
        method: "GET",
        responseType: "arraybuffer",
    })
        .then((response) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(response);
        fs_1.default.writeFileSync('/etc/API/API-CET-JSON//src/xlsx/Cotizacion.xlsx', Buffer.from(response.data));
        let Ejc = yield excelToJson(Object.assign(Object.assign(Object.assign({}, sourceFile), sheets1), { range: "G16", header: {
                rows: 12,
            }, columnToKey: {
                G: "EJECUTIVO COMERCIAL",
            } }));
        let Vuf = yield excelToJson(Object.assign(Object.assign(Object.assign({}, sourceFile), sheets1), { range: "K13", header: {
                rows: 12,
            }, columnToKey: {
                K: "VALOR UF ($) :",
            } }));
        let Vutm = yield excelToJson(Object.assign(Object.assign(Object.assign({}, sourceFile), sheets1), { range: "K14", header: {
                rows: 13,
            }, columnToKey: {
                K: "VALOR UTM ($) :",
            } }));
        let Usd = yield excelToJson(Object.assign(Object.assign(Object.assign({}, sourceFile), sheets1), { range: "K15", header: {
                rows: 14,
            }, columnToKey: {
                K: "USD ($) :",
            } }));
        let D365 = yield excelToJson(Object.assign(Object.assign(Object.assign({}, sourceFile), sheets2), { range: "A2:Z2", header: {
                row: 1,
            }, columnToKey: {
                A: "{{A1}}",
                B: "{{B1}}",
                C: "{{C1}}",
                D: "{{D1}}",
                E: "{{E1}}",
                F: "{{F1}}",
                G: "{{J1}}",
                H: "{{H1}}",
                I: "{{I1}}",
                J: "{{J1}}",
                K: "{{K1}}",
                L: "{{L1}}",
                M: "{{M1}}",
                N: "{{N1}}",
                O: "{{O1}}",
                P: "{{P1}}",
                Q: "{{Q1}}",
                R: "{{R1}}",
                S: "{{S1}}",
                T: "{{T1}}",
                U: "{{U1}}",
                V: "{{V1}}",
                W: "{{W1}}",
                X: "{{X1}}",
                Y: "{{Y1}}",
                Z: "{{Z1}}",
                AA: "{{AA1}}",
                AB: "{{AB1}}",
                AC: "{{AC1}}",
                AD: "{{AD1}}",
                AE: "{{AE1}}",
                AF: "{{AF1}}",
                AG: "{{AJ1}}",
                AH: "{{AH1}}",
                AI: "{{AI1}}",
                AJ: "{{AJ1}}",
                AK: "{{AK1}}",
                AL: "{{AL1}}",
                AM: "{{AM1}}",
                AN: "{{AN1}}",
                AO: "{{AO1}}",
                AP: "{{AP1}}",
            } }));
        console.log(Ejc, Vuf, Vutm, Usd, D365);
        return { Ejc, Vuf, Vutm, Usd, D365 };
    }))
        .catch((error) => {
        console.log();
        console.log(error.message);
    });
});
exports.default = { callUrl };
