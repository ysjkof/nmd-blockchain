"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// JS 패키지를 불러올 경우 타입이 설정돼 있어야 한다.
// .d.ts 파일이 타입이 설정된 파일이다.
var myPackage_1 = require("myPackage");
(0, myPackage_1.init)({ url: "asd" });
(0, myPackage_1.exit)(1);
