export interface Ithumbnail {
  path?: string;
  extension?: string;
}

export interface Icomics {
  available: number;
  items: any[];
}
export interface Istories {
  available: number;
  items: any[];
}

export interface Ievents {
  available: number;
  items: any[];
}

export interface Iseries {
  available: number;
  items: any[];
}

export interface Iitem {
  resourceURI: string;
  name: string;
}




export interface Ihero {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: Ithumbnail;
  comics?: Icomics;
  stories?: Istories;
  events?: Ievents;
  series?: Iseries;
}