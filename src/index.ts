// JS 패키지를 불러올 경우 타입이 설정돼 있어야 한다.
// .d.ts 파일이 타입이 설정된 파일이다.
import { init, exit } from "myPackage";
import { init2, exit2 } from "./exampleJSDoc";

init({ url: "asd" });
exit(1);
