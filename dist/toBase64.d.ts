import type { EventualByteLike } from "./type/EventualByteLike";
import type { ImmediateByteLike } from "./type/ImmediateByteLike";
export declare function toBase64(bytes: EventualByteLike): Promise<string>;
export declare function toBase64(bytes: ImmediateByteLike): string;
export declare function eventualToBase64(bytes: EventualByteLike): Promise<string>;
export declare function immediateToBase64(bytes: ImmediateByteLike): string;
