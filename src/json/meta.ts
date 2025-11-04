export interface Meta  {
    version:number;
}

export function getVersion(meta:Meta) {
    return meta.version;
}

