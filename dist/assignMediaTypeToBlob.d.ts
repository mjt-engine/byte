export declare const assignMediaTypeToBlob: <MT extends string>(blob: Blob, mediaType: MT) => Blob & {
    type: MT;
};
