import type { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
import type { ImmediateByteLike } from "./type/ImmediateByteLike";
export declare const immediateHashOf: (bytes: ImmediateByteLike, algorithm: ADDRESS_ALGORITHM) => Promise<ArrayBuffer>;
