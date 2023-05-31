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
const express_1 = __importDefault(require("express"));
const dataServices_1 = __importDefault(require("./services/dataServices"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.listen(PORT, () => {
    console.log("-RUN-");
});
app.route("/data").get(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield dataServices_1.default.callUrl(req.query.url);
            res.json({ respuesta: respuesta });
        }
        catch (error) {
            console.log(error);
        }
    });
});
//fn prueba
app.route("/pruebaData").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = "client_id=d097cc02-e3e3-44b8-9cd6-dc56e5b75baa&scope=https%3A%2f%2fgama.operations.dynamics.com%2f.default&grant_type=client_credentials&client_secret=-SuZH%401F%2BatjfxU68U2%3AwXR%3DJ189%3F%5D%2BG";
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://login.microsoftonline.com/b144de9c-24dd-462b-b82f-e94de9183f99/oauth2/v2.0/token",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
        };
        const response = yield axios_1.default.request(config).then((response) => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://gama.operations.dynamics.com/data/GMDimAttributeFinancialTagsBI',
                headers: {
                    'Authorization': 'Bearer ' + response.data.access_token,
                    'Content-Type': 'application/json'
                }
            };
            axios_1.default.request(config).then((response => {
                res.json(response.data);
            }));
        });
    }
    catch (err) {
        console.log(err);
    }
}));
