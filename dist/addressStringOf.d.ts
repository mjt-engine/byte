import type { ByteLike } from "./type/ByteLike";
import type { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
export declare const addressStringOf: ({ bytes, algorithm, radix, }: {
    algorithm?: ADDRESS_ALGORITHM;
    bytes: ByteLike;
    radix?: number;
}) => Promise<string>;
