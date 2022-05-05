// JS 패키지를 불러올 경우 타입이 설정돼 있어야 한다.
// .d.ts 파일이 타입이 설정된 파일이다.
// import { init, exit } from "myPackage";
// import { init2, exit2 } from "./exampleJSDoc";

// import * as crypto from "crypto";
import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  hash: string;
  // hash는 prevHash, heigh, data, 세 값을 사용해 조합된다.
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  // static 함수는 클래스 안에서 사용하는 함수로 클래스 인스턴스가 없어도 부를 수 있는 함수.
  // const block123 = new Block(); block123.get(); .get은 static함수가 아님
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // this.blocks를 리턴하면 인스턴스에 직접 연결돼서 보안 위험있다. 그래서 this.blocks의 값을 새 배열로 복사해 리턴한다.
    // return this.blocks;
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

/// .push는 [...this.blocks]로 방어 함.
blockchain.getBlocks().push(new Block("xxxxxxxxx", 111111, "HACKEDDDDDDDDDD"));
// 이하는 어떻게 방어?
blockchain.getBlocks()[blockchain.getBlocks().length - 1].data =
  "hell 12312312312";

console.log(blockchain.getBlocks());
