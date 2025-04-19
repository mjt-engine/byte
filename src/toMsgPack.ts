import { Packr } from "msgpackr";
export const toMsgPack = <T>(obj: T): Uint8Array<ArrayBufferLike> => {
  const packr = new Packr({ structuredClone: true });
  return new Uint8Array(packr.encode(obj));
};
